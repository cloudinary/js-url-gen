import {createCloudinaryV1URL} from "../../../../src";
import {V1ITransforamtionOptions} from "../../../../src/backwards/types";

/**
 * @param {string} publicID
 * @param {V1ITransforamtionOptions} options
 * @return string;
 */
export function createTestURL(publicID: string, options: V1ITransforamtionOptions = {}): string {
  const opts = Object.assign({}, {cloud_name: 'demo'}, options || {});
  return createCloudinaryV1URL(publicID, opts);
}
