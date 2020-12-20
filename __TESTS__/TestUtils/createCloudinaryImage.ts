import {CloudinaryImage} from "../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../src/config/CloudinaryConfig";

/**
 *
 */
function createNewImage(publicID?: string) {
  return new CloudinaryImage(publicID)
    .setConfig(new CloudinaryConfig({
      cloud: {
        cloudName: 'demo'
      }
    }));
}

export {createNewImage};
