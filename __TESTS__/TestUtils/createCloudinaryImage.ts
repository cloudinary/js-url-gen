import {CloudinaryImage} from "../../src/assets/CloudinaryImage";
import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";

/**
 *
 */
function createNewImage(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryImage {
  const newCloudConfig = { cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = { analytics: false, ...urlConfig};

  return new CloudinaryImage(publicID, newCloudConfig, newUrlConfig);
}

export {createNewImage};
