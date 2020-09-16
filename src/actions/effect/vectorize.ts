import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";


class VectorizeEffectAction extends Action {
  private _numOfColors: number | string;
  private _detailsLevel: number | string;
  private _despeckleLevel: number | string;
  private _cornersLevel: number | string;
  private _paths: number | string;
  constructor() {
    super();
  }

  /**
   * @description The number of colors. (Range: 2 to 30, Server default: 10)
   * @param num
   */
  numOfColors(num: number) {
    this._numOfColors = num;
    return this;
  }

  /**
   * @description The level of detail. Specify either a percentage of the original image (Range: 0.0 to 1.0) or an absolute number of pixels (Range: 0 to 1000). (Server default: 300)
   * @param num
   */
  detailsLevel(num: number) {
    this._detailsLevel = num;
    return this;
  }

  /**
   * @description The size of speckles to suppress. Specify either a percentage of the original image (Range: 0.0 to 1.0) or an absolute number of pixels (Range: 0 to 100, Server default: 2)
   * @param num
   */
  despeckleLevel(num: number) {
    this._despeckleLevel = num;
    return this;
  }

  /**
   * @description The corner threshold. Specify 100 for no smoothing (polygon corners), 0 for completely smooth corners. (Range: 0 to 100, Default: 25)
   * @param num
   */
  cornersLevel(num: number) {
    this._cornersLevel = num;
    return this;
  }

  /**
   * @description The optimization value. Specify 100 for least optimization and the largest file. (Range: 0 to 100, Server default: 100).
   * @param num
   */
  paths(num: number) {
    this._paths = num;
    return this;
  }

  protected prepareQualifiers() {
    let str = 'vectorize';
    if (this._numOfColors) {
      str += `:${new QualifierValue(`colors:${this._numOfColors}`).toString()}`;
    }

    if (this._detailsLevel) {
      str += `:${new QualifierValue(`detail:${this._detailsLevel}`).toString()}`;
    }

    if (this._despeckleLevel) {
      str += `:${new QualifierValue(`despeckle:${this._despeckleLevel}`).toString()}`;
    }

    if (this._paths) {
      str += `:${new QualifierValue(`paths:${this._paths}`).toString()}`;
    }

    if (this._cornersLevel) {
      str += `:${new QualifierValue(`corners:${this._cornersLevel}`).toString()}`;
    }

    this.addQualifier(new Qualifier('e', str));
  }
}

/**
 * @description
 * Vectorizes the image.
 * Notes:
 * To deliver the image as a vector image, make sure to change the format (or URL extension) to a vector format, such as SVG.</br>
 * However, you can also deliver in a raster format if you just want to get the 'vectorized' graphic effect.</br>
 * Large images are scaled down to 1000 pixels in the largest dimension before vectorization.
 *
 * @memberOf Actions.Effect
 */
function vectorize():VectorizeEffectAction {
  return new VectorizeEffectAction();
}

export default vectorize;
