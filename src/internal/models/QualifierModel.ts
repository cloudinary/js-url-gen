import {IQualifierModel} from "../models/IQualifierModel.js";
import {qualifierToJson} from "../models/qualifierToJson.js";

export class QualifierModel{
  _qualifierModel: IQualifierModel;
  toJson = qualifierToJson;

  constructor() {
    this._qualifierModel = {};
  }
}
