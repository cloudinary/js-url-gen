import {IAction} from "../../interfaces/IAction";

export interface IResizeAction extends IAction{
  aspectRatio(ratio:string | number):IResizeAction
}
