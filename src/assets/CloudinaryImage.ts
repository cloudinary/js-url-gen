import {ImageTransformation} from "../transformation/ImageTransformation";
import {CloudinaryAsset} from "./CloudinaryAsset";


/**
 * @desc Okay Go!
 * @memberOf SDK
 */
class CloudinaryImage extends CloudinaryAsset {
  constructor(publicID?: string) {
    super(publicID, new ImageTransformation());
  }
}


export {CloudinaryImage};
