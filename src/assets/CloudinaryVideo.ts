import {CloudinaryAsset} from "./CloudinaryAsset";
import {VideoTransformation} from "../transformation/VideoTransformation";



/**
 * @memberOf SDK
 */
class CloudinaryVideo extends CloudinaryAsset {
  constructor(publicID?: string) {
    super(publicID, new VideoTransformation());
    this.setAssetType('video');
  }
}


export {CloudinaryVideo};
