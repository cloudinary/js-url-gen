import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import Flag from "../../values/flag/Flag";

/**
 * @description Qualifies the delivery of an asset.
 * @class DeliveryAction
 * @augments Action
 */
class DeliveryAction extends Action {
  constructor(deliveryKey?: string, deliveryType?: string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }

  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy(): this{
    this.addFlag(Flag.lossy());
    return this;
  }

  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(): this{
    this.addFlag(Flag.progressive());
    return this;
  }

  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency(): this {
    this.addFlag(Flag.preserveTransparency());
    return this;
  }
}

export default DeliveryAction;
