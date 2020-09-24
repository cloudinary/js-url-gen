import {IAction} from "../../interfaces/IAction";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @class BackgroundAction
 * @augments Qualifier
 * @description A class for background transformations.
 */
class BackgroundAction extends Qualifier implements IAction {
  constructor(backgroundType?: string) {
    super('b', new QualifierValue(backgroundType).setDelimiter('_'));
  }

  /**
   * @description Selects the strongest contrasting color to the predominant color
   */
  contrast():this {
    return this.addValue('contrast');

  }
}

export default BackgroundAction;
