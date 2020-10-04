import DeliveryAction from "./DeliveryAction";

/**
 * @description Default images can be used in the case that a requested image does not exist.
 * @memberOf Actions.Delivery
 * @param {string} publicId Default image public ID
 * @return {DeliveryAction}
 */
function defaultImage(publicId:string) :DeliveryAction {
  return new DeliveryAction('d', publicId);
}

export default defaultImage;
