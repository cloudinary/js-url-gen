import Transformation from '../transformation/Transformation';
import {IDescriptor} from '../interfaces/IDescriptor';
import CloudinaryConfig from "../config/CloudinaryConfig";
import isFileName from './urlUtils/isFileName';
import publicIDContainsVersion from './urlUtils/publicIDContainsVersion';
import isUrl from "./urlUtils/isUrl";
import IURLConfig from "../interfaces/Config/IURLConfig";

/**
 *
 * @description Creates a fully qualified CloudinaryURL
 * @param {Object} config
 * @param {Object} descriptor
 * @param {Transformation} transformation
 */
function createCloudinaryURL(config: CloudinaryConfig, descriptor?: IDescriptor, transformation?: Transformation) {
  const prefix = getUrlPrefix(config.cloud.cloudName);
  const assetType = handleAssetType(descriptor);
  const storageType = handleStorageType(descriptor);
  const signature = getFormatedSignature(descriptor.signature)
  const transformationString = transformation ? transformation.toString() : '';
  const version = getUrlVersion(config.url, descriptor);
  const publicID = descriptor.publicID;

  const url = [prefix, assetType, storageType, signature, transformationString, version, publicID]
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
function handleAssetType(descriptor: IDescriptor) {
  //default to image
  if(!descriptor || !descriptor.assetType) {
    return 'image';
  }

  return descriptor.assetType;
}

/**
 *
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
 *
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

/**
 *
 * @param signature
 */
function getFormatedSignature(signature: string) {
  const isFormatted = !signature || (signature.startsWith('s--') && signature.endsWith('--'));
  let formattedSignature = signature;

  if(isFormatted) {
    return signature;
  }
  if(!signature.startsWith('s--')) {
    formattedSignature = `s--${formattedSignature}`;
  }
  if(!signature.endsWith('--')) {
    formattedSignature = `${formattedSignature}--`;
  }

  return formattedSignature;
}

export default createCloudinaryURL;
