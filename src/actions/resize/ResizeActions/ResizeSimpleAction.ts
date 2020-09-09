import Param from "../../../parameters/Param";
import Action from "../../Action";
import BackgroundAction from "../../background/BackgroundAction";
import {Flag} from "../../../params/flag/Flag";

class ResizeSimpleAction extends Action {
  constructor(cropType: string, cropWidth: number|string, cropHeight?: number|string) {
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

  width(x:number|string):this {
    return this.addParam(new Param('w', x));
  }

  /**
   * The methods below should not exist on the ResizeSimpleAction class
   * However they are currently unspecced, so it's TBD where they'll belong.
   */

  x(x:number): this {
    return this.addParam(new Param('x', x));
  }

  zoom(z:number): this {
    return this.addParam(new Param('z', z));
  }

  y(y:number): this {
    return this.addParam(new Param('y', y));
  }

  background(backgroundAction: BackgroundAction): this {
    return this.addParam(backgroundAction);
  }

  resizeMode(modeType:string): this {
    this.addFlag(new Flag(modeType));

    return this;
  }
}


export default ResizeSimpleAction;
