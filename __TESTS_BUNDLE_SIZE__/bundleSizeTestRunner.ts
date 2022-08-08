import testCases from './bundleSizeTestCases';
import createEntryFile from "./utils/fileSystem/createEntryFile";
import buildWithWebpack from "./utils/webpack/buildWithWebpack";
import log from "./utils/log";
import getBundleInfo from "./utils/fileSystem/getBundleInfo";
import handleTestError from "./utils/testLifeCycle/handleTestError";
import handleTestSuccess from "./utils/testLifeCycle/handleTestSuccess";

/**
 * The test runner for the BundleSize test cases
 * Run all tests by running `npm run test:size`
 *
 * ** Execution Steps **
 * 1. Fetch all test cases from ./bundleSizeTestCases
 * 2. Iterate over the cases, for each case, do the following:
 *    - Create an entrypoint file based on on the testCase imports
 *    - Use webpack to build the entrypoint
 *    - Compare the file size of the bundle compared to the test limit
 * 3. Handle errors/success of the tests, print output
 */
async function bundleSizeTestRunner():Promise<void> {
  log.info('Starting size tests, hold on!');
  const TEST_COUNT = testCases.length;
  let fail_count = 0;
  for (let i = 0; i < testCases.length; i++) {
    log.debug(`Starting tests for : ${testCases[i].name}`);
    const ENTRY_FILE = `entry${i}`;
    const OUTPUT_FILE = `bundle${i}`;
    const TEST_NAME = testCases[i].name;
    const EXPECTED_SIZE_IN_KB = testCases[i].sizeLimitInKB;
    const ALLOWED_MIN_SIZE_IN_KB = testCases[i].minAllowedSize || 1;

    // Create the entry file for Webpack
    log.debug('Starting to build webpack loop');
    createEntryFile(ENTRY_FILE, testCases[i].importString);

    // Build the entry file with webpack
    log.debug('Webpack build - starting');
    await buildWithWebpack(ENTRY_FILE, OUTPUT_FILE);
    log.debug('Webpack build - finished');

    // Get the bundle information
    const bundleInfo = getBundleInfo(OUTPUT_FILE);
    const ACTUAL_SIZE_IN_KB = Math.round(bundleInfo.size / 1024);


    if (ACTUAL_SIZE_IN_KB <= EXPECTED_SIZE_IN_KB && ACTUAL_SIZE_IN_KB >= ALLOWED_MIN_SIZE_IN_KB) {
      handleTestSuccess(testCases[i], ACTUAL_SIZE_IN_KB);
    } else {
      handleTestError(TEST_NAME, EXPECTED_SIZE_IN_KB, ACTUAL_SIZE_IN_KB, ALLOWED_MIN_SIZE_IN_KB);
      fail_count++;
    }
  }

  if (fail_count === 0) {
    log.info('Size testing done! - All OK');
  } else {
    throw `${fail_count}/${TEST_COUNT} Failed`;
  }
}



export default bundleSizeTestRunner;
