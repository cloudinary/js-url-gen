import {Cloudinary} from 'cloudinary-core';
import {LegacyITransforamtionOptions} from "../../../../src/types/types";
import {createCloudinaryLegacyURL} from "../../../../src/backwards/createCloudinaryLegacyURL";

const CLegacy = Cloudinary.new( { cloud_name: "demo"});

/**
 * @param {string} publicID
 * @param {LegacyITransforamtionOptions} options
 * @return string;
 */
export function createTestURL(publicID: string, options: LegacyITransforamtionOptions = {}): string {
  const opts = Object.assign({}, {cloud_name: 'demo'}, options || {});
  return createCloudinaryLegacyURL(publicID, opts);
}

/**
 *
 * @param {string} publicID
 * @param {Record<string, unknown>} options
 * @returns string
 */
export function createTestURLUsingRealLegacy(publicID: string, options: Record<string, unknown> = {}): string {
  return CLegacy.url(publicID, options);
}
