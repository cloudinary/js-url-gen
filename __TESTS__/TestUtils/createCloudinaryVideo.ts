import {CloudinaryVideo} from "../../src/assets/CloudinaryVideo";

/**
 *
 */
function createNewVideo(publicID = 'sample'): CloudinaryVideo {
  return new CloudinaryVideo(publicID, {
    cloudName: 'demo'
  });
}

export {createNewVideo};
