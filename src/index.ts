import {Actions} from './actions';
import {Values} from "./values";
import {Transformation} from "./transformation/Transformation";
import {ImageTransformation} from "./transformation/ImageTransformation";
import {VideoTransformation} from "./transformation/VideoTransformation";
import {CloudinaryImage} from "./assets/CloudinaryImage";
import {CloudinaryVideo} from "./assets/CloudinaryVideo";
import {CloudinaryFile} from "./assets/CloudinaryFile";
import {Cloudinary} from "./instance/Cloudinary";


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
  CloudinaryAsset: CloudinaryFile
};

export {
  CloudinarySDK,
  CloudinarySDK as default
};
