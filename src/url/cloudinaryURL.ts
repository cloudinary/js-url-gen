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
  const publicId = config.publicId;

  const url = [prefix, resourceType, type, transformationString, publicId]
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

export default createCloudinaryURL;
