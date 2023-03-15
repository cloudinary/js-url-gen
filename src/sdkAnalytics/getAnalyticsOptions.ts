import {IAnalyticsOptions} from "./interfaces/IAnalyticsOptions.js";
import {ITrackedPropertiesThroughAnalytics} from "./interfaces/ITrackedPropertiesThroughAnalytics.js";

/**
 * @private
 * @description Gets the analyticsOptions from options- should include sdkSemver, techVersion, sdkCode, and feature
 * @param {ITrackedPropertiesThroughAnalytics} options
 * @returns {IAnalyticsOptions}
 */
export function getAnalyticsOptions(options: ITrackedPropertiesThroughAnalytics): IAnalyticsOptions {
  const analyticsOptions: IAnalyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    features: '0'
  };

  let features = '';
  if (options.accessibility) {
    features += 'D';
  }

  if (options.lazyload) {
    features += 'C';
  }

  if (options.responsive) {
    features += 'A';
  }

  if (options.placeholder) {
    features += 'B';
  }

  if (features) {
    analyticsOptions.features = features;
  }

  return analyticsOptions;
}
