import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @description Represents an embedded smart object in a Photoshop document.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#extract_the_original_content_of_an_embedded_object
  * | Extract the original content of an embedded Photoshop object}
 * @class SmartObjectAction
 * @augments Action
 */
class SmartObjectAction extends Action{
  private smartObjectValue: string|number;
  constructor() {
    super();
  }

  /**
   * @description Creates a new instance using the specified number.
   * @param index The number.
   */
  byIndex(index: string|number): this{
    this.smartObjectValue = index;
    return this;
  }

  /**
   * @description Creates an instance using the name.
   * @param fileName The name
   */
  byFileName(fileName:string): this{
    this.smartObjectValue = `name:${fileName}`;
    return this;
  }

  protected prepareQualifiers() : void {
    const qualifierValue = new QualifierValue(['embedded', `${this.smartObjectValue}`]).setDelimiter(':');

    this.addQualifier(new Qualifier('pg', qualifierValue));
  }
}

export default SmartObjectAction;
