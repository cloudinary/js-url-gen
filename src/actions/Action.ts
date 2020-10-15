import Qualifier from "../qualifier/Qualifier";
import {Flag} from "../values/flag/Flag";
import {mapToSortedArray} from "../utils/dataStructureUtils";

/**
 * @class Action
 * @description Defines the category of transformation to perform.
 */
class Action {
  // We're using map, to overwrite existing keys. for example:
  // addParam(w_100).addQualifier(w_200) should result in w_200. and not w_100,w_200
  qualifiers: Map<string, Qualifier> = new Map();
  private delimiter = ','; // {qualifier}{delimiter}{qualifier} for example: `${'w_100'}${','}${'c_fill'}`
  protected prepareQualifiers():void {}

  /**
   * @description Calls toString() on all child qualifiers (implicitly by using .join())
   * @return {string}
   */
  toString(): string {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers).join(this.delimiter);
  }

  /**
   * @description Adds the parameter to the action.
   * @param {Qualifier} qualifier
   * @return {this}
   */
  addQualifier(qualifier: Qualifier): this {
    this.qualifiers.set(qualifier.key, qualifier);
    return this;
  }

  /**
   * @description Adds a flag to the current action
   * @param {Values.Flag} flag
   * @return {this}
   */
  addFlag(flag: Flag): this {
    const existingFlag = this.qualifiers.get('fl_');
    flag.qualifierValue.setDelimiter('.');

    if (existingFlag){
      existingFlag.addValue(flag.qualifierValue);
    } else {
      this.qualifiers.set('fl_', flag);
    }

    return this;
  }

  protected addValueToQualifier(qualifierKey: string, qualifierValue: unknown): this{
    this.qualifiers.get(qualifierKey).addValue(qualifierValue);

    return this;
  }
}

export default Action;
