import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IDprModel} from "../../internal/models/IDeliveryActionModel.js";
import {toFloatAsString} from "../../internal/utils/toFloatAsString.js";

/**
 * @description Specifies the dpr.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryDPRAction extends Action {
  protected _actionModel: IDprModel = { actionType: 'dpr'};

  /**
   * Create a new DeliveryDPRAction
   * @param dprValue
   */
  constructor(dprValue: string | number) {
    super();
    // toFloatAsString is used to ensure 1 turns into 1.0
    const dprAsFloat = toFloatAsString(dprValue);
    this._actionModel.dpr = dprAsFloat;
    this.addQualifier(new Qualifier('dpr', dprAsFloat));
  }


  static fromJson(actionModel: IActionModel): DeliveryDPRAction {
    const {dpr} = (actionModel as IDprModel);
    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    return new this(dpr);
  }
}

export {DeliveryDPRAction};
