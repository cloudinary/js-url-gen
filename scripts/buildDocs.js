/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');

execSync(`(cd ./__docTemplate && grunt) && jsdoc -u ./__DOC_EXAMPLES__ --configure jsdoc.config.json --verbose --destination public/docs/ && cp __DOC_RESOURCES__/customStyles.css public/docs/`, {stdio: 'inherit'})
