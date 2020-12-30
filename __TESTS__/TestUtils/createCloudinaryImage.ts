import {CloudinaryImage} from "../../src/assets/CloudinaryImage";
import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";

/**
 *
 */
function createNewImage(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryImage {
  return new CloudinaryImage(publicID, Object.assign({
    cloudName: 'demo'
  }, cloudConfig), urlConfig);
}

export {createNewImage};
