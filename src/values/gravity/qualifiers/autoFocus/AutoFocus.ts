import QualifierValue from "../../../../qualifier/QualifierValue";
import {FocusOn} from "../focusOn/FocusOn";

class AutoFocus extends QualifierValue {
  readonly focusOn:FocusOn;
  private _weight: number | string;
  private shouldAvoid:boolean;

  static focusOn(obj: FocusOn, weight?: number): AutoFocus {
    return new AutoFocus(obj, weight);
  }

  constructor(focusOn:FocusOn, weight?: number | string) {
    super();
    this._weight = weight;
    this.focusOn = focusOn;
    this.shouldAvoid = false;
  }

  private shouldAddWeight() {
    return typeof this._weight === 'number' || typeof this._weight === 'string' || this.shouldAvoid;
  }

  getName():string {
    return this.focusOn.name;
  }

  getWeight():number|string {
    if (this.shouldAvoid) {
      return 'avoid';
    } else {
      return this._weight;
    }
  }

  // TODO g_ should be handled by the GravityQualifier
  toString():string {
    // Future proofing, in case we'd like to support some custom string in the future, or if data is coming from a DB
    if(this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return `${this.getName()}`;
    }
  }

  weight(w: number | string): this {
    this._weight = w;
    return this;
  }

  avoid(): this {
    this.shouldAvoid = true;
    return this;
  }
}

export {AutoFocus};
