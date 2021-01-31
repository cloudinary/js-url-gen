import {Actions} from './actions';
import {Values} from "./values";
import {Transformation} from "./transformation/Transformation";
import {ImageTransformation} from "./transformation/ImageTransformation";
import {VideoTransformation} from "./transformation/VideoTransformation";
import {CloudinaryImage} from "./assets/CloudinaryImage";
import {CloudinaryVideo} from "./assets/CloudinaryVideo";
import {CloudinaryFile} from "./assets/CloudinaryFile";
import {Cloudinary} from "./instance/Cloudinary";
import {createCloudinaryV1URL} from "./backwards/createCloudinaryURL";

/**
 * @namespace SDK
 */

const CloudinarySDK = {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Values,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryFile,
  createCloudinaryV1URL
};

export {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Values,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryFile,
  createCloudinaryV1URL,
  CloudinarySDK,
  CloudinarySDK as default
};
