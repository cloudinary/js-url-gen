/**
 * This file contains the test cases for the BundleSizeTests
 * Run all tests by running `npm run test:size`
 */

import importFromDist from "./utils/stringGenerators/importFromDist";
import importFromBase from "./utils/stringGenerators/importFromBase";
import {ITestCase} from "./interfaces/ITestCase";

/**
 * @description - Each test case is built using an array of imports  (importsArray)
 *                Each element in the array is string, an import statement: `import resize from '...'; console.log(resize)`
 *                Before we export, we combine all those strings into one long string, contained within importString;
 */
const bundleSizeTestCases:ITestCase[] = [
  {
    name: 'Tests a transformable image with Resize',
    sizeLimitInKB: 16,
    importsArray: [
      importFromBase('TransformableImage'),
      importFromDist('actions/resize/Resize')
    ]
  },
  {
    name: 'Tests a transformable image with Resize and Adjust',
    sizeLimitInKB: 25,
    importsArray: [
      importFromBase('TransformableImage'),
      importFromDist('actions/resize/Resize'),
      importFromDist('actions/adjust/Adjust')
    ]
  },
  {
    name: 'Tests a transformable image with Resize, Adjust and Border',
    sizeLimitInKB: 25,
    importsArray: [
      importFromBase('TransformableImage'),
      importFromDist('actions/resize/Resize'),
      importFromDist('actions/adjust/Adjust'),
      importFromDist('actions/border/Border')
    ]
  },
  {
    name: 'Tests a transformable image with Resize, adjust and delivery',
    sizeLimitInKB: 30,
    importsArray: [
      importFromBase('TransformableImage'),
      importFromDist('actions/resize/Resize'),
      importFromDist('actions/adjust/Adjust'),
      importFromDist('actions/delivery/Delivery')
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
