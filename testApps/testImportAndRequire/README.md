# Testing usage of import and require for including actions
## How to use this test
```text
npm run test
```

### What it does:
* Test import:
  * Copies package-import.json on top of package.json, to get a clean package.json
  * Builds, packs and copies over cloudinary-url-gen.tgz
  * Installs the local cloudinary-url-gen.tgz package
  * Runs testImport.js
* Test require:
  * Copies package-require.json on top of package.json, to get a clean package.json
  * Installs the local cloudinary-url-gen.tgz package
  * Runs testRequire.js
