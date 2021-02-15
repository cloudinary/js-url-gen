import {encodeVersion} from "./encodeVersion";
import {getAnalyticsOptions} from "./getAnalyticsOptions";
import {ITrackedPropertiesThroughAnalytics} from "./interfaces/ITrackedPropertiesThroughAnalytics";
import pkg from '../package.json';

/**
 * @private
 * @description Try to get the node version out of process, if browser just return 0.0.0
 */
function getNodeVersion() {
  const failedVersion = '0.0.0';
  if (typeof window !== 'undefined') {
    return failedVersion;
  } else {
    // node env
    try { return process.versions.node || failedVersion; } catch(e) { return failedVersion; }
  }
}

/**
 * @private
 * @description Ensure that all values ITrackedPropertiesThroughAnalytics are populated.
 * Accept a partial map of values and returns the complete interface of ITrackedPropertiesThroughAnalytics
 * @param {Partial<ITrackedPropertiesThroughAnalytics>} trackedAnalytics
 * @param {Partial<ITrackedPropertiesThroughAnalytics>} trackedAnalytics
 */
function ensureShapeOfTrackedProperties(trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>): ITrackedPropertiesThroughAnalytics {
  // try to get the process version from node, but if we're on the client return 0.0.0
  const defaults = {
    techVersion: getNodeVersion(),
    sdkCode: 'T', // Base code
    sdkSemver : pkg.version.split('-')[0], // remove -beta, -alpha etc.
    responsive: false,
    placeholder: false,
    lazyload: false,
    accessibility: false,
    urlAnalytics: false
  };

  if (!trackedAnalytics) {
    return defaults;
  } else {
    return Object.assign({}, defaults, trackedAnalytics);
  }
}



/**
 * @private
 * @description Creates the complete SDK signature by using all the values provided by ITrackedPropertiesThroughAnalytics
 * @return {string} sdkAnalyticsSignature
 */
export function getSDKAnalyticsSignature(_trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>): string | 'E' {
  const trackedAnalytics = ensureShapeOfTrackedProperties(_trackedAnalytics);
  const analyticsOptions = getAnalyticsOptions(trackedAnalytics);

  try {
    const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    const encodedTechVersion = encodeVersion(twoPartVersion);

    const featureCode = analyticsOptions.feature;
    const SDKCode = analyticsOptions.sdkCode;
    const algoVersion = 'A'; // The algo version is determined here, it should not be an argument


    return `${algoVersion}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
  } catch (e) {
    // Either SDK or Node versions were unparsable
    return 'E';
  }
}

/**
 * @private
 * @description Removes patch version from the semver if it exists
 *              Turns x.y.z OR x.y into x.y
 * @param {'x.y.z' || 'x.y' || string} semVerStr
 */
function removePatchFromSemver(semVerStr: string) {
  const parts = semVerStr.split('.');

  return `${parts[0]}.${parts[1]}`;
}
