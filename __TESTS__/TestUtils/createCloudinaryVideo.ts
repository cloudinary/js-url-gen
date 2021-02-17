import {CloudinaryVideo} from "../../src/assets/CloudinaryVideo";
import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";

/**
 *
 */
function createNewVideo(publicID = 'sample', cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryVideo {
  const newCloudConfig = { cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = { analytics: false, ...urlConfig};

  return new CloudinaryVideo(publicID, newCloudConfig, newUrlConfig);
}

export {createNewVideo};
