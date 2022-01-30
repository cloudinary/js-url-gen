import {ITransformationFromJson} from "./IHasFromJson.js";
import {isIImageSourceModel} from "./IImageSourceModel.js";
import {ImageSource} from "../../qualifiers/source/sourceTypes/ImageSource.js";
import {isIFetchSourceModel} from "./IFetchSourceModel.js";
import {FetchSource} from "../../qualifiers/source/sourceTypes/FetchSource.js";
import {VideoSource} from "../../qualifiers/source/sourceTypes/VideoSource.js";
import {IVideoSourceModel} from "./IVideoSourceModel.js";
import {ISourceModel} from "./ISourceModel.js";
import {BaseSource} from "../../qualifiers/source/BaseSource.js";

/**
 * Create BaseSource from given model json
 * @param source
 * @param transformationFromJson
 */
export function createSourceFromModel (source: ISourceModel, transformationFromJson: ITransformationFromJson): BaseSource {
  let sourceInstance;
  if (isIImageSourceModel(source)){
    sourceInstance = ImageSource.fromJson(source, transformationFromJson);
  } else if (isIFetchSourceModel(source)){
    sourceInstance = FetchSource.fromJson(source, transformationFromJson);
  } else {
    sourceInstance = VideoSource.fromJson(source as IVideoSourceModel, transformationFromJson);
  }

  return sourceInstance;
}
