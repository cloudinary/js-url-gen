import CloudinaryConfig from "../../src/config/CloudinaryConfig";
import {CloudinaryVideo} from "../../src/assets/CloudinaryVideo";

/**
 *
 */
function createNewVideo(): CloudinaryVideo {
  return new CloudinaryVideo()
    .setConfig(new CloudinaryConfig({
      cloud: {
        cloudName: 'demo'
      }
    }));
}

export {createNewVideo};
