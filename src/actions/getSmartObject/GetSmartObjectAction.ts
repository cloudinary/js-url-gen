import Param from "../../parameters/Param";
import Action from "../Action";
import ParamValue from "../../parameters/ParamValue";

/**
 * @description  Extracts the original content of an embedded object of a Photoshop image.
 * @memberOf Actions
 * @namespace SmartObject
 */
class SmartObject extends Action {
  private smartObjectValue: string | number;
  constructor(smartObjectValue: string | number) {
    super();
    this.smartObjectValue = smartObjectValue;
  }

  protected prepareParam() : void {
    const paramValue = new ParamValue(['embedded', `${this.smartObjectValue}`]).setDelimiter(':');

    this.addParam(new Param('pg', paramValue));
  }
}

export default SmartObject;
