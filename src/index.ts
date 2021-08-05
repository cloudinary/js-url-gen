import {Actions} from './actions';
import {Qualifiers} from "./qualifiers";
import {Transformation} from "./transformation/Transformation";
import {ImageTransformation} from "./transformation/ImageTransformation";
import {VideoTransformation} from "./transformation/VideoTransformation";
import {CloudinaryImage} from "./assets/CloudinaryImage";
import {CloudinaryVideo} from "./assets/CloudinaryVideo";
import {CloudinaryFile} from "./assets/CloudinaryFile";
import {CloudinaryMedia} from "./assets/CloudinaryMedia";
import {Cloudinary} from "./instance/Cloudinary";
import {createCloudinaryLegacyURL} from "./backwards/createCloudinaryLegacyURL";

/**
 * @namespace SDK
 */
const CloudinaryBaseSDK = {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryMedia,
  CloudinaryFile,
  createCloudinaryLegacyURL: createCloudinaryLegacyURL
};

export {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryMedia,
  CloudinaryFile,
  createCloudinaryLegacyURL,
  CloudinaryBaseSDK,
  CloudinaryBaseSDK as default
};
