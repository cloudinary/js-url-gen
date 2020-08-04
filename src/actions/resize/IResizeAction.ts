import {IAction} from "../../interfaces/IAction";
import {GravityParam} from "../../params/gravity/Gravity";

export interface IResizeAction extends IAction{
  aspectRatio(ratio:string | number):IResizeAction;
  gravity(type:GravityParam):IResizeAction;
  height(x:number):IResizeAction;
  width(x:number):IResizeAction;
}
