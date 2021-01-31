import {Actions} from './actions';
import {Qualifiers} from "./qualifiers";
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
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryFile
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
  CloudinaryFile,
  CloudinarySDK,
  CloudinarySDK as default
};
