import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";
import {prepareColor} from "../../utils/prepareColor";

class BorderAction extends Action {
  private borderWidth: number;
  private borderColor: string;
  private borderStyle: string;
  constructor(borderStyle:'solid' | string) {
    super();
    this.borderStyle = borderStyle;
  }

  /**
   * @param {number} borderWidth
   */
  width(borderWidth: number): this {
    this.borderWidth = borderWidth;
    return this;
  }

  /**
   * @param {string} borderColor
   */
  color(borderColor: string): this {
    this.borderColor = prepareColor(borderColor);
    return this;
  }

  protected prepareQualifiers() : void {
    const qualifierValue = new QualifierValue([`${this.borderWidth}px`, this.borderStyle, `${this.borderColor}`]).setDelimiter('_');
    this.addQualifier(new Qualifier('bo', qualifierValue));
  }
}


export default BorderAction;

