import {Action} from "../../internal/Action.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {prepareColor} from "../../internal/utils/prepareColor.js";
import {SystemColors} from "../../qualifiers/color.js";
import {OutlineModeType} from "../../types/types.js";
import {IEffectOutlineModel} from "../../internal/models/IEffectActionModel.js";

/**
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class EffectOutline extends Action {
  private _mode: string;
  private _width: number | string;
  private _blurLevel : number | string;
  protected _actionModel: IEffectOutlineModel = {};

  constructor() {
    super();
    this._actionModel.actionType = 'outline';
  }

  /**
   * @description
   * How to apply the outline effect which can be one of the following values:
   * inner, inner_fill, outer, fill.
   * @param {OutlineModeType|string} mode  The type of outline effect. Use the constants defined in Outline.
   * @return {this}
   */
  mode(mode?: OutlineModeType|string): this{
    this._actionModel.mode = mode;
    this._mode = mode;
    return this;
  }

  /**
   * The thickness of the outline in pixels. (Range: 1 to 100, Server default: 5)
   * @param {number} width
   * @return {this}
   */
  width(width?:number | string): this {
    this._actionModel.width = width as number;
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
    this._actionModel.blurLevel = lvl as number;
    this._blurLevel = lvl;
    return this;
  }

  /**
   * @param {string | Qualifiers.Color} color One of the SDK Color values, string, or rgba: '#fff'
   * @return {this}
   */
  color(color:SystemColors): this {
    this._actionModel.color = color;
    return this.addQualifier(new Qualifier('co', prepareColor(color)));
  }

  protected prepareQualifiers() : void {
    this.addQualifier(new Qualifier(
      'e',
      new QualifierValue(['outline', this._mode, this._width, this._blurLevel]).setDelimiter(':'))
    );
  }
}



export {EffectOutline};
