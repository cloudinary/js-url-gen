export class GravityObject {
  readonly name:string;
  constructor(name?:string) {
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}

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


export const BIRD = new GravityObject('bird');
export const DOG = new GravityObject('dog');
export const CAT = new GravityObject('cat');
export const MICROWAVE = new GravityObject('microwave');
export const REFRIGERATOR = new GravityObject('refrigerator');
export const BOTTLE = new GravityObject('bottle');
export const SINK = new GravityObject('sink');
export const SKATEBOARD = new GravityObject('skateboard');
export const PERSON = new GravityObject('person');



