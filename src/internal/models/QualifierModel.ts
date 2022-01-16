import {IQualifierModel} from "./IQualifierModel.js";
import {IQualifierToJson, qualifierToJson} from "./qualifierToJson.js";

export class QualifierModel {
  protected _qualifierModel: IQualifierModel;

  constructor() {
    this._qualifierModel = {};
  }

  toJson(): IQualifierToJson {
    return qualifierToJson.apply(this);
  }
}
