import cloudinaryURL from "./sdk/url/cloudinaryURL";
import {Actions} from './actions';
import {Values} from "./values";
import {Transformation} from "./sdk/transformation/Transformation";
import {ImageTransformation} from "./sdk/transformation/ImageTransformation";
import {VideoTransformation} from "./sdk/transformation/VideoTransformation";
import {CloudinaryImage} from "./assets/CloudinaryImage";
import {CloudinaryVideo} from "./assets/CloudinaryVideo";
import {CloudinaryAsset} from "./assets/CloudinaryAsset";
import {Cloudinary} from "./instance/Cloudinary";


/**
 * @namespace SDK
 */

const CloudinarySDK = {
  cloudinaryURL,
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Values,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryAsset
};

export {
  CloudinarySDK,
  CloudinarySDK as default
};
