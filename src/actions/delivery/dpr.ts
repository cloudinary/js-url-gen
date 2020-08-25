import DeliveryAction from "./DeliveryAction";
import {IDeliveryAction} from "./IDeliveryAction";

/**
 * @description Deliver the image in the specified device pixel ratio.
 * @memberOf Actions.Delivery
 * @param {string} dpr
 */
function dpr(dpr: string):IDeliveryAction {
  return new DeliveryAction('dpr', dpr);
}

export default dpr;
