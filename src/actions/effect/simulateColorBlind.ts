import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {SimulateColorBlindType} from "../../types/types.js";

/**
 * @description Simulates the way an image would appear to someone with the specified color blind condition
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
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

  /**
   * @description Sets the color blind condition to simulate.
   * @param {Qualifiers.simulateColorBlindValues | SimulateColorBlindType | string} cond
   * @return {this}
   */
  condition(cond: SimulateColorBlindType | string): this {
    return this.setQualifier(cond);
  }
}



export {SimulateColorBlindEffectAction};
