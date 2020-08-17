import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import {FormatType} from "../../params/formats/Formats";

class DeliveryAction extends Action implements IAction {
  constructor(deliveryKey?: string, deliveryType?: string | FormatType) {
    super();
    this.addParam(new Param(deliveryKey, deliveryType));
  }
}

export default DeliveryAction;
