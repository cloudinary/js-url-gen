import DeliveryAction from "./DeliveryAction";
import {IDeliveryAction} from "./IDeliveryAction";

/**
 * @description Deliver the image in the specified device pixel ratio.
 * @memberOf Actions.Delivery
 * @param {string} dpr
 */
function dpr(dpr: string|number):IDeliveryAction {
  let useDPR = dpr.toString();

  // Force DPR to contain a decimal point
  if (dpr !== 'auto' && useDPR.indexOf('.') === -1) {
    useDPR = `${dpr}.0`;
  }

  return new DeliveryAction('dpr', useDPR);
}

export default dpr;
