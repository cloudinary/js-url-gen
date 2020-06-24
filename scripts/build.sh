set -e;

rimraf ./dist
npm run lint
npm run build:ESM
npm run build:UMD
npm run build:entryPoints
