import log from "../log";
import {ITestCase} from "../../interfaces/ITestCase";

/**
 * @param {ITestCase} testCase
 * @param {number} actualSizeInKB
 */
function handleTestSuccess(testCase: ITestCase, actualSizeInKB: number):void {
  log.success(`${testCase.name} ${Math.round(actualSizeInKB)}KB < ${testCase.sizeLimitInKB}KB`);
}

export default handleTestSuccess;
