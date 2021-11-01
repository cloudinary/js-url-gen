import {IActionModel} from "./IActionModel.js";

interface IColorSpaceModel extends IActionModel {
  colorSpaceType?: string
}

interface IDprModel extends IActionModel {
  "type": number | string;
}

interface IDensityModel extends IActionModel {
  "density": number | string;
}

interface IDefaultImageModel extends IActionModel{
  "publicId": string;
}

interface IColorSpaceFromICCModel extends IActionModel{
  "publicId"?: string;
}

interface IDeliveryFormatModel extends IActionModel {
  "formatType"?: string | number,
  "lossy"?: boolean,
  "progressive"?: {
    "mode"?: string
  },
  "preserveTransparency"?: boolean
}

interface IDeliveryQualityModel extends IActionModel{
  "level"?: string | number;
  "chromaSubSampling"?: string;
  "quantization"?: number;
}

export {IColorSpaceModel, IDprModel, IDensityModel, IDefaultImageModel, IColorSpaceFromICCModel, IDeliveryFormatModel, IDeliveryQualityModel};
