/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable require-jsdoc */

const querystring = require('querystring');
const fs = require('fs');
const nodeFetch = require('node-fetch');
const file = fs.readFileSync(`${__dirname}/txList`, 'utf-8');
const createTestFile = require('./createTestFile');

export interface ITxResult {
  error: string;
  txString: string;
  parsedCode: string;
  actionsDTO:any;
}

export interface ITXResults {
  success: ITxResult[],
  fail: ITxResult[]
}

/*
 * Remove duplicates and clean lines starting with #
 * @type {string[]}
 */
const transformationStrings = ([...new Set(file.split('\n'))] as string[])
  .filter((a) => a[0] !== '#').filter((a) => a);

/*
 *  Set the SDK Code Snippets Service URL (Change domain/port only
 */
// const baseURL = `https://staging-code-snippets.cloudinary.com/dev/sdk-code-gen`;
const baseURL = `http://localhost:8000/dev/sdk-code-gen`;

const results:ITXResults = {
  success:[],
  fail: []
};

console.log(`Attempting to generate code for ${transformationStrings.length} transformations\n`);

let counter = 0;
transformationStrings.forEach(async (txString, i) => {
  // Space requests apart
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 30 * i + 1);
  });

  console.log('Processing transformation:', i);

  const queryArgs = {
    framework: 'js_2',
    url: `https://res.cloudinary.com/demo/image/upload/${txString}/sample`,
    sdkVersion: 'feature/code-generation', // Which SDK version to use, that contains the version for SDK-Code-Gen
    hideActionGroups:0 // true, hide...
  };

  const queryString = querystring.stringify(queryArgs, '&', '=', {
    encodeURIComponent(a: string) {
      return a;
    }
  });

  const URL = `${baseURL}?${queryString}`;

  const res = await nodeFetch(URL).catch((e: Error) => {
    console.log(e);
  });

  const obj = await res.json();

  // Fail
  if (obj.parsedCode.indexOf('Cannot parse') >= 0) {
    results.fail.push({
      txString,
      error: obj.parsedCode,
      parsedCode: null,
      actionsDTO: obj.actionsDTO
    });
  } else { // Success
    results.success.push({
      txString,
      parsedCode: obj.parsedCode,
      error: null,
      actionsDTO: obj.actionsDTO
    });
  }

  /*
   *  Store the result in a file of your choosing
   */
  if (counter === transformationStrings.length - 1) {
    console.log (`Successful transformations: ${results.success.length}`);
    console.log (`Failed transformations: ${results.fail.length}`);
    fs.writeFileSync(`${__dirname}/results.json`, JSON.stringify(results));
    fs.writeFileSync(`${__dirname}/../../__TESTS__/compilation.test.ts`, createTestFile(results.success));
  }
  counter++;
});


