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
    feature: '0'
  };

  if (options.accessibility) {
    analyticsOptions.feature = 'D';
  }

  if (options.lazyload) {
    analyticsOptions.feature = 'C';
  }

  if (options.responsive) {
    analyticsOptions.feature = 'A';
  }

  if (options.placeholder) {
    analyticsOptions.feature = 'B';
  }

  return analyticsOptions;
}
