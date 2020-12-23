import CloudinaryConfig from "../../src/config/CloudinaryConfig";
import {CloudinaryVideo} from "../../src/assets/CloudinaryVideo";

/**
 *
 */
function createNewVideo(publicID = 'sample'): CloudinaryVideo {
  return new CloudinaryVideo(publicID)
    .setConfig(new CloudinaryConfig({
      cloud: {
        cloudName: 'demo'
      }
    }));
}

export {createNewVideo};
