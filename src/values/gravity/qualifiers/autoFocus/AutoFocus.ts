import QualifierValue from "../../../../qualifier/QualifierValue";
import {FocusOnValue} from "../focusOn/FocusOn";

/**
 * @doc
 * @namespace AutoFocus
 * @memberOf Values
 */
class AutoFocus extends QualifierValue {
  readonly focusOn:FocusOnValue;
  private _weight: number | string;
  private shouldAvoid:boolean;

  /**
   * @doc
   * @param {Values.FocusOn} obj The object to focus on
   * @param {number} weight
   */
  static focusOn(obj: FocusOnValue, weight?: number): AutoFocus {
    return new AutoFocus(obj, weight);
  }

  constructor(focusOn:FocusOnValue, weight?: number | string) {
    super();
    this._weight = weight;
    this.focusOn = focusOn;
    this.shouldAvoid = false;
  }

  private shouldAddWeight() {
    return typeof this._weight === 'number' || typeof this._weight === 'string' || this.shouldAvoid;
  }

  /**
   * @desc Get the name of the of the object
   */
  getName():string {
    return this.focusOn.name;
  }

  /**
   * @doc
   * @desc Get the weight for the object
   */
  getWeight():number|string {
    if (this.shouldAvoid) {
      return 'avoid';
    } else {
      return this._weight;
    }
  }

  /**
   * @doc
   * @desc Return the string representation of this QualifierValue
   */
  toString():string {
    // Future proofing, in case we'd like to support some custom string in the future, or if data is coming from a DB
    if(this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return `${this.getName()}`;
    }
  }

  /**
   * @doc
   * Set the weight of the
   * @param {numebr} w The focus weight for the object
   */
  weight(w: number | string): this {
    this._weight = w;
    return this;
  }

  /**
   * @doc
   * @desc Marks the object as avoided by the algorithm
   */
  avoid(): this {
    this.shouldAvoid = true;
    return this;
  }
}

export {AutoFocus};
