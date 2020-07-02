import {IAction} from "../../interfaces/IAction";

export interface IRotateAction extends IAction{
  angle(angle: number): IRotateAction;
  horizontalFlip(): IRotateAction;
  verticalFlip(): IRotateAction;
}
