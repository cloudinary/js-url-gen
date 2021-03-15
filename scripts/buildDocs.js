/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');
const pkg = require('../package.json');

// Inject the package json version to the Docs reference footer and navbar
const data = `
$('footer').append($('<div/>').html('SDK Version - <b>${pkg.version}</b>'));
var content = $('.branding-logo').html();
$('.branding-logo').html(content + ' - ${pkg.version}');
`;
fs.writeFileSync('__DOCS__/resources/injectVersionSemver.js', data);

execSync(`
  (cd ./__DOCS__/JSDocTemplate && grunt) && 
  jsdoc -u ./__DOCS__/examples --configure jsdoc.config.json --verbose --destination public/docs/ && 
  cp __DOCS__/resources/customStyles.css public/docs/ && 
  cp __DOCS__/resources/injectVersionSemver.js public/docs/
`, {stdio: 'inherit'});
