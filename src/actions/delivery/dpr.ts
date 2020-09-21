import DeliveryAction from "./DeliveryAction";
import {toFloatAsString} from "../../utils/toFloatAsString";

/**
 * @description Deliver the image in the specified device pixel ratio.
 * @memberOf Actions.Delivery
 * @param {string} dpr
 * @returns {DeliveryAction}
 */
function dpr(dpr: string|number):DeliveryAction {
  // toFloatAsString is used to ensure 1 turns into 1.0
  return new DeliveryAction('dpr', toFloatAsString(dpr));
}

export default dpr;
