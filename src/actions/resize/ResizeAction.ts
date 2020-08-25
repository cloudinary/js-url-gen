import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import {GravityParam} from "../../params/gravity/Gravity";




class ResizeAction extends Action implements IAction {
  constructor(cropType?: string, cropWidth?: number|string, cropHeight?: number|string) {
    super();
    if(cropWidth) {
      this.addParam(new Param('w', cropWidth));
    }
    if(cropHeight) {
      this.addParam(new Param('h', cropHeight));
    }
    this.addParam(new Param('c', cropType));
  }

  height(x:number|string):this {
    return this.addParam(new Param('h', x));
  }

  x(x:number): this {
    return this.addParam(new Param('x', x));
  }

  zoom(z:number): this {
    return this.addParam(new Param('z', z));
  }

  y(y:number): this {
    return this.addParam(new Param('y', y));
  }

  width(x:number|string):this {
    return this.addParam(new Param('w', x));
  }

  aspectRatio(ratio:number|string): this {
    return this.addParam(new Param('ar', ratio));
  }

  gravity(gravityParam: GravityParam): this {
    return this.addParam(gravityParam);
  }
}

export default ResizeAction;
