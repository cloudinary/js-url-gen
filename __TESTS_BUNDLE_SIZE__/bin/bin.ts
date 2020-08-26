import createDistFolder from "../utils/fileSystem/createDistFolder";
import createTestFolders from "../utils/fileSystem/createTestFolders";
import log from "../utils/log";
import testCleanUp from "../utils/fileSystem/testCleanUp";
import bundleSizeTestRunner from "../bundleSizeTestRunner";


/**
 * Executable entrypoint for the BundleSizeTests
 * Run with `npm run test:size`
 *
 * ** Environment Variables **
 *  - process.env.DEBUG - Used to print debug logs, also keeps the .SIZE_TESTS directory for manual inspection
 *
 *
 * ** Execution Steps **
 * 1. Ensure ./dist exists, if not, run npm run build
 * 2. Create the needed test folders ./.SIZE_TESTS/entry, ./.SIZE_TESTS/bundles
 * 3. run bundleSizeTestRunner
 * 4. Cleanup all test artifacts by deleting ./.SIZE_TESTS
 * 5. If the tests ended with an error, stop the process
 */

createDistFolder();
createTestFolders();
bundleSizeTestRunner()
  .then(() => {
    // if we're in debug, we do not delete ${TMP_FOLDER}
    if (!process.env.DEBUG) {
      testCleanUp();
    }
  })
  .catch((err) => {
    // Catch the exception thrown
    log.info(err);

    // if we're in debug, we do not delete .${TMP_FOLDER}
    if (!process.env.DEBUG) {
      testCleanUp();
    }
    // Exit the process
    process.exit(1);
  });


