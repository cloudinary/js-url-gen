import {IAction} from "../../interfaces/IAction";
import {GravityParam} from "../../params/gravity/Gravity";
import {IBackgroundAction} from "../background/IBackgroundAction";

export interface IResizeAction extends IAction{
  aspectRatio(ratio:number|string):IResizeAction;
  gravity(type:GravityParam):IResizeAction;
  height(x:number|string):IResizeAction;
  width(x:number|string):IResizeAction;
  background(backgroundAction: IBackgroundAction):IResizeAction;
}
