import {CloudinaryAsset} from "./CloudinaryAsset";
import {VideoTransformation} from "../sdk/transformation/VideoTransformation";



/**
 * @memberOf SDK
 */
class CloudinaryVideo extends CloudinaryAsset {
  constructor(publicID?: string) {
    super(publicID, new VideoTransformation());
  }
}


export {CloudinaryVideo};
