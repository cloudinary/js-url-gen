set -e;

rimraf ./dist
npm run lint
npm run build:ESM
npm run build:UMD
npm run build:entryPoints
npm run build:docs
npm run build:injectPackageVersion
npm run build:updatePackageExports

#cp CHANGELOG.md to dist
cp ./CHANGELOG.md ./dist

#cp LICENSE to dist
cp ./LICENSE ./dist

#cp README to dist
cp ./README.md ./dist
