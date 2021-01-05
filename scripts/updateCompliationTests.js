/* eslint-disable */

/**
 * Usage:
 * 1. Install the code generator project locally
 * 2. Run this script -> node ./scripts/tmp.sh path/to/generator x.y.z (x.y.z = ruby version to use)
 * 3. You can also define the following ENV variables CODE_GENERATOR_PATH, ENV_RUBY_VER and omit the inline arguments
 * 4. npm run test will run this script first, it will not update if the env variables are not set
 */
const CODE_GENERATOR_PATH = process.argv[3] || process.env.CODE_GENERATOR_PATH;
const COMPILATION_TESTS_LOCAL_PATH = './__TESTS__/compilation.test.ts';
const CYAN_COLOR = '\x1b[36m%s\x1b[0m';

if (!CODE_GENERATOR_PATH) {
  console.log('SKIP - Cannot update compilation tests - do you have an env variable set?');
  process.exit(0); // nothing to do, lets skip
}
const ENV_RUBY_VER = process.argv[4] || process.env.ENV_RUBY_VER || '2.7.1';
const { execSync } = require('child_process');
const fs = require('fs');

// Enable passing a key to the code generator.
// This enables us to create compiation tests based on a specific qualifier (like `a_` or `c_`)
const addKeyEnvVar = process.env.KEY ? `KEY=${process.env.KEY}` : ''
const bashScript = ` 
  cd ${CODE_GENERATOR_PATH};
  # NOTE - We pipe the response of rspec to prevent the script from exiting in case the rspec command fails
  source ~/.rvm/scripts/rvm && rvm use ${ENV_RUBY_VER} && ${addKeyEnvVar} DEV_ENV=DEV rspec ${CODE_GENERATOR_PATH}  | grep 'ok'
`;

// Create the bash script
execSync(`echo "${bashScript}" > ./scripts/tmp.sh`);
// execute the bash script
execSync(`bash ./scripts/tmp.sh`);

let TEST_FILE_PATH = `${CODE_GENERATOR_PATH}/javascript2.test.ts`;
//
if (!fs.existsSync(TEST_FILE_PATH)) {
  throw `Error copying compilation tests, ${TEST_FILE_PATH} does not exist`;
}

const file = fs.readFileSync(TEST_FILE_PATH, 'utf-8');

// Delete existing file
if (fs.existsSync(COMPILATION_TESTS_LOCAL_PATH)) {
  fs.unlinkSync(COMPILATION_TESTS_LOCAL_PATH);
}

// Create new file
fs.writeFileSync(COMPILATION_TESTS_LOCAL_PATH, file);

// delete temporary script
fs.unlinkSync('./scripts/tmp.sh');


// If this entire process was successful, lets add some proper logs
if (fs.existsSync(COMPILATION_TESTS_LOCAL_PATH)) {
  // Reset terminal, clean junk
  process.stdout.write('\033c');

  // Add some buffer
  console.log('\n\n');

  console.log(CYAN_COLOR, '* Compilation tests generated successfully');
  if (process.env.KEY) {
    console.log(CYAN_COLOR, `* Compilation test contains only "${process.env.KEY}_" qualifier`)
  } else {
    console.log(CYAN_COLOR, `* Compilation test contains all qualifiers`)
  }
  // Add some buffer
  console.log('\n\n');
}

