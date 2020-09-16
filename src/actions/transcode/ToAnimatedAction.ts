import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import Flag from "../../qualifiers/flag/Flag";


class ToAnimatedAction extends Action {
  constructor(animatedFormat: string) {
    super();
    if (animatedFormat === 'webp'){
      this.addFlag(Flag.animatedWebP());
    }
    this.addFlag(Flag.animated());
    this.addQualifier(new Qualifier('f', animatedFormat));
  }

  delay(delayValue: number): this {
    this.addQualifier(new Qualifier('dl', delayValue));
    return this;
  }

  sampling(sampling: string|number): this {
    this.addQualifier(new Qualifier('vs', sampling));
    return this;
  }

}
export default ToAnimatedAction;
