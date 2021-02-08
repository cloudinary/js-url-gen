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
fs.writeFileSync('__DOC_RESOURCES__/injectVersionSemver.js', data);

execSync(`
  (cd ./__docTemplate && grunt) && 
  jsdoc -u ./__DOC_EXAMPLES__ --configure jsdoc.config.json --verbose --destination public/docs/ && 
  cp __DOC_RESOURCES__/customStyles.css public/docs/ && 
  cp __DOC_RESOURCES__/injectVersionSemver.js public/docs/
`, {stdio: 'inherit'});
