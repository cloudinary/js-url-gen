import {CloudinaryVideo} from "../../src/assets/CloudinaryVideo";
import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";
import {CloudinaryImage} from "../../src";

/**
 *
 */
function createNewVideo(publicID = 'sample', cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryVideo {
  const newCloudConfig = Object.assign({
    cloudName: 'demo'
  }, cloudConfig);

  const newUrlConfig = Object.assign({
    analytics: false
  }, urlConfig);

  return new CloudinaryVideo(publicID, newCloudConfig, newUrlConfig);
}

export {createNewVideo};
