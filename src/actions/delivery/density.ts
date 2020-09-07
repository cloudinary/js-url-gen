import DeliveryAction from "./DeliveryAction";

/**
 * @description Controls the density to use when delivering an image or when converting a vector file such as a PDF or EPS
 * document to a web image delivery format.
 * @memberOf Actions.Delivery
 * @param {string} number
 */
function density(value:number) :DeliveryAction {
  return new DeliveryAction('dn', value);
}

export default density;
