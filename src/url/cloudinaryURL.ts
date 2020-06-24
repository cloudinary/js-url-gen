import Transformation from '../transformation/Transformation';
import {IDescriptor} from '../interfaces/IDescriptor';
import CloudinaryConfig from "../config/CloudinaryConfig";

/**
 *
 * @description Creates a fully qualified CloudinaryURL
 * @param {Object} config
 * @param {Object} descriptor
 * @param {Transformation} transformation
 */
function createCloudinaryURL(config: CloudinaryConfig, descriptor?: IDescriptor, transformation?: Transformation) {
  const prefix = getUrlPrefix(config.cloud.cloudName);
  const resourceType = handleResourceType(descriptor);
  const type = handleType(descriptor);
  const transformationString = transformation ? transformation.toString() : '';
  const publicID = descriptor.publicID;

  const url = [prefix, resourceType, type, transformationString, publicID]
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
function handleResourceType(descriptor: IDescriptor) {
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
function handleType(descriptor: IDescriptor) {
  //default to upload
  if(!descriptor || !descriptor.type) {
    return 'upload';
  }

  return descriptor.type;
}

export default createCloudinaryURL;
