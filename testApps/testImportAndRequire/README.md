# Testing usage of import and require for including actions
## How to use this test
```text
npm run test
```

### What it does:
1. Sets package.json "type"="module"  
2. Builds, packs and copies over cloudinary-url-gen.tgz
3. Installs the local cloudinary-url-gen.tgz package
4. Runs testImport.js
5. Removed package.json type property
6. Runs testRequire.js
