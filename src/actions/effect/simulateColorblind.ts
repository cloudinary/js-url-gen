import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @description Simulates the way an image would appear to someone with the specified color blind condition
 * @class SimulateColorblindEffectAction
 * @augments Action
 */
class SimulateColorblindEffectAction extends Action {
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

  /**
   * @@doc
   * @description Sets the condition of the colorblind you wish to simulate
   * @param {Values.simulateColorblindValues | string} cond
   * @return {this}
   */
  condition(cond: string) {
    return this.setQualifier(cond);
  }
}

/**
 * @description
 * Simulates the way an image would appear to someone with the specified color blind condition. </br>
 * For a list of supported color blind conditions see {@link Values.simulateColorblindValues| types of color blindness} for possible values
 * @memberOf Actions.Effect
 * @return {SimulateColorblindEffectAction}
 */
function simulateColorblind(): SimulateColorblindEffectAction {
  return new SimulateColorblindEffectAction();
}

export default simulateColorblind;
