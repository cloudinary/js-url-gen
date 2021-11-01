import {IActionModel} from "./IActionModel.js";

type ColorSpaceModeType = "srgb" | "srgbTrueColor" | "tinySrgb" | "cmyk" | "noCmyk" | "keepCmyk";

interface IDeliveryColorSpaceActionModel extends IActionModel{
  mode?: ColorSpaceModeType
}

export {ColorSpaceModeType, IDeliveryColorSpaceActionModel};