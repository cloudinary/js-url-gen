import Qualifier from "../../qualifiers/Qualifier";
import Action from "../Action";
import QualifierValue from "../../qualifiers/QualifierValue";

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

  protected prepareQualifiers() : void {
    const qualifierValue = new QualifierValue(['embedded', `${this.smartObjectValue}`]).setDelimiter(':');

    this.addQualifier(new Qualifier('pg', qualifierValue));
  }
}

export default SmartObject;
