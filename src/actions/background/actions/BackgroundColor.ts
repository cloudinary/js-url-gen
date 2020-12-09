import Qualifier from "../../../sdk/qualifier/Qualifier";
import QualifierValue from "../../../sdk/qualifier/QualifierValue";
import Action from "../../../sdk/Action";
import {SystemColors} from "../../../values/color";

/**
 * @class BackgroundColorAction
 * @augments Action
 * @description A class for background transformations.
 */
class BackgroundColor extends Action {
  constructor(color: SystemColors) {
    super();
    this.addQualifier(new Qualifier('b', new QualifierValue(color).setDelimiter('_')));
  }
}

export {BackgroundColor};
