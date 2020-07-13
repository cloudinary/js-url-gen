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

}

export default ResizeAction;
