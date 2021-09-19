import ICloudConfig from "../../../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../../../src/config/interfaces/Config/IURLConfig";
import {createNewImage} from "../../../TestUtils/createCloudinaryImage";
import {CloudinaryImage} from "../../../../src/assets/CloudinaryImage";

/**
 * Create a new CloudinaryImage with analytics turned on by default
 */
export function createNewImageWithAnalytics(publicID: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig): CloudinaryImage {
  return createNewImage(publicID, {cloudName: 'demo'}, {analytics: true, ...urlConfig});
}
