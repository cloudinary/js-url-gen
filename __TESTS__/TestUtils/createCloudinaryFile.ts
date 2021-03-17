import ICloudConfig from "../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../src/config/interfaces/Config/IURLConfig";
import {CloudinaryFile} from "../../src";

/**
 *
 */
function createNewFile(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryFile {
  const newCloudConfig = { cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = { analytics: false, ...urlConfig};

  return new CloudinaryFile(publicID, newCloudConfig, newUrlConfig);
}

export {createNewFile};
