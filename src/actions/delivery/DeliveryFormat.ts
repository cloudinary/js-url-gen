import {lossy, preserveTransparency, progressive} from "../../values/flag";
import {DeliveryAction} from "./DeliveryAction";
import {ProgressiveQualifier} from "../../values/progressive";

/**
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 */
class DeliveryFormat extends DeliveryAction {
  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy(): this {
    this.addFlag(lossy());
    return this;
  }

  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(mode?: 'semi' | 'steep' | 'none' | '' | ProgressiveQualifier): this {
    if (mode instanceof ProgressiveQualifier) {
      this.addFlag(mode);
    } else {
      this.addFlag(progressive(mode));
    }
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

export {DeliveryFormat};
