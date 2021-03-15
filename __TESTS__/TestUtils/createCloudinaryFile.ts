import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";
import {CloudinaryFile} from "../../src";

/**
 *
 */
function createNewFile(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryFile {
  return new CloudinaryFile(publicID, Object.assign({
    cloudName: 'demo'
  }, cloudConfig), urlConfig);
}

export {createNewFile};
