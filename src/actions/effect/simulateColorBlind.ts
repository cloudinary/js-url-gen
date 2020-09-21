import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

class SimulateColorBlindEffectAction extends Action {
  constructor() {
    super();
    this.addQualifier(new Qualifier('e', `simulate_colorblind`));
  }

  private setQualifier(val? : string) {
    const strToAppend = `:${val}`;
    if (val) {
      this.addQualifier(new Qualifier('e', `simulate_colorblind${strToAppend}`));
    }
    return this;
  }

  condition(cond: string) {
    return this.setQualifier(cond);
  }
}

/**
 * @description
 * Simulates the way an image would appear to someone with the specified color blind condition. </br>
 * For a list of supported color blind conditions see /values/simulateColorBlind
 * @memberOf Actions.Effect
 */
function simulateColorBlind(): SimulateColorBlindEffectAction {
  return new SimulateColorBlindEffectAction();
}

export default simulateColorBlind;
