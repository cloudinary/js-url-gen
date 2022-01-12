import {ISourceModel} from "./ISourceModel.js";
import {IVideoTransformationModel} from "./IVideoTransformationModel.js";

export interface IVideoSourceModel extends ISourceModel {
  qualifierType: "videoSource";
  sourceType: "video";
  publicId: string;
  transformation?: IVideoTransformationModel;
}
