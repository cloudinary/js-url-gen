import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import Flag from "../../params/flag/Flag";

class DeliveryAction extends Action implements IAction {
  constructor(deliveryKey?: string, deliveryType?: string|number) {
    super();
    this.addParam(new Param(deliveryKey, deliveryType));
  }

  lossy(): this{
    this.addFlag(Flag.lossy());
    return this;
  }

  progressive(): this{
    this.addFlag(Flag.progressive());
    return this;
  }

  preserveTransparency(): this {
    this.addFlag(Flag.preserveTransparency());
    return this;
  }
}

export default DeliveryAction;
