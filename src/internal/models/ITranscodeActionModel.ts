import {IActionModel} from "./IActionModel.js";

interface IKeyframeIntervalsActionModel extends IActionModel{
  interval?: number | string;
}

interface IFPSActionModel extends IActionModel{
  fps?: number;
}

interface IFPSRangeActionModel extends IActionModel{
  fps?: {from: number; to?: number}
}

export {IKeyframeIntervalsActionModel, IFPSActionModel, IFPSRangeActionModel};
