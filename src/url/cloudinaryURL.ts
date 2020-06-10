import Transformation from '../transformation/Transformation';
import {Config} from '../interfaces/Config';
import {Descriptor} from '../interfaces/Descriptor';

/**
 *
 * @description Creates a fully qualified CloudinaryURL
 * @param {Object} config
 * @param {Object} descriptor
 * @param {Transformation} transformation
 */
function createCloudinaryURL(config: Config, descriptor?: Descriptor, transformation?: Transformation) {
  const prefix = getUrlPrefix(config.cloudName);
  const resourceType = handleResourceType(descriptor);
  const type = handleType(descriptor);
  const transformationString = transformation ? transformation.toString() : '';
  const version = handleVersion(config, descriptor);
  const publicId = config.publicId;

  const url = [prefix, resourceType, type, transformationString, version, publicId]
    .join('/')
    .replace(/([^:])\/+/g, '$1/') // replace '///' with '//'
    .replace(' ', '%20');

  return url;
}

/**
 * Create the URL prefix for Cloudinary resources.
 * @param cloudName
 */
function getUrlPrefix(cloudName: string) {
  // defaults
  const protocol = "http://";
  const cdnPart = "";
  const subdomain = "res";
  const host = ".cloudinary.com";
  const path = `/${cloudName}`;

  return [protocol, cdnPart, subdomain, host, path].join("");
}

/**
 *
 * @param descriptor
 */
function handleResourceType(descriptor: Descriptor) {
  //default to image
  if(!descriptor || !descriptor.resourceType) {
    return 'image';
  }

  return descriptor.resourceType;
}

/**
 *
 * @param descriptor
 */
function handleType(descriptor: Descriptor) {
  //default to upload
  if(!descriptor || !descriptor.type) {
    return 'upload';
  }

  return descriptor.type;
}

/**
 * Get version part of the url
 * @returns {string}
 * @param config
 * @param descriptor
 */
function handleVersion(config: Config, descriptor: Descriptor) {
  if (!descriptor) {
    return '';
  }
  // force_version param means to make sure there is a version in the url (Default is true)
  const isForceVersion = (config.force_version || typeof config.force_version === 'undefined');

  // Is version included in publicId or in options, or publicId is a url (doesn't need version)
  const isVersionExist = (config.publicId.indexOf('/') < 0 || config.publicId.match(/^v[0-9]+/) || isUrl(config.publicId)) || descriptor.version;

  if (isForceVersion && !isVersionExist) {
    descriptor.version = 1;
  }

  return descriptor.version ? `v${descriptor.version}` : '';
}

/**
 * Check is given string is a url
 * @param str
 * @returns {boolean}
 */
function isUrl(str: string){
  return str ? !!str.match(/^https?:\//) : false;
}

export default createCloudinaryURL;
