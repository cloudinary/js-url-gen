import DeliveryAction from "./DeliveryAction";

/**
 * @description Sets the quality level.
 * @memberOf Actions.Delivery
 * @param {string} qualityType
 */
function quality(qualityType:string) :DeliveryAction {
  return new DeliveryAction('q', qualityType);
}

export default quality;
