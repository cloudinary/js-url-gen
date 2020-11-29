import Qualifier from "../../../qualifier/Qualifier";
import QualifierValue from "../../../qualifier/QualifierValue";
import Action from "../../Action";
import {SystemColors} from "../../../values/color/Color";

/**
 * @class BackgroundColorAction
 * @augments Action
 * @description A class for background transformations.
 */
class BackgroundColorAction extends Action {
  constructor(color: SystemColors) {
    super();
    this.addQualifier(new Qualifier('b', new QualifierValue(color).setDelimiter('_')));
  }
}

export {BackgroundColorAction};
