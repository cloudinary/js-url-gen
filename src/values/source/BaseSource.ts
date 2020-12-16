import {Transformation} from "../../transformation/Transformation";


abstract class BaseSource {
  protected _transformation:Transformation;

  getTransformation(): Transformation {
    return this._transformation;
  }

  abstract getOpenSourceString(): string
}

export {BaseSource};
