import {Cloudinary } from 'cloudinary-core';
import {createCloudinaryLegacyURL} from "../../../../src";
import {LegacyITransforamtionOptions} from "../../../../src/backwards/types";

const CLV1 = Cloudinary.new( { cloud_name: "demo"});

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
export function createTestURLUsingRealV1(publicID: string, options: Record<string, unknown> = {}): string {
  return CLV1.url(publicID, options);
}
