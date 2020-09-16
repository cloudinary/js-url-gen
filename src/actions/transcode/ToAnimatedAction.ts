import Action from "../Action";
import Param from "../../parameters/Param";
import Flag from "../../params/flag/Flag";


class ToAnimatedAction extends Action {
  constructor(animatedFormat: string) {
    super();
    if (animatedFormat === 'webp'){
      this.addFlag(Flag.animatedWebP());
    }
    this.addFlag(Flag.animated());
    this.addParam(new Param('f', animatedFormat));
  }

  delay(delayValue: number): this {
    this.addParam(new Param('dl', delayValue));
    return this;
  }

  sampling(sampling: string|number): this {
    this.addParam(new Param('vs', sampling));
    return this;
  }

}
export default ToAnimatedAction;
