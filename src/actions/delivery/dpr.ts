import DeliveryAction from "./DeliveryAction";
import {IDeliveryAction} from "./IDeliveryAction";

/**
 * Deliver the image in the specified device pixel ratio.
 *
 * @param {string} dpr The DPR (Device Pixel Ratio). Any positive float value.
 *
 * @return DeliveryAction
 */
function dpr(dpr: string):IDeliveryAction {
  return new DeliveryAction('dpr', dpr);
}

export default dpr;
