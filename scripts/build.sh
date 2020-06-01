set -e;

rimraf ./dist
npm run lint
npm run build:ESM
npm run build:UMD
node ./scripts/createEntryPoints.js
