import {IActionModel} from "./IActionModel.js";

export interface IVolumeValueModel{
  mode: 'decibels' | 'percent' | 'mute';
  value?: number;
}

export interface IVolumeActionModel extends IActionModel{
  volumeValue: IVolumeValueModel
}
