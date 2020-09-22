import DeliveryAction from "./DeliveryAction";

/**
 * @description Sets file format.
 * @memberOf Actions.Delivery
 * @param {string} format
 * @return {DeliveryAction}
 */
function format(format:string) :DeliveryAction {
  return new DeliveryAction('f', format);
}

export default format;
