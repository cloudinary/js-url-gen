var lunr = require('lunr'),
  cheerio = require('cheerio'),
  template = require('./template'),
  sanitizeHtml = require('sanitize-html'),
  path = require('jsdoc/path'),
  fs = require('jsdoc/fs'),
  helper = require('jsdoc/util/templateHelper');

var store = exports.store = {};
var index = exports.index = lunr(function () {
  this.field('tags', {boost: 1000});
  this.field('name', {boost: 5});
  // this.field('id', {boost: 300});
  // this.field('kind', {boost: 10});
  // this.field('title', {boost: 100});
  this.field('summary', {boost: 20});
  // this.field('description', {boost: 50});
  // this.field('body');
  this.ref('id');
});

var sanitize = function (html) {
  if (typeof html !== 'string') return void 0;
  return sanitizeHtml(html, {allowedTags: [], allowedAttributes: []}).replace(/\s+/g, ' ').trim();
};

var _variations = function (parts) {
  var result = [];
  result.push(parts.join('.'));
  if (parts.length > 1) {
    parts.shift();
    result.push(_variations(parts));
  } else if (parts.length === 1) {
    var instance = parts[0].indexOf('#');
    if (instance !== -1) {
      result.push(parts[0].substr(instance + 1));
    }
  }
  return result.join(' ');
};

var variations = function (longname) {
  if (typeof longname != 'string' || longname === '') return '';
  return _variations(longname.split('.'));
};

var tags = function (doclet) {
  var result = [];
  if (doclet.longname && doclet.longname !== '') {
    result.push(variations(doclet.longname));
  }
  return result.join(' ');
};

var parseBody = function (html) {
  if (!html || typeof html !== 'string') return;
  var $ = cheerio.load(html);
  return $('#main').text().replace(/\s+/g, ' ').trim();
};

var add = exports.add = function (doclet, html) {
  var id = helper.longnameToUrl[doclet.longname];
  index.add(store[id] = {
    "id": id,
    "kind": doclet.kind,
    "title": doclet.pageTitle,
    "longname": doclet.longname,
    "name": doclet.name,
    "tags": tags(doclet).split('.').join(' '),
    "summary": sanitize(helper.resolveLinks(doclet.summary)),
    "description": sanitize(helper.resolveLinks(doclet.classdesc || doclet.description)),
    "body": parseBody(html)
  });
  if (doclet.kind === 'class' || doclet.kind === 'namespace') {
    doclet.symbols.member.forEach(function (member) {
      add(member);
    });
    doclet.symbols.function.forEach(function (fn) {
      add(fn);
    });
    doclet.symbols.typedef.forEach(function (typedef) {
      add(typedef);
    });
  }
};

exports.writeFilesSync = function (pretty) {
  var jsonFile = path.join(template.config.dir.output, 'js/lunr-data.json'),
    dataFile = path.join(template.config.dir.output, 'js/lunr-data.js'),
    data = {index: index, store: store},
    json = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  fs.writeFileSync(jsonFile, json, "utf8");
  fs.writeFileSync(dataFile, "window.lunrData = " + json + ";", "utf8");
};
