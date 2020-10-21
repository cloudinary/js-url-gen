/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');

const file = JSON.parse(fs.readFileSync('./package.json','utf8'));

execSync(`jsdoc --configure jsdoc.config.json --verbose --readme ./DOCS.README.md --destination public/docs/${file.version}`, {stdio: 'inherit'})
