/**
 * This file contains the test cases for the BundleSizeTests
 * Run all tests by running `npm run test:size`
 */

import importFromDist from "./utils/stringGenerators/importFromDist";
import {ITestCase} from "./interfaces/ITestCase";
import importFromPackage from "./utils/stringGenerators/importFromPackage";

/**
 * @description - Each test case is built using an array of imports  (importsArray)
 *                Each element in the array is string, an import statement: `import resize from '...'; console.log(resize)`
 *                Before we export, we combine all those strings into one long string, contained within importString;
 */
const bundleSizeTestCases:ITestCase[] = [
  {
    name: 'Tests CloudinaryImage with Resize',
    sizeLimitInKB: 21,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize')
    ]
  },
  {
    name: 'Tests CloudinaryImage with Resize and Adjust',
    sizeLimitInKB: 25,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize'),
      importFromDist('actions/adjust', 'Adjust')
    ]
  },
  {
    name: 'Tests CloudinaryImage with Resize, Adjust and Border',
    sizeLimitInKB: 25,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize'),
      importFromDist('actions/adjust', 'Adjust'),
      importFromDist('actions/border', 'Border')
    ]
  },
  {
    name: 'Tests CloudinaryImage image with Resize, adjust and delivery',
    sizeLimitInKB: 26,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize'),
      importFromDist('actions/adjust', 'Adjust'),
      importFromDist('actions/delivery', 'Delivery')
    ]
  },
  {
    name: 'Tests Overlay imports',
    sizeLimitInKB: 22,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('actions/overlay', 'Overlay'),
      importFromDist('qualifiers/source', 'Source'),
      importFromDist('transformation/Transformation', 'Transformation'),
      importFromDist('actions/resize', 'crop')
    ]
  },
  {
    name: 'Import backwards compatibility function',
    sizeLimitInKB: 45,
    importsArray: [
      importFromPackage('createCloudinaryLegacyURL')
    ]
  },
  {
    name: 'Import all of the SDK',
    sizeLimitInKB: 118,
    importsArray: [
      importFromPackage('* as CloudinaryURLGEN')
    ]
  },
  {
    name: 'Import a Transformation Object',
    sizeLimitInKB: 5,
    importsArray: [
      importFromPackage('Transformation')
    ]
  },
  {
    name: 'Import All Actions',
    sizeLimitInKB: 36,
    importsArray: [
      importFromPackage('Actions')
    ]
  },
  {
    name: 'Import All Qualifiers',
    sizeLimitInKB: 35,
    importsArray: [
      importFromPackage('Qualifiers')
    ]
  }
];

/**
 * Each case is an array of strings,
 * Before we export, we make sure we combine them so that `importString` contains a single long string
 */
export default <ITestCase[]> bundleSizeTestCases.map((testCase): ITestCase => {
  // Join all the strings into one long string, so we can write it to a file
  testCase.importString = testCase.importsArray.join('');
  return testCase;
});
