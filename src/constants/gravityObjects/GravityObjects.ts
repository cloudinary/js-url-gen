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
  private weight:number;
  constructor(gravityObject:GravityObject, weight?: number) {
    this.weight = weight;
    this.gravityObject = gravityObject;
  }

  toString():string {
    if(this.weight) {
      const avoidStr = this.weight <=-100 ? 'avoid' : this.weight;

      return `${this.gravityObject.name}_${avoidStr}`;
    } else {
      return this.gravityObject.name;
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
    this.weight = -100;
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



