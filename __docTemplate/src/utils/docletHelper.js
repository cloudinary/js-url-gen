var template = require('./template');
var helper = require('jsdoc/util/templateHelper');
var markdown = require('jsdoc/util/markdown').getParser();

var supportsParams = function (doclet) {
	return doclet.kind === 'function' || doclet.kind === 'class' || (doclet.kind === 'typedef' && !!doclet.type && !!doclet.type.names && doclet.type.names.some(function (name) {
			return name.toLowerCase() === 'function';
		}));
};

var getLinkText = exports.getLinkText = function(doclet){
	var text = doclet.longname;
	if (["class", "module", "namespace", "mixin", "interface", "event"].indexOf(doclet.kind) !== -1) {
		text = text.replace("module:", "");
		if ("event" === doclet.kind) {
			text = text.replace("event:", "");
		}
		if ("module" === doclet.kind){
			text = text.split('>').pop();
		}
	} else if ("external" === doclet.kind) {
		text = doclet.name.replace(/(^"|"$)/g, "");
	} else if ("tutorial" === doclet.kind || "readme" === doclet.kind || "list" === doclet.kind) {
		text = doclet.title || doclet.name;
	}
	return text;
};

exports.getAttribs = function (doclet) {
	if (supportsParams(doclet) || doclet.kind === 'member' || doclet.kind === 'constant') {
		var attribs = helper.getAttribs(doclet);
		return attribs.length ? '<span class="signature-attribs">' + helper.htmlsafe('<' + attribs.join(', ') + '> ') + '</span>' : '';
	}
	return '';
};

exports.getSignature = function (doclet) {
	var signature = '';
	if (supportsParams(doclet)) {
		signature += '<span class="signature-params">(';
		if (doclet.params && doclet.params.length) {
			signature += ' ';

			var optionalClose = [];
			doclet.params.forEach(function (p, i) {
				if (p.name && p.name.indexOf('.') === -1) {
					if (!p.optional && optionalClose.length){
						signature += optionalClose.pop();
					}
					var name = '<span class="signature-param">' + (p.variable ? '...' + p.name : p.name) + '</span>',
						separator = i > 0 ? (p.optional ? ' [,&nbsp;' : ', ') : (p.optional ? '[&nbsp;' : '');
					signature += separator + name;
					if (p.optional) optionalClose.push('&nbsp;]');
				}
			});

			signature += optionalClose.join('') + '&nbsp;';
		}
		signature += ')</span>';
		if (template.options.methodHeadingReturns) {
			var returnTypes = helper.getSignatureReturns(doclet);
			signature += '<span class="signature-type">' + (returnTypes.length ? ' &rarr;&nbsp;{' + returnTypes.join('|') + '}' : '') + '</span>';
		}
	} else if (doclet.kind === 'member' || doclet.kind === 'constant') {
		var types = helper.getSignatureTypes(doclet);
		signature += '<span class="signature-type">' + (types.length ? ' :' + types.join('|') : '') + '</span>';
		//todo: check if this is required
		//doclet.kind = 'member';
	}
	return signature;
};

exports.getExamples = function (doclet) {
	if (!doclet.examples || !doclet.examples.length) return [];
	return doclet.examples.map(function (example) {
		// perform parsing of the example content to extract custom inner tags
		// create a new example object to return as the result of the mapping
		var result = {
			caption: '',
			code: '',
			lang: 'javascript',
			run: false
		};

		// parse caption supplied using the default <caption></caption> syntax
		if (example.match(/^\s*?<caption>([\s\S]+?)<\/caption>(\s*)([\s\S]+?)$/i)) {
			example = RegExp.$3;
			result.caption = markdown(RegExp.$1);
		}

		// parse caption supplied using the {@caption <markdown>} inner tag
		var caption = /^\s*?\{@caption\s(.*?)}\s*?/.exec(example);
		if (caption && caption[1]) {
			example = example.replace(caption[0], "");
			result.caption = markdown(caption[1]); // parse markdown and set result value
		}
		// parse lang supplied using the {@lang <string>} inner tag, this should be a prism.js supported language to get syntax highlighting.
		var lang = /\s*?\{@lang\s(.*?)}\s*?/.exec(example);
		if (lang && lang[1]) {
			example = example.replace(lang[0], "");
			result.lang = lang[1];
		}
		// parse run supplied using the {@run <boolean>} inner tag, this allows the example to be executed with any console.log calls being piped into a textarea.
		// NOTE: if lang !== 'javascript' the {@run} inner tag is simply removed from the example code, we only support running javascript.
		var run = /\s*?\{@run\s(.*?)}\s*?/.exec(example);
		if (run && run[1]) {
			example = example.replace(run[0], "");
			// if the run tag is supplied it is always true regardless of the value so just test if the lang is javascript and use that value
			result.run = result.lang === 'javascript';
		}
		// the example should now contain just the code
		result.code = example;
		return result;
	});
};

var expandLongnames = function(longnames, parent){
	var results = [];
	var generated = template.kinds.pages.indexOf(parent.kind) !== -1;
	var memberof = generated ? parent.longname : parent.memberof;
	var leftovers = longnames.slice();
	template.find({longname: longnames}).forEach(function(doclet){
		var linkText = getLinkText(doclet);
		if (doclet.memberof === memberof){
			linkText = linkText.split("~").pop();
		}
		leftovers.splice(leftovers.indexOf(doclet.longname), 1);
		results.push({
			link: template.linkto(doclet.longname, linkText),
			summary: doclet.summary
		});
	});
	leftovers.forEach(function(longname){
		results.push({
			link: template.linkto(longname),
			summary: ''
		});
	});
	return results;
};

exports.getFires = function(doclet){
	if (!doclet.fires) return [];
	return expandLongnames(doclet.fires, doclet);
};

exports.getRequires = function(doclet){
	if (!doclet.requires) return [];
	return expandLongnames(doclet.requires, doclet);
};

exports.getSummary = function (doclet) {
	if (!doclet.summary) return '';
	return markdown(doclet.summary);
};

exports.getParamsOrProps = function (doclet, type) {
	if (!doclet[type] || !doclet[type].length) return [];
	var sorted = {};
	sorted[type] = [];
	doclet[type].forEach(function(paramOrProp){
		if (!paramOrProp) { return; }
		var parts = paramOrProp.name.split("."), last = parts.length - 1, base = sorted, parentName = [];
		parts.forEach(function(part, i){
			var index;
			if (i === last){
				paramOrProp.name = paramOrProp.name.replace(parentName.join('.'), '').replace(/^\./, '');
				base[type] = base[type] || [];
				base[type].push(paramOrProp);
			} else if ((index = base[type].findIndex(function(p){ return p.name === part; })) !== -1) {
				base = base[type][index];
				parentName.push(part);
			}
		});
	});

	return sorted[type].filter(function (paramOrProp) {
		return !!paramOrProp;
	});
};

var checkParamsOrProps = exports.checkParamsOrProps = function (parent, type) {
	if (!parent || !parent[type] || !parent[type].length) return;
	/* determine if we need extra columns, "attributes" and "default" */
	parent[type + 'HasAttributes'] = false;
	parent[type + 'HasDefaults'] = false;
	parent[type + 'HasNames'] = false;

	parent[type].forEach(function (paramOrProp) {
		if (!paramOrProp) {
			return;
		}
		if (paramOrProp.optional || paramOrProp.nullable || paramOrProp.variable) {
			parent[type + 'HasAttributes'] = true;
		}
		if (paramOrProp.name) {
			parent[type + 'HasNames'] = true;
		}
		if (typeof paramOrProp.defaultvalue !== 'undefined') {
			parent[type + 'HasDefaults'] = true;
		}
		if (paramOrProp[type]) {
			checkParamsOrProps(paramOrProp, type);
		}
	});
};

exports.getPageTitle = function(doclet, sanitized){
	var parts = [];
	if (doclet.attribs){
		parts.push(doclet.attribs);
	}
	if (template.kinds.pages.indexOf(doclet.kind) !== -1 && template.kinds.custom.indexOf(doclet.kind) === -1 && doclet.ancestors && doclet.ancestors.length){
		parts.push('<span class="ancestors">'+doclet.ancestors.join('')+'</span>');
	}
	if (doclet.title){
		parts.push('<span class="title">' + doclet.title + '</span>');
	} else if (doclet.name) {
		var name = doclet.name;
		if (doclet.exported){
			name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>';
		}
		parts.push('<span class="name">' + name + '</span>');
	}
	if (template.kinds.pages.indexOf(doclet.kind) === -1 && doclet.signature){
		parts.push(doclet.signature);
	}
	if (doclet.variation){
		parts.push('<sup class="variation">' + doclet.variation + '</sup>');
	}
	var result = parts.join('');
	return sanitized ? template.sanitize(result) : result;
};

exports.getListTitle = function(doclet, sanitized){
	var parts = [], linkClose = false, url = doclet.kind === 'tutorial' ? helper.tutorialToUrl(doclet.longname) : helper.longnameToUrl[doclet.longname];
	// only generate links to kinds that have a page generated, others show content inline so there's no need
	if (url){
		parts.push('<a href="' + url + '">');
		linkClose = true;
	}
	if (doclet.kind === 'class'){
		parts.push('<span class="signature-new">new&nbsp;</span>');
	}
	if (doclet.ancestors && doclet.ancestors.length){
		parts.push('<span class="ancestors">'+template.sanitize(doclet.ancestors.join(''))+'</span>');
	}
	if (doclet.attribs){
		parts.push(doclet.attribs);
	}
	if (doclet.title){
		parts.push('<span class="title">' + doclet.title + '</span>');
	} else if (doclet.name) {
		var name = doclet.name;
		if (doclet.exported){
			name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>';
		}
		parts.push('<span class="name">' + name + '</span>');
	}
	if (doclet.signature){
		parts.push(doclet.signature);
	}
	if (doclet.variation){
		parts.push('<sup class="variation">' + doclet.variation + '</sup>');
	}
	if (linkClose){
		parts.push('</a>');
	}
	var result = parts.join('');
	return sanitized ? template.sanitize(result) : result;
};

exports.getSymbolTitle = function(doclet, sanitized){
	var parts = [], linkClose = false, url = doclet.kind === 'tutorial' ? helper.tutorialToUrl(doclet.longname) : helper.longnameToUrl[doclet.longname];
	// only generate links to kinds that have a page generated, others show content inline so there's no need
	if (template.kinds.pages.indexOf(doclet.kind) !== -1 && url){
		parts.push('<a href="' + url + '">');
		linkClose = true;
	}
	if (doclet.kind === 'class'){
		parts.push('<span class="signature-new">new&nbsp;</span>');
	}
	if (doclet.attribs){
		parts.push(doclet.attribs);
	}
	if (doclet.title){
		parts.push('<span class="title">' + doclet.title + '</span>');
	} else if (doclet.name) {
		var name = doclet.name;
		if (doclet.exported){
			name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>';
		}
		parts.push('<span class="name">' + name + '</span>');
	}
	if (doclet.signature){
		parts.push(doclet.signature);
	}
	if (doclet.variation){
		parts.push('<sup class="variation">' + doclet.variation + '</sup>');
	}
	if (linkClose){
		parts.push('</a>');
	}
	var result = parts.join('');
	return sanitized ? template.sanitize(result) : result;
};

exports.getPrimaryTitle = function(doclet, sanitized){
	var parts = [];
	if (doclet.kind === 'class'){
		parts.push('<span class="signature-new">new&nbsp;</span>');
	}
	if (doclet.attribs){
		parts.push(doclet.attribs);
	}
	if (doclet.title){
		parts.push('<span class="title">' + doclet.title + '</span>');
	} else if (doclet.name) {
		var name = doclet.name;
		if (doclet.exported){
			name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>';
		}
		parts.push('<span class="name">' + doclet.name + '</span>');
	}
	if (doclet.signature){
		parts.push(doclet.signature);
	}
	if (doclet.variation){
		parts.push('<sup class="variation">' + doclet.variation + '</sup>');
	}
	var result = parts.join('');
	return sanitized ? template.sanitize(result) : result;
};

exports.getSymbols = function(doclet){
	var symbols = {};
	if (doclet.longname == helper.globalName){
		template.kinds.global.forEach(function(kind){
			symbols[kind] = template.find({kind: kind, memberof: { isUndefined: true }});
		});
	} else {
		template.kinds.symbols.forEach(function(kind){
			symbols[kind] = template.find({kind: kind, memberof: doclet.longname});
		});
	}
	return symbols;
};

exports.getShowAccessFilter = function(doclet){
	var result = typeof doclet.showAccessFilter != 'boolean' ? template.options.showAccessFilter : doclet.showAccessFilter;
	if (result){
		// if we can show the filter check if we should actually show it
		doclet.has = {
			inherited: template.find({kind: template.kinds.symbols, memberof: doclet.longname, inherited: true}).length > 0,
			public: template.find({kind: template.kinds.symbols, memberof: doclet.longname, access: "public"}).length > 0,
			protected: template.find({kind: template.kinds.symbols, memberof: doclet.longname, access: "protected"}).length > 0,
			private: template.find({kind: template.kinds.symbols, memberof: doclet.longname, access: "private"}).length > 0
		};
		var count = (doclet.has.inherited ? 1 : 0) + (doclet.has.public ? 1 : 0) + (doclet.has.protected ? 1 : 0) + (doclet.has.private ? 1 : 0);
		// only show the filter if there are two or more accessors available
		result = count > 1;
	}
	return result;
};

exports.isInherited = function(doclet){
	return !!doclet.inherited;
};

exports.hasDetails = function (doclet) {
	return !!(doclet.version
	|| doclet.since
	|| (doclet.inherited && doclet.inherits)
	|| doclet.since
	|| (doclet.implementations && doclet.implementations.length)
	|| (doclet.implements && doclet.implements.length)
	|| (doclet.mixes && doclet.mixes.length)
	|| doclet.deprecated
	|| (doclet.author && doclet.author.length)
	|| doclet.copyright
	|| doclet.license
	|| doclet.defaultvalue
	|| doclet.hasSource
	|| (doclet.tutorials && doclet.tutorials.length)
	|| (doclet.see && doclet.see.length)
	|| (doclet.todo && doclet.todo.length))
};