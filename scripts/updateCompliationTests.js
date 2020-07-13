/* eslint-disable */

/**
 * Usage:
 * 1. Install the code generator project locally
 * 2. Run this script -> node ./scripts/tmp.sh path/to/generator x.y.z (x.y.z = ruby version to use)
 * 3. You can also define the following ENV variables CODE_GENERATOR_PATH, ENV_RUBY_VER and omit the inline arguments
 * 4. npm run test will run this script first, it will not update if the env variables are not set
 */
const CODE_GENERATOR_PATH = process.argv[3] || process.env.CODE_GENERATOR_PATH;

if (!CODE_GENERATOR_PATH) {
  console.log('SKIP - Cannot update compilation tests - do you have an env variable set?');
  process.exit(0); // nothing to do, lets skip
}
const ENV_RUBY_VER = process.argv[4] || process.env.ENV_RUBY_VER || '2.7.1';
const { execSync } = require('child_process');
const fs = require('fs');

const bashScript = ` 
  cd ${CODE_GENERATOR_PATH};
  # NOTE - We pipe the response of rspec to prevent the script from exiting in case the rspec command fails
  source ~/.rvm/scripts/rvm && rvm use ${ENV_RUBY_VER} && rspec ${CODE_GENERATOR_PATH}  | grep 'ok'
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
fs.writeFileSync('./__TESTS__/compilation.test.ts', file);

// delete temporary script
fs.unlinkSync('./scripts/tmp.sh');
