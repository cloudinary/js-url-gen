import CloudinaryConfig from "../../src/config/CloudinaryConfig";
import {CloudinaryVideo} from "../../src/assets/CloudinaryVideo";

/**
 *
 */
function createNewVideo() {
  return new CloudinaryVideo()
    .setConfig(new CloudinaryConfig({
      cloud: {
        cloudName: 'demo'
      }
    }));
}

export {createNewVideo};
