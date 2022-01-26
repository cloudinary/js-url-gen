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

interface IBitRateActionModel extends IActionModel {
  bitRate?: number | string;
  constant?: boolean;
}

interface IAudioCodecAction extends IActionModel{
  audioCodec?: string;
}

export {IKeyframeIntervalsActionModel, IFPSActionModel, IFPSRangeActionModel, IBitRateActionModel, IAudioCodecAction};
