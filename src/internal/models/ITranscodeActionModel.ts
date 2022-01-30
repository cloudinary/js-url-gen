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

interface IAudioCodecActionModel extends IActionModel{
  audioCodec?: string;
}

interface IAudioFrequencyActionModel extends IActionModel{
  audioFrequencyType?: string;
}

export {IKeyframeIntervalsActionModel, IFPSActionModel, IFPSRangeActionModel, IBitRateActionModel, IAudioCodecActionModel, IAudioFrequencyActionModel};
