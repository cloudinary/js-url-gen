import {Action} from "../../../internal/Action";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../../internal/qualifier/Qualifier";
import {SystemColors} from "../../../values/color";

/**
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
