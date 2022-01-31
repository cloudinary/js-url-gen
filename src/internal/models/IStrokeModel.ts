import {IQualifierModel} from "./IQualifierModel.js";
import {IColorModel} from "./IColorModel.js";

export interface ISolidStrokeModel extends IQualifierModel{
  width: number | string;
  color: IColorModel;
}

export type IStrokeModel = boolean | ISolidStrokeModel;
