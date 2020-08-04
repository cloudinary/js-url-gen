import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import {GravityParam} from "../../params/gravity/Gravity";

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

  height(x:number):this {
    return this.addParam(new Param('h', x));
  }

  width(x:number):this {
    return this.addParam(new Param('w', x));
  }

  aspectRatio(ratio: string | number): this {
    return this.addParam(new Param('ar', ratio));
  }

  gravity(gravityParam: GravityParam): this {
    return this.addParam(gravityParam);
  }
}

export default ResizeAction;
