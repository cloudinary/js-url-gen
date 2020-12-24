import {Action} from "../../internal/Action";
import {FormatQualifier} from "../../values/format/FormatQualifier";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Qualifies the delivery of an asset.
 * @memberOf Actions.Delivery
 * @extends {SDK.Action}
 */
class DeliveryAction extends Action {
  constructor(deliveryKey?: string, deliveryType?: FormatQualifier | string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
}

export {DeliveryAction};
