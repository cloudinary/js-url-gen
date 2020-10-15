import Qualifier from "../../../qualifier/Qualifier";
import QualifierValue from "../../../qualifier/QualifierValue";
import Action from "../../Action";

/**
 * @class BackgroundColorAction
 * @augments Action
 * @description A class for background transformations.
 */
class BackgroundColorAction extends Action {
  constructor(backgroundType: string) {
    super();
    this.addQualifier(new Qualifier('b', new QualifierValue(backgroundType).setDelimiter('_')));
  }
}

export {BackgroundColorAction};
