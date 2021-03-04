var fs = require('jsdoc/fs');
var path = require('jsdoc/path');
var helper = require('jsdoc/util/templateHelper');
var doop = require('jsdoc/util/doop');
var handle = require('jsdoc/util/error').handle;
var template = require('./template');
var doc = require('./docletHelper');
var glob = require('glob');
var extend = require('extend');

exports.process = function(){
	template.raw.data.sort(template.options.sort);

	template.raw.data().each(function(doclet){
		doclet.ancestors = helper.getAncestorLinks(template.raw.data, doclet);
		doclet.linkText = doc.getLinkText(doclet);
		doclet.summary = doc.getSummary(doclet);
		doclet.params = doc.getParamsOrProps(doclet, 'params');
		doc.checkParamsOrProps(doclet, 'params');
		doclet.properties = doc.getParamsOrProps(doclet, 'properties');
		doc.checkParamsOrProps(doclet, 'properties');
		doclet.attribs = doc.getAttribs(doclet);
		doclet.signature = doc.getSignature(doclet);
		doclet.examples = doc.getExamples(doclet);
		doclet.fires = doc.getFires(doclet);
		doclet.requires = doc.getRequires(doclet);
		doclet.pageTitle = doc.getPageTitle(doclet, true);
		doclet.pageTitleHTML = doc.getPageTitle(doclet, false);
		doclet.symbolTitle = doc.getSymbolTitle(doclet, true);
		doclet.symbolTitleHTML = doc.getSymbolTitle(doclet, false);
		doclet.primaryTitle = doc.getPrimaryTitle(doclet, true);
		doclet.primaryTitleHTML = doc.getPrimaryTitle(doclet, false);
		doclet.listTitle = doc.getListTitle(doclet, true);
		doclet.listTitleHTML = doc.getListTitle(doclet, false);
		doclet.hasDetails = doc.hasDetails(doclet);
		doclet.inherited = doc.isInherited(doclet);
		doclet.access = typeof doclet.access == 'string' ? doclet.access : "public";
		// todo: maybe expose this as an additional option, basically switches the description to a summary if no summary was supplied and the descriptions text is shorter than 120 characters
		//if (!doclet.summary.length && doclet.description && template.sanitize(doclet.description).length <= 120){
		//	doclet.summary = doclet.description;
		//	doclet.description = '';
		//}
		if (typeof doclet.showTableOfContents != 'boolean'){
			doclet.showTableOfContents = template.options.showTableOfContents;
		}
	});

	template.raw.data().each(function(doclet){
		doclet.symbols = doc.getSymbols(doclet);
		doclet.showAccessFilter = doc.getShowAccessFilter(doclet);
	});
};

var hasOwnProp = Object.prototype.hasOwnProperty;
function getFilename(longname) {
	var fileUrl;
	if ( hasOwnProp.call(helper.longnameToUrl, longname) ) {
		fileUrl = helper.longnameToUrl[longname];
	} else {
		fileUrl = helper.getUniqueFilename(longname);
		helper.registerLink(longname, fileUrl);
	}
	return fileUrl;
}

/**
 * @summary Registers the given doclet creating and registering a link for it and appending an id value to use when rendering in HTML.
 * @param doclet - The doclet to register.
 */
var registerDoclet = exports.registerDoclet = function (doclet) {
	var url;
	if (template.kinds.custom.indexOf(doclet.kind) !== -1) {
		url = helper.getUniqueFilename(doclet.longname);
	} else if (doclet.kind === 'event') {
		url = getFilename(doclet.memberof || helper.globalName);
		if ( (doclet.name !== doclet.longname) || (doclet.scope === helper.globalName) ) {
			url += '#' + (helper.scopeToPunc[doclet.scope] === '#' ? '' : helper.scopeToPunc[doclet.scope]) + 'event:' + doclet.name.replace(/(^"|"$)/g, "");
		}
	} else {
		url = helper.createLink(doclet);
	}
	helper.registerLink(doclet.longname, url);
	if (helper.longnameToUrl[doclet.longname].indexOf('#') > -1) {
		doclet.id = helper.longnameToUrl[doclet.longname].split(/#/).pop();
	} else {
		doclet.id = doclet.name;
	}
};

/**
 * @summary Registers the README.md file as the `readme` doclet.
 * @description This not only registers the doclet but also the link associated with it, reserving it prior to registering any other links.
 *
 * The doclet is built up using the `systemName` and `systemSummary` options as the values for the associated `name` and `summary` properties of a doclet. The `longname` is simply the filename which is `index.html` and the `contents` is the markdown parsed `README.md` supplied as a source to jsdoc.
 * @example {@caption The following shows the basic structure of the generated doclet.}
 * {
	 * 	kind: "readme",
	 * 	longname: "index.html",
	 * 	name: "<option:systemName>",
	 * 	summary: "<option:systemSummary>",
	 * 	contents: "<markdown:README.md>"
	 * }
 */
exports.registerReadme = function () {
	var doclet = {
		kind: 'readme',
		longname: 'index',
		name: template.options.systemName,
		summary: template.options.systemSummary,
		contents: template.raw.opts.readme
	};
	registerDoclet(doclet);
	template.raw.data.insert(doclet);
};

exports.registerGlobals = function(){
	var options = template.options.navMembers.find(function(member){ return member.kind === "global"; });
	if (!options){
		options = {
			title: "Globals",
			summary: "All documented globals."
		};
	}
	var doclet = {
		kind: 'global',
		longname: helper.globalName,
		name: options.title,
		summary: options.summary,
		members: template.find({
			kind: template.kinds.global,
			memberof: { isUndefined: true }
		}, "longname, version, since"),
		showTableOfContents: true,
		showAccessFilter: false
	};
	registerDoclet(doclet);
	template.raw.data.insert(doclet);
};

exports.registerListeners = function(){
	helper.addEventListeners(template.raw.data);
};

/**
 * @summary Registers all default doclets.
 */
exports.registerDoclets = function(){
	template.raw.data().each(function(doclet){
		if (template.kinds.custom.indexOf(doclet.kind) === -1) {
			registerDoclet(doclet);
		}
	});
};

exports.registerModules = function(){
	var mapping = {};
	template.raw.data({
		kind: ['class', 'function'],
		longname: {
			left: 'module:'
		}
	}).each(function(doclet){
		var longname = doclet.longname;
		mapping[longname] = mapping[longname] || [];
		mapping[longname].push(doclet);
	});
	template.raw.data({kind: 'module'}).each(function(module){
		if (mapping[module.longname]){
			mapping[module.longname].filter(function(doclet){
				return doclet.summary || doclet.description || doclet.kind === 'class';
			}).forEach(function(doclet){
				doclet.exported = true;
				doclet.memberof = module.longname;
				var scope = helper.scopeToPunc[doclet.scope] || '>';
				doclet.longname = module.longname + scope + doclet.name;
			});
		}
	});
};

/**
 * @summary Registers all source files as a `source` doclet.
 * @description This method takes into account the `sourceRootPath` option and will remove this value from the file path when generating the `longname` value for the doclet. If this option is not supplied the default behavior is to find the common prefix of all file paths and trim that.
 */
exports.registerSources = function () {
	var sourceFilePaths = [];
	// iterate all default doclets and build the source file path if the file meta exists and add it to the doclet as meta.filepath
	template.raw.data().each(function (doclet) {
		if (template.kinds.custom.indexOf(doclet.kind) === -1) {
			if (doclet.meta) {
				var src = doclet.meta.path && doclet.meta.path !== 'null'
					? doclet.meta.path + '/' + doclet.meta.filename
					: doclet.meta.filename;

				doclet.linenum = doclet.meta.lineno; // add the linenum to the base doclet so we can sort by it
				doclet.meta.filepath = path.normalize(src);
				// push the full source file path into the array if it doesn't exist
				if (sourceFilePaths.indexOf(doclet.meta.filepath) === -1) {
					sourceFilePaths.push(doclet.meta.filepath);
				}
			}
		}
	});

	var pathToLongname = {};
	if (sourceFilePaths.length) {
		var sources = [], root = template.options.sourceRootPath;
		if (!root) root = path.commonPrefix(sourceFilePaths);
		sourceFilePaths.forEach(function (filePath) {
			var short = filePath.replace(root, '').replace(/\\/g, '/');
			var doclet = {kind: "source", longname: short, name: short, code: "", showTableOfContents: false};
			try {
				doclet.code = helper.htmlsafe(fs.readFileSync(filePath, 'utf8'));
				pathToLongname[filePath] = short;
				registerDoclet(doclet);
				sources.push(doclet);
			} catch (e) {
				handle(e);
			}
		});
		template.raw.data.insert(sources);
	}

	// now that the sources are registered go back and update the default doclets so they contain the relevant source properties
	template.raw.data().each(function (doclet) {
		// only update default kinds with the source file info
		if (template.kinds.custom.indexOf(doclet.kind) === -1) {
			// if there is a registered source file for this doclet
			if (doclet.meta && doclet.meta.filepath && pathToLongname[doclet.meta.filepath]) {
				// build up the plain as well as html text source properties
				doclet.source = pathToLongname[doclet.meta.filepath];
				doclet.sourcelink = helper.linkto(doclet.source);
				if (template.options.linenums) {
					doclet.sourcelink += ', ' + helper.linkto(doclet.source, 'line ' + doclet.meta.lineno, null, 'line-' + doclet.meta.lineno);
				}
			}
			doclet.hasSource = !!(doclet.source && (template.options.outputSourceFiles || template.options.outputSourcePath));
		}
	});
};

var flattenTutorialConfig = function(obj, base){
	if (!base) base = {};
	Object.keys(obj).forEach(function(key){
		var config = obj[key];
		base[key] = config;
		if (config && config.children && !config.children.length){
			flattenTutorialConfig(config.children, base);
		}
	});
	return base;
};

var getTutorialToConfig = function(){
	if (!template.config.dir.tutorials) return {};
	var files = glob.sync('*.json', {cwd: template.config.dir.tutorials}), json = {};
	files.forEach(function(file){
		var raw = fs.readFileSync(path.join(template.config.dir.tutorials, file), "utf8");
		extend(true, json, JSON.parse(raw));
	});
	return flattenTutorialConfig(json);
};

var processTutorial = function(tutorial, tutorials, tutorialToConfig){
	if (!tutorials) tutorials = [];
	tutorial.children.forEach(function(child) {
		child.kind = 'tutorial';
		child.longname = child.name;
		child.title = child.title || child.name;
		child.memberof = tutorial.name;
		child.contents = child.parse();
		child.showTableOfContents = template.options.showTableOfContents;
		var config;
		if (config = tutorialToConfig[child.longname]){
			if (config.summary){
				child.summary = config.summary;
			}
			if (config.description){
				child.description = config.description;
			}
			if (typeof config.showTableOfContents === 'boolean'){
				child.showTableOfContents = config.showTableOfContents;
			}
		}
		tutorials.push(child);
		processTutorial(child, tutorials, tutorialToConfig);
	});
	return tutorials;
};

exports.registerTutorials = function(){
	helper.setTutorials(template.raw.tutorials);
	var tutorialToConfig = getTutorialToConfig();
	var tutorials = processTutorial(template.raw.tutorials, false, tutorialToConfig);
	tutorials.forEach(function(tutorial){
		template.raw.data.insert(tutorial);
	});
};

exports.registerLists = function(){
	template.options.navMembers.forEach(function(member){
		// the global kind is register just after the index to reserve it's name so don't do it again
		if (member.kind == "global") return;

		var doclet = {
			kind: 'list',
			longname: "list:" + member.kind,
			for: member.kind,
			name: member.title,
			summary: member.summary,
			showTableOfContents: true,
			showAccessFilter: false,
			members: template.find({kind: member.kind}, "longname, version, since")
		};
		if (member.kind == 'tutorial'){
			doclet.members = doclet.members.filter(function(m){ return !m.memberof; });
		}
		registerDoclet(doclet);
		template.raw.data.insert(doclet);
	});
};

exports.buildNavbar = function(navbar){
	navbar.index = {
		kind: 'readme',
		link: helper.longnameToUrl['index'],
		title: template.options.systemName,
		summary: template.options.systemSummary,
		members: []
	};
	navbar.topLevel = template.find({kind:['list','global']}, "longname, name").filter(function(doclet){
		return doclet.members.length > 0 && (doclet.kind == 'list' || template.hasNavMember(doclet.kind));
	}).map(function(doclet){
		return {
			title: doclet.name,
			summary: doclet.summary,
			link: helper.longnameToUrl[doclet.longname],
			members: doclet.members.map(function(member){
				return template.linkto(member.longname);
			})
		};
	});
};