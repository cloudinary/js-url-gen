import {createCloudinaryLegacyURL} from "../../../../src";
import {LegacyITransforamtionOptions} from "../../../../src/backwards/types";

/**
 * @param {string} publicID
 * @param {LegacyITransforamtionOptions} options
 * @return string;
 */
export function createTestURL(publicID: string, options: LegacyITransforamtionOptions = {}): string {
  const opts = Object.assign({}, {cloud_name: 'demo'}, options || {});
  return createCloudinaryLegacyURL(publicID, opts);
}
