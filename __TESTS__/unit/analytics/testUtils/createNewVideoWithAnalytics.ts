import ICloudConfig from "../../../../src/config/interfaces/Config/ICloudConfig";
import IURLConfig from "../../../../src/config/interfaces/Config/IURLConfig";
import {CloudinaryVideo} from "../../../../src";
import {createNewVideo} from "../../../TestUtils/createCloudinaryVideo";

/**
 * Create a new CloudinaryImage with analytics turned on by default
 */
export function createNewVideoWithAnalytics(publicID: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig): CloudinaryVideo {
  return createNewVideo(publicID, {cloudName: 'demo'}, {analytics: true, ...urlConfig});
}
