# Testing usage of import and require for including actions
## How to use this test
```text
npm run test
```

### What it does:
1. Builds, packs and copies over cloudinary-url-gen.tgz
2. Installs the local cloudinary-url-gen.tgz package
3. Runs testImport.mjs *
4. Runs testRequire.js

* Notice that .mjs is the same as setting type="module" in package.json
