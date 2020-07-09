import {IAction} from "../../interfaces/IAction";

export interface IResizeAction extends IAction{
  aspectRatio(ratio:string | number):IResizeAction
  crop(cropWidth:number, cropHeight:number):IResizeAction;
  fill(fillWidth:number, fillHeight:number):IResizeAction;
  scale(scaleWidth:number, scaleHeight:number):IResizeAction;
  minimumPad(padWidth:number, padHeight?:number) :IResizeAction;
}
