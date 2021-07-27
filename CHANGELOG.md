1.0.0-beta.4 / 2021-07-27
==================

New functionality and features
==============================
* cloudinaryLegacyURL: cloudinaryLegacyURL will now correctly clone the transformation options
* Actions and Qualifiers: Add support for stroke.solid
* Actions and Qualifiers: Add Zoom qualifier to resize.crop
* Actions and Qualifiers: Add Animated.edit action and qualifier
* Actions and Qualifiers: Add level qualifier to antiRemoval


Renaming / Refactoring
================
* Rename storageType to deliveryType
* Rename the function createCloudinaryV1URL to createCloudinaryLegacyURL


Other changes
================
  * Code Generation: Implement a config file to support better code generation
  * Code Generation: Fix implementation for code generation to support full urls
  * Compliation tests: Update the compilation tests to include a full URL
  * Bundle Size: raise size limit for backwards compatibility function
  * add rollup commonjs processing
  * LegacyURL generation:  createLegacyURL will now correctly support radius arrays and strings (#386)
  * Add cache busting to the reference website

1.0.0-beta.3 / 2021-04-28
==================

New functionality and features
==============================
  * Fix v1 url generation to correctly support border objects and strings (#384)
  * Add new setters to variable: setFloat, setInteger and setString (#378)


Other changes
================
  * Add dynamic copy right date for the Reference Website (#381)
  * Feature/add better tests for expressions (#380)
  * Add google analytics tag manager to the reference website (#385)

1.0.0-beta.2 / 2021-04-11
==================

New functionality and features
==============================
  * Add Theme Effect (#354)
  * Breaking - Change the public property of an asset to private (suffix, signature, storageType, extension and version are now private ) (#358)
  * URLConfig - Implement missing url features(Suffix, StorageType, privateCDN, shorten, SEO, useRootPath and more (All URL Config options) (#357)


Other changes
================
  * URLEncoding - Fix issues in previous implementation of URL Encoding (#356)
  * Docs - Add examples to round corners and rotate (#373)
  * Docs - Add examples to video edit docs and align various names in the docs (#376)
  * Docs - Add examples to variable docs (#375)
  * Docs - Add examples to transcode (#374)
  * Docs - Add examples to rotate docs (#371)
  * Docs - Add examples to Reshape (#370)
  * Docs - Add examples to PSDTools (#369)
  * Docs - Add examples to Overlay and Underlay (#368)
  * Docs - Add examples to Extract (#367)
  * Docs - Add examples to Resize (#366)
  * Docs - Add examples for named transformations (#364)
  * Docs - add examples to effect (#363)
  * Docs - add examples to delivery (#362)
  * Docs - Add examples to custom functions (#361)
  * Docs - Add examples to Border and fix code highlights (#359)
  * Analytics - Add SDK analytics (#351)
  * Docs - Fix indentation issues in the code examples in the reference website (#372)
  * Docs - Add document links to qualifiers (#377)

1.0.0-beta.1 / 2021-02-24
==================


New functionality and features
==============================
  * Add Format.usdz() (#352)
  * Add flag for ignore-mask-channels (#353)
  * Add support for unicode characters in l_fetch (#348)

Other changes
================
  * changed types file name(backwards-compatibility) (#355)
  * Docs - Enhance inline examples in the codebase (#350)
  * Docs - Add version number to the docs reference (#349)
  * Docs - Add comments and improve some UI areas in the docs (#343)
  * Docs - Add summary qualifier tags to all qualifiers (#344)
  * Docs - Unify the two seprate readme files into a single file (#342)
  * Docs - Remove overlayTests namespace
  * Docs - Fix indentation in the details tab for any symbol (#347)
  * Fix typo in Extract namespace
  * Add configuration tests (#331)
  * Add examples to IURlConfig interfaces and hide private interfaces (#346)
  * Add tests for `asset.setAssetType` (#345)

Breaking changes
================
 * Breaking - change the name of the named export of the entire SDK (CloudinarySDK -> CloudinaryBaseSDK) (#341)


1.0.0-beta.0 / 2021-02-01
==================

New functionality and features
==============================
  * Add setter methods to CloudinaryFile for some asset fields (#340)
  * add clone functionality to image (#332)
  * Add a backwards compatiblity function to the root of the SDK (#336)
  * Feature/add support for Effect.removeBackground (#321)
  * Add support for Adjust.tint() (#320)
  * Add support for video.underlay (was not previously supported) (#316)
  * Add the X,Y qualifiers to resize.limitFill by returning ResizeFillAction (#314)
  * Add qualifiers x and y for Resize.fill, to be used with gravity.xyCenter (#310)
  * Add support for ProgressiveMode when using DeliveryFormats (#307)
  
Breaking changes
================
  * Refactor - Rename Values to Qualifiers (#339)
  * Rename color to colorToReplace for effect.makeTransparent (#323)
  * Flatten the Gravity qualifiers (#313)
  * Rename psdTools.byFileName to byLayerName (#311)
  * Rename byNumber to byIndex (#312)

Other changes
================
  * Docs - Fix styling in the search component when searching for @cloudinary/base (#338)
  * Docs - Change wording of SDK Summary when searching (#337)
  * Build - Set the bundle target to ES6 for ESM, and ES5 for UMD (#335)
  * Docs - Enhance the search
  * Add relevant overlay tests from cloudinary-core (#327)
  * Docs/Move the foodoc template from package.json to within the project (#328)
  * Change favico and system logo (#326)
  * Remove the readme parts that link to github pages (#324)
  * Rename the parameter name of defaultImage (#322)
  * Fix the base64 methods to ensure we keep the padding in them (#315)

1.0.0-alpha.14 / 2021-01-17
==================

Other Changes
 -------------
  * Fix release package

1.0.0-alpha.13 / 2021-01-17
==================

Other Changes
 -------------
  * Fix release package

1.0.0-alpha.12 / 2021-01-17
==================

New functionality and features
 ------------------------------
  * Change addTransformation() to accept a transformation instance as well as a string
  * Add mandatory qualifiers: x, y, to effect.shear()
  * Add duration qualifier to effect.fadeIn()
  * Rename deshake.pixels to deshakeStrength, add support for Expression (#304)

Other Changes
 -------------
  * Fix missing JSDoc favicon

1.0.0-alpha.11 / 2021-01-13
==================

 New functionality and features
 ------------------------------
  * Fix incorrect implementation for replaceColor with rgb colors 
  * Add a missing prepareColor function call in text background color 
  * Implement reshape.trim 
  * Rename unknown to any in Typescript 
  * Add support for videoEdit.preview() 
  * Add support for videoCodec
  * Remove support for flag concatenation (#297)

 Other Changes
 -------------
  * Improve test coverage
  * Add changelog file
  * Add the right icon and add style changes (For the JSDoc website)(#299)



