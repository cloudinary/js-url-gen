import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import Flag from "../../values/flag/Flag";

/**
 * @@doc
 * @description A class that sets delivery of asset.
 * @class DeliveryAction
 * @augments Action
 */
class DeliveryAction extends Action {
  constructor(deliveryKey?: string, deliveryType?: string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }

  /**
   * @@doc
   * @description Adds lossy flag-
   * Automatically use lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy(): this{
    this.addFlag(Flag.lossy());
    return this;
  }

  /**
   * @@doc
   * @description Adds progressive flag-
   * Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(): this{
    this.addFlag(Flag.progressive());
    return this;
  }

  /**
   * @@doc
   * @description Adds preserve transparency flag-
   * Ensures that images with a transparency channel will be delivered in PNG format.
   */
  preserveTransparency(): this {
    this.addFlag(Flag.preserveTransparency());
    return this;
  }
}

export default DeliveryAction;
