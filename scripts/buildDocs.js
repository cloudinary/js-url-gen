/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');

const file = JSON.parse(fs.readFileSync('./package.json','utf8'));

execSync(`jsdoc -u ./__DOC_EXAMPLES__ --configure jsdoc.config.json --verbose --readme ./DOCS.README.md --destination public/docs/${file.version} & cp __DOC_RESOURCES__/customStyles.css public/docs/${file.version}`, {stdio: 'inherit'})
