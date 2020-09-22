import DeliveryAction from "./DeliveryAction";

/**
 * @description Controls the color space used for the delivered image.
 * @memberOf Actions.Delivery
 * @param {string} mode The color space.
 * @return {DeliveryAction}
 */
function colorSpace(mode:string): DeliveryAction {
  return new DeliveryAction('cs', mode);
}

export default colorSpace;
