import {CloudinaryImage} from "../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../src/config/CloudinaryConfig";

/**
 *
 */
function createNewImage() {
  return new CloudinaryImage()
    .setConfig(new CloudinaryConfig({
      cloud: {
        cloudName: 'demo'
      }
    }));
}

export {createNewImage};
