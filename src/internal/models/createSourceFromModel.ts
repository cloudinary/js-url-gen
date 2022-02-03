import {ITransformationFromJson} from "./IHasFromJson.js";
import {ImageSource} from "../../qualifiers/source/sourceTypes/ImageSource.js";
import {FetchSource} from "../../qualifiers/source/sourceTypes/FetchSource.js";
import {VideoSource} from "../../qualifiers/source/sourceTypes/VideoSource.js";
import {IVideoSourceModel} from "./IVideoSourceModel.js";
import {ISourceModel} from "./ISourceModel.js";
import {BaseSource} from "../../qualifiers/source/BaseSource.js";
import {TextSource} from "../../qualifiers/source/sourceTypes/TextSource.js";
import {isITextSourceModel, isIFetchSourceModel, isIImageSourceModel} from "../typeGuards/sourceGuards.js";

/**
 * Create Source from given model json
 * @param source
 * @param transformationFromJson
 */
export function createSourceFromModel (source: ISourceModel, transformationFromJson: ITransformationFromJson): BaseSource {
  if (isITextSourceModel(source)){
    return TextSource.fromJson(source, transformationFromJson);
  } else if (isIImageSourceModel(source)){
    return ImageSource.fromJson(source, transformationFromJson);
  } else if (isIFetchSourceModel(source)){
    return FetchSource.fromJson(source, transformationFromJson);
  } else {
    return VideoSource.fromJson(source as IVideoSourceModel, transformationFromJson);
  }
}
