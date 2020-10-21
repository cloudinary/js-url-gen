import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {prepareColor} from "../../utils/prepareColor";

/**
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @class Outline
 * @augments Action
 */
export class Outline extends Action {
  private _mode: string;
  private _width: number | string;
  private _blurLevel : number | string

  constructor() {
    super();
  }

  /**
   * @description
   * How to apply the outline effect which can be one of the following values:
   * inner, inner_fill, outer, fill.
   * @param {string} mode  The type of outline effect. Use the constants defined in Outline.
   * @return {this}
   */
  mode(mode?: string): this{
    this._mode = mode;
    return this;
  }

  /**
   * The thickness of the outline in pixels. (Range: 1 to 100, Server default: 5)
   * @param {number} width
   * @return {this}
   */
  width(width?:number | string): this {
    this._width = width;
    return this;
  }

  /**
   * @description
   * The level of blur of the outline.
   * Range: 0 to 2000, Server default: 0
   * @param {number | string} lvl
   * @return {this}
   */
  blurLevel(lvl?: number | string): this {
    this._blurLevel = lvl;
    return this;
  }

  /**
   * @param {string | Values.Color} color One of the SDK Color values, string, or rgba: '#fff'
   * @return {this}
   */
  color(color:string): this {
    return this.addQualifier(new Qualifier('co', prepareColor(color)));
  }

  protected prepareQualifiers() : void {
    this.addQualifier(new Qualifier(
      'e',
      new QualifierValue(['outline', this._mode, this._width, this._blurLevel]).setDelimiter(':'))
    );
  }
}

/**
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @memberOf Actions.Effect
 * @return {Outline}
 */
function outline(): Outline {
  return new Outline();
}

export default outline;
