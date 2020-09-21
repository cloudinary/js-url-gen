import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Qualifier from "../../qualifier/Qualifier";
import Flag from "../../values/flag/Flag";

class DeliveryAction extends Action implements IAction {
  constructor(deliveryKey?: string, deliveryType?: string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
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
