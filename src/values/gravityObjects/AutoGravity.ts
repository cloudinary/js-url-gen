import {GravityObject} from "./GravityObject";

/**
 * @@doc
 * @class AutoGravity
 * @classdesc AutoGravityObject is a Gravity Qualifier used to automatically detect objects in an asset
 */
export class AutoGravity {
  readonly gravityObject:GravityObject;
  private readonly weight?:number | string;
  private shouldAvoid:boolean;

  constructor(gravityObject:GravityObject, weight?: number | string) {
    this.weight = weight;
    this.gravityObject = gravityObject;
    this.shouldAvoid = false;
  }

  private shouldAddWeight() {
    return typeof this.weight === 'number' || typeof this.weight === 'string' || this.shouldAvoid;
  }

  getName():string {
    return this.gravityObject.name;
  }

  getWeight():number|string {
    if (this.shouldAvoid) {
      return 'avoid';
    } else {
      return this.weight;
    }
  }

  toString():string {
    // Future proofing, in case we'd like to support some custom string in the future, or if data is coming from a DB
    if(this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return this.getName();
    }
  }

  static classic():GravityObject {
    // this is not really an 'object', but we leverage the existing behaviour in GravityObject
    return new GravityObject('classic');
  }

  static subject():GravityObject {
    // this is not really an 'object', but we leverage the existing behaviour in GravityObject
    return new GravityObject('subject');
  }

  static object(gravityObject: GravityObject, weight?: number):AutoGravity {
    return new AutoGravity(gravityObject, weight);
  }

  avoid(): AutoGravity {
    this.shouldAvoid = true;
    return this;
  }
}
