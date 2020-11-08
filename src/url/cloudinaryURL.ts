import Transformation from '../transformation/Transformation';
import {IDescriptor} from '../interfaces/IDescriptor';
import isFileName from './urlUtils/isFileName';
import publicIDContainsVersion from './urlUtils/publicIDContainsVersion';
import isUrl from "./urlUtils/isUrl";
import IURLConfig from "../interfaces/Config/IURLConfig";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";

/**
 *
 * @description Creates a fully qualified CloudinaryURL
 * @param {Object} config
 * @param {Object} descriptor
 * @param {Transformation} transformation
 * @return {string} CloudianryURL
 */
function createCloudinaryURL(config: ICloudinaryConfigurations, descriptor?: IDescriptor, transformation?: Transformation): string {
  const prefix = getUrlPrefix(config.cloud.cloudName, config.url);
  const assetType = handleAssetType(descriptor);
  const storageType = handleStorageType(descriptor);
  const signature = descriptor.signature;
  const transformationString = transformation ? transformation.toString() : '';
  const version = getUrlVersion(config.url, descriptor);
  const publicID = descriptor.publicID;

  const url = [prefix, assetType, storageType, signature, transformationString, version, publicID]
    .filter((a) => a)
    .join('/')
    .replace(' ', '%20');

  return url;
}

/**
 * Create the URL prefix for Cloudinary resources.
 * @private
 * @param {string} cloudName
 * @param {IURLConfig} urlConfig
 */
function getUrlPrefix(cloudName: string, urlConfig:IURLConfig) {
  // defaults
  const protocol = urlConfig.secure ? "https://" : "http://";
  const cdnPart = "";
  const subdomain = "res";
  const host = ".cloudinary.com";
  const path = `/${cloudName}`;

  return [protocol, cdnPart, subdomain, host, path].join("");
}

/**
 * @private
 * @param descriptor
 */
function handleAssetType(descriptor: IDescriptor) {
  //default to image
  if(!descriptor || !descriptor.assetType) {
    return 'image';
  }

  return descriptor.assetType;
}

/**
 * @private
 * @param descriptor
 */
function handleStorageType(descriptor: IDescriptor) {
  //default to upload
  if(!descriptor || !descriptor.storageType) {
    return 'upload';
  }

  return descriptor.storageType;
}

/**
 * @private
 * @param descriptor
 */
function getUrlVersion(urlConfig:IURLConfig, descriptor: IDescriptor) {
  const shouldForceVersion = urlConfig.forceVersion !== false;

  if (descriptor.version) {
    return `v${descriptor.version}`;
  }

  // In all these conditions we never force a version
  if (publicIDContainsVersion(descriptor.publicID) || isUrl(descriptor.publicID) || isFileName(descriptor.publicID)) {
    return '';
  }

  return shouldForceVersion ? 'v1' : '';
}

export default createCloudinaryURL;
