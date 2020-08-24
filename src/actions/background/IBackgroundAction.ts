import {IAction} from "../../interfaces/IAction";

export interface IBackgroundAction extends IAction{
  contrast(): IBackgroundAction;
}
