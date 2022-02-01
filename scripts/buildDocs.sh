set -e;

node ./scripts/updateInjectVersionSemver.js
(cd ./__DOCS__/JSDocTemplate && grunt)
jsdoc -u ./__DOCS__/examples --configure jsdoc.config.json --verbose --destination public/docs/
cp __DOCS__/resources/customStyles.css public/docs/
cp __DOCS__/resources/injectVersionSemver.js public/docs/
