import aspectRatio from "./aspectRatio";
import crop from './crop';
import fill from './fill';
import scale from './scale';
import minimumPad from './minimumPad';
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";

class ResizeAction extends Action implements IAction {
  constructor(cropType?: string, cropWidth?: number, cropHeight?: number) {
    super();
    if(cropWidth) {
      this.addParam(new Param('w', cropWidth));
    }
    if(cropHeight) {
      this.addParam(new Param('h', cropHeight));
    }
    this.addParam(new Param('c', cropType));
  }

  aspectRatio(ratio: string | number): this {
    return this.addParam(new Param('ar', ratio));
  }

  crop(cropWidth:number, cropHeight:number): this {
    return this.addValueToParam('c', [cropWidth, cropHeight]);
  }

  fill(fillWidth:number, fillHeight:number): this {
    return this.addValueToParam('c', [fillWidth, fillHeight]);
  }

  scale(scaleWidth:number, scaleHeight:number): this {
    return this.addValueToParam('c', [scaleWidth, scaleHeight]);
  }
  minimumPad(padWidth:number, padHeight?:number): this{
    return this.addValueToParam('c', [padWidth, padHeight]);
  }
}

export {aspectRatio, crop, fill, scale, minimumPad, ResizeAction};

export default {aspectRatio, crop, fill, scale, minimumPad, ResizeAction};
