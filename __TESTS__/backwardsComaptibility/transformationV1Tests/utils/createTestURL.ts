import {Cloudinary } from 'cloudinary-core';
import {createCloudinaryV1URL} from "../../../../src";
import {V1ITransforamtionOptions} from "../../../../src/backwards/types";

const CLV1 = Cloudinary.new( { cloud_name: "demo"});

/**
 * @param {string} publicID
 * @param {V1ITransforamtionOptions} options
 * @return string
 */
export function createTestURL(publicID: string, options: V1ITransforamtionOptions = {}): string {
  const opts = Object.assign({}, {cloud_name: 'demo'}, options || {});
  return createCloudinaryV1URL(publicID, opts);
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
