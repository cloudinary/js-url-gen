import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Qualifier from "../../qualifier/Qualifier";
import Flag from "../../values/flag/Flag";

/**
 * @@doc
 * @description A class that sets delivery of asset.
 * @class DeliveryAction
 * @augments Action
 */
class DeliveryAction extends Action implements IAction {
  constructor(deliveryKey?: string, deliveryType?: string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }

  /**
   * @@doc
   * @description Adds lossy flag-
   * Automatically use lossy compression when delivering animated GIF files.
   */
  lossy(): this{
    this.addFlag(Flag.lossy());
    return this;
  }

  /**
   * @@doc
   * @description Adds progressive flag-
   * Uses progressive compression when delivering JPG file format.
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
