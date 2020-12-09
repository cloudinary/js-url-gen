import Action from "../../sdk/Action";
import Qualifier from "../../sdk/qualifier/Qualifier";

/**
 * @description OpacityAction class, used to define the opacity of an asset
 * @class OpacityAdjustAction
 * @augments Action
 */
class OpacityAdjustAction extends Action {
  constructor(level: number) {
    super();
    this.addQualifier(new Qualifier('o', level));
  }
}

export default OpacityAdjustAction;
