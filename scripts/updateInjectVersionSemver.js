/* eslint-disable */
const fs = require('fs');
const pkg = require('../package.json');

// Inject the package json version to the Docs reference footer and navbar
const data = `
$('footer').append($('<div/>').html('SDK Version - <b>${pkg.version}</b>'));
var content = $('.branding-logo').html();
$('.branding-logo').html(content + ' - ${pkg.version}');

$('.copyright').html('Copyright © ' + new Date().getFullYear()  + ' Cloudinary.com');
`;
fs.writeFileSync('__DOCS__/resources/injectVersionSemver.js', data);
