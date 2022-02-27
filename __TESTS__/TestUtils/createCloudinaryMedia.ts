import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";
import {CloudinaryMedia} from "../../src";
import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";

/**
 *
 * @param publicID
 * @param cloudConfig
 * @param urlConfig
 */
function createNewMedia(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig): CloudinaryMedia {
  const newCloudConfig = {cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = {analytics: false, ...urlConfig};

  return new CloudinaryMedia(publicID, newCloudConfig, newUrlConfig);
}

export {createNewMedia};
