import {Action} from "../../internal/Action";
import {FormatQualifier} from "../../values/format/FormatQualifier";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {lossy, preserveTransparency, progressive} from "../../values/flag";

/**
 * @description Qualifies the delivery of an asset.
 * @augments Action
 */
class DeliveryAction extends Action {
  constructor(deliveryKey?: string, deliveryType?: FormatQualifier | string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }

  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy(): this{
    this.addFlag(lossy());
    return this;
  }

  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(): this{
    this.addFlag(progressive());
    return this;
  }

  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency(): this {
    this.addFlag(preserveTransparency());
    return this;
  }
}

export default DeliveryAction;
