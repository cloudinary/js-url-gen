import {ISourceModel} from "./ISourceModel.js";
import {IVideoTransformationModel} from "./IVideoTransformationModel.js";

export interface IVideoSourceModel extends ISourceModel {
  qualifierType: "VideoSource";
  sourceType: "video";
  publicId: string;
  transformation?: IVideoTransformationModel;
}
