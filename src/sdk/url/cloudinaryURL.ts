import {Transformation} from '../transformation/Transformation';
import {IDescriptor} from '../config/interfaces/IDescriptor';
import isFileName from './urlUtils/isFileName';
import publicIDContainsVersion from './urlUtils/publicIDContainsVersion';
import isUrl from "./urlUtils/isUrl";
import IURLConfig from "../config/interfaces/Config/IURLConfig";
import ICloudinaryConfigurations from "../config/interfaces/Config/ICloudinaryConfigurations";

/**
 *
 * @description Creates a fully qualified CloudinaryURL
 * @param {Object} config
 * @param {Object} descriptor
 * @param {Transformation} transformation
 * @return {string} CloudinaryURL
 */
function createCloudinaryURL(config: ICloudinaryConfigurations, descriptor?: IDescriptor, transformation?: Transformation): string {
  const prefix = getUrlPrefix(config.cloud.cloudName, config.url);
  const assetType = handleAssetType(descriptor);
  const storageType = handleStorageType(descriptor);
  const signature = descriptor.signature;
  const transformationString = transformation ? transformation.toString() : '';
  const version = getUrlVersion(config.url, descriptor);

  const publicID = descriptor.publicID
    // Serialize the publicID, but leave slashes alone.
    // we can't use serializeCloudinaryCharacters because that does both things.
    .replace(/,/g, '%2C');

  const url = [prefix, assetType, storageType, signature, transformationString, version, publicID]
    .filter((a) => a)
    .join('/');

  return encodeURI(url)
    .replace(/\?/g, '%3F')
    .replace(/=/g, '%3D');
}

/**
 * Create the URL prefix for Cloudinary resources.
 * Available use cases
 * http://res.cloudinary.com/{cloudName}
 * https://res.cloudinary.com/{cloudName}
 * https://{cloudName}-res.cloudinary.com/
 * http://{domain}/${cloudName}
 * https://{domain}/${cloudName}
 * https://{domain}
 * @private
 *
 * @param {string} cloudName
 * @param {IURLConfig} urlConfig
 */
function getUrlPrefix(cloudName: string, urlConfig: IURLConfig) {
  const secure = urlConfig.secure;
  const privateCDN = urlConfig.privateCdn;
  const cname = urlConfig.cname;
  const secureDistribution = urlConfig.secureDistribution;

  if (!secure && !cname) {
    return `http://res.cloudinary.com/${cloudName}`;
  }

  if (secure && !secureDistribution && privateCDN) {
    return `https://${cloudName}-res.cloudinary.com`;
  }

  if (secure && !secureDistribution) {
    return `https://res.cloudinary.com/${cloudName}`;
  }

  if (secure && secureDistribution && privateCDN) {
    return `https://${secureDistribution}`;
  }

  if (secure && secureDistribution) {
    return `https://${secureDistribution}/${cloudName}`;
  }

  if (!secure && cname) {
    return `http://${cname}/${cloudName}`;
  } else {
    return 'ERROR';
  }
}

/**
 * @private
 * @param descriptor
 */
function handleAssetType(descriptor: IDescriptor) {
  //default to image
  if (!descriptor || !descriptor.assetType) {
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
  if (!descriptor || !descriptor.storageType) {
    return 'upload';
  }

  return descriptor.storageType;
}

/**
 * @private
 * @param descriptor
 */
function getUrlVersion(urlConfig: IURLConfig, descriptor: IDescriptor) {
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
