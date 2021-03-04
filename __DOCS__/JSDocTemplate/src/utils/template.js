var fs = require('jsdoc/fs');
var path = require('jsdoc/path');
var helper = require('jsdoc/util/templateHelper');
var markdown = require('jsdoc/util/markdown').getParser();
var hbs = require('./handlebarsHelper');
var lunr = require('./lunrHelper');
var processor = require('./postProcessor');
var sanitizeHtml = require('sanitize-html');
var extend = require('extend');
var moment = require('moment');

var kinds = exports.kinds = {
	custom: ['readme', 'global', 'source', 'tutorial', 'list'],
	pages: ['readme', 'global', 'source', 'tutorial', 'list', 'class', 'external', 'mixin', 'module', 'namespace', 'interface'],
	symbols: ['tutorial', 'class', 'external', 'event', 'mixin', 'module', 'namespace', 'interface', 'member', 'function', 'constant', 'typedef'],
	global: ['member', 'function', 'constant', 'typedef']
};

var options = exports.options = extend({
	includeDate: true,
	dateFormat: "Do MMM YYYY",
	systemName: "FooDoc",
	systemSummary: "A Bootstrap and Handlebars based template for JSDoc3.",
	systemLogo: "",
	systemColor: "",
	navMembers: [],
	footer: "",
	copyright: "FooDoc Copyright © 2016 The contributors to the JSDoc3 and FooDoc projects.",
	linenums: true,
	collapseSymbols: true,
	inverseNav: true,
	inlineNav: false,
	outputSourceFiles: true,
	sourceRootPath: null,
	disablePackagePath: true,
	outputSourcePath: false,
	showTableOfContents: true,
	showAccessFilter: true,
	analytics: null,
	methodHeadingReturns: true,
	sort: "linenum, longname, version, since",
	search: true,
	favicon: null,
	stylesheets: [],
	scripts: []
}, env.conf.templates || {});
if (!options.navMembers.length){
	options.navMembers = [
	{"kind": "class", "title": "Classes", "summary": "All documented classes."},
	{"kind": "external", "title": "Externals", "summary": "All documented external members."},
	{"kind": "global", "title": "Globals", "summary": "All documented globals."},
	{"kind": "mixin", "title": "Mixins", "summary": "All documented mixins."},
	{"kind": "interface", "title": "Interfaces", "summary": "All documented interfaces."},
	{"kind": "module", "title": "Modules", "summary": "All documented modules."},
	{"kind": "namespace", "title": "Namespaces", "summary": "All documented namespaces."},
	{"kind": "tutorial", "title": "Tutorials", "summary": "All available tutorials."}
];
}

var faviconTypes = {
	'.ico': 'image/x-icon',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif'
};

var config = exports.config = {
	debug: false,
	raw: env.opts,
	version: env.version.number,
	date: moment().format(options.dateFormat),
	faviconType: options.favicon ? faviconTypes[path.extname(options.favicon)] : null,
	dir: {
		root: null,
		tmpl: null,
		static: null,
		output: env.opts.destination,
		images: path.join( env.opts.destination, 'img' ),
		tutorials: env.opts.tutorials
	}
};

var raw = exports.raw = {
	data: null,
	opts: {},
	tutorials: []
};

var configured = false;
exports.configure = function(taffyData, opts, tutorials){
	raw.data = helper.prune(taffyData);
	raw.opts = opts;
	raw.tutorials = tutorials;
	config.dir.root = opts.templates;
	config.dir.tmpl = path.join(opts.template, 'tmpl');
	config.dir.static = path.join(opts.template, 'static');
	configured = true;
	return config;
};

var navbar = exports.navbar = {};

exports.postProcess = function(){
	processor.registerReadme();
	processor.registerModules();
	processor.registerGlobals();
	processor.registerDoclets();
	processor.registerSources();
	processor.registerTutorials();
	processor.registerLists();
	processor.process();
	processor.buildNavbar(navbar);
};

exports.publish = function(){
	generateStaticFiles();
	generateDocs();
	lunr.writeFilesSync(true);
};

exports.sanitize = function(html){
	if (typeof html !== 'string') return;
	return sanitizeHtml(html, {allowedTags: [], allowedAttributes: []}).replace(/\s+/g, ' ').trim();
};

/**
 * @summary Find items in the current TaffyDB that match the specified key-value pairs.
 * @param {Object|function} spec - An object of key-value pairs to match against (e.g. `{longname:"foo"}`), or a function that returns `true` if a value matches.
 * @returns {Array.<Object>} The matching items.
 * @example {@caption The following shows supplying an object to perform a by example search against the data.}
 * var foo = helper.find({longname:"foo"}).first(); // get the first doclet with a longname of `foo`
 * var children = helper.find({memberof:"foo"}); // get all doclets which belong to the `foo` doclet.
 */
var find = exports.find = function (spec, sort) {
	if (!configured) return [];
	return sort ? raw.data(spec).order(sort).get() : raw.data(spec).get();
};

var linkto = exports.linkto = function(longname, linkText){
	var text = (linkText || longname)+'';
	// if no linkText was supplied lookup the longname and use the `linkText` property for the doclet.
	if (typeof linkText !== 'string'){
		var found = find({longname: longname});
		if (found.length && found[0].kind){
			var doclet = found[0];
			text = doclet.linkText || text;
			if (doclet.kind === 'tutorial'){
				return helper.toTutorial(doclet.longname, text, { tag: 'em', classname: 'disabled' });
			}
		}
	}
	return helper.linkto(longname, text);
};

var getPages = exports.getPages = function(sort){
	var members = {};
	kinds.pages.forEach(function(kind){
		members[kind] = find({kind: kind}, sort);
	});
	return members;
};

var generateStaticFiles = exports.generateStaticFiles = function(){
	// first copy all files within the templates 'static' directory to the output directory
	var files = fs.ls(config.dir.static, 3);
	files.forEach(function(fileName){
		var toDir = fs.toDir( fileName.replace( config.dir.static, config.dir.output ) );
		fs.mkPath( toDir );
		fs.copyFileSync( fileName, toDir );
	});

	// then copy the systemLogo file if one was supplied and update the option with the output file path
	if (options.systemLogo){
		var stats = fs.lstatSync(options.systemLogo);
		if (stats.isFile()){
			fs.mkPath(config.dir.images);
			fs.copyFileSync(options.systemLogo, config.dir.images);
			options.systemLogo = 'img/'+path.basename(options.systemLogo);
		}
	}

	// same for the favicon
	if (options.favicon){
		var stats = fs.lstatSync(options.favicon);
		if (stats.isFile()){
			fs.copyFileSync(options.favicon, env.opts.destination, 'favicon' + path.extname(options.favicon));
			options.favicon = 'favicon' + path.extname(options.favicon);
		}
	}

	// then copy all user supplied files
	var userFiles;
	if (options.default && (userFiles = options.default.staticFiles)) {
		// The canonical property name is `include`. We accept `paths` for backwards compatibility with a bug in JSDoc 3.2.x.
		var paths = userFiles.include || userFiles.paths || [];
		var filter = new (require('jsdoc/src/filter')).Filter(userFiles);
		var scanner = new (require('jsdoc/src/scanner')).Scanner();
		paths.forEach(function(filePath) {
			var files = scanner.scan([filePath], 10, filter);
			files.forEach(function(fileName) {
				var from = fs.toDir(filePath);
				var toDir = fs.toDir( fileName.replace(from, config.dir.output) );
				fs.mkPath(toDir);
				fs.copyFileSync(fileName, toDir);
			});
		});
	}
};

var generateDocs = exports.generateDocs = function(){
	var pages = getPages();
	Object.keys(pages).forEach(function(kind){
		if (pages[kind].length){
			pages[kind].forEach(function(doclet){
				var filename = doclet.kind === 'tutorial' ? helper.tutorialToUrl(doclet.longname) : helper.longnameToUrl[doclet.longname];
				if (!filename) return;

				if (doclet.kind === 'list' && !doclet.members.length) return;

				var output = path.join(config.dir.output, filename),
					html = hbs.render(doclet, doclet.kind !== 'source');

				if (html === null) return;

				fs.writeFileSync(output, html, 'utf8');
				if (doclet.kind !== 'source'){
					lunr.add(doclet, html);
				}
			});
		}
	});
};

var hasNavMember = exports.hasNavMember = function(kind){
	return options.navMembers.findIndex(function(member){
		return member.kind == kind;
	}) != -1;
};

exports.createCrumbs = function(doclet){
	var crumbs = [];
	if (doclet.kind === 'readme' || doclet.kind === 'source') return crumbs;
	crumbs.push(linkto("index", "Home"));
	if (doclet.kind !== 'list' && doclet.kind !== 'global' && hasNavMember(doclet.kind)){
		crumbs.push(linkto("list:"+doclet.kind));
	}
	if (doclet.kind === 'tutorial'){
		helper.getAncestors(raw.data, doclet).forEach(function(ancestor){
			crumbs.push(linkto(ancestor.longname));
		});
		crumbs.push(doclet.title || doclet.name);
	} else {
		crumbs.push(doclet.ancestors.join('') + doclet.name);
	}
	return crumbs;
};