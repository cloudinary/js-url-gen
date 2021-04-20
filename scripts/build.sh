set -e;

rimraf ./dist
# the source code needs package.json in ./src/ level to compile correctly
# we use it to extract the version number of the library
# the relative import in the sourcecode is maintained in ./dist after
# npm run build:entryPoints runs and copies package.json to ./dist
# Temporary copy of package.json to ./src
npm run build:copyCleanPackageJSON
npm run lint
npm run build:ESM
npm run build:UMD
npm run build:entryPoints
npm run build:docs
