import {FlagQualifier} from "../values/flag/FlagQualifier";
import {Qualifier} from "./qualifier/Qualifier";
import {mapToSortedArray} from "./utils/dataStructureUtils";

/**
 * @memberOf SDK
 * @description Defines the category of transformation to perform.
 */
class Action {
  // We're using map, to overwrite existing keys. for example:
  // addParam(w_100).addQualifier(w_200) should result in w_200. and not w_100,w_200
  qualifiers: Map<string, Qualifier> = new Map();
  private delimiter = ','; // {qualifier}{delimiter}{qualifier} for example: `${'w_100'}${','}${'c_fill'}`
  protected prepareQualifiers():void {}
  private actionTag = ''; // A custom name tag to identify this action in the future

  /**
   * @description Returns the custom name tag that was given to this action
   * @return {string}
   */
  getActionTag(): string {
    return this.actionTag;
  }

  /**
   * @description Sets the custom name tag for this action
   * @return {this}
   */
  setActionTag(tag:string): this {
    this.actionTag = tag;
    return this;
  }

  /**
   * @description Calls toString() on all child qualifiers (implicitly by using .join()).
   * @return {string}
   */
  toString(): string {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers).join(this.delimiter);
  }

  /**
   * @description Adds the parameter to the action.
   * @param {SDK.Qualifier} qualifier
   * @return {this}
   */
  addQualifier(qualifier: Qualifier): this {
    this.qualifiers.set(qualifier.key, qualifier);
    return this;
  }

  /**
   * @description Adds a flag to the current action.
   * @param {Values.Flag} flag
   * @return {this}
   */
  addFlag(flag: FlagQualifier): this {
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

export {Action};
