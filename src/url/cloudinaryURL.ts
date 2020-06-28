import Transformation from '../transformation/Transformation';
import {IDescriptor} from '../interfaces/IDescriptor';
import CloudinaryConfig from "../config/CloudinaryConfig";
import isFolder from './urlUtils/isFolder';
import publicIDContainsVersion from './urlUtils/publicIDContainsVersion';
import isUrl from "./urlUtils/isUrl";

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
  const version = getUrlVersion(descriptor);
  const publicID = descriptor.publicID;

  const url = [prefix, resourceType, type, transformationString, version, publicID]
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

/**
 *
 * @param descriptor
 */
function getUrlVersion(descriptor: IDescriptor) {

  const shouldForceVersion = descriptor.forceVersion || typeof descriptor.forceVersion === 'undefined';
  const shouldVersionExist = isFolder(descriptor.publicID) ||
    publicIDContainsVersion(descriptor.publicID) ||
    isUrl(descriptor.publicID) ||
    descriptor.version;

  let version = descriptor.version;
  if (shouldForceVersion && !shouldVersionExist) {
    version = 1;
  }

  return version ? `v${version}` : '';
}

export default createCloudinaryURL;
