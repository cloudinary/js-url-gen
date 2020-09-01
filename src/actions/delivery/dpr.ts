import DeliveryAction from "./DeliveryAction";
import {IDeliveryAction} from "./IDeliveryAction";
import {toFloatAsString} from "../../utils/toFloatAsString";

/**
 * @description Deliver the image in the specified device pixel ratio.
 * @memberOf Actions.Delivery
 * @param {string} dpr
 */
function dpr(dpr: string|number):IDeliveryAction {
  // toFloatAsString is used to ensure 1 turns into 1.0
  return new DeliveryAction('dpr', toFloatAsString(dpr));
}

export default dpr;
