import Action from "../Action";
import ParamValue from "../../parameters/ParamValue";
import Param from "../../parameters/Param";

class Outline extends Action {
  private modeType: string;
  private outlineParam: string | number;

  constructor(width?: number, blur?: number) {
    super();
    this.outlineParam = this.prepareOutlineParam(width, blur);
  }

  /**
   * @description How to apply the outline effect which can be one of the following values: inner, inner_fill,
   * outer, fill.
   * Default value: inner and outer.
   * @memberOf Actions.Effect
   * @param {string} modeType  The type of outline effect. Use the constants defined in Outline.
   */
  mode(modeType?: string): this{
    this.modeType = modeType;
    return this;
  }

  prepareOutlineParam(width?: number, blur?: number): number|string {
    return blur ? `${width}:${blur}` : width;
  }

  protected prepareParam() : void {
    let paramValue;
    if(this.outlineParam && this.modeType){
      paramValue = new ParamValue(['outline', `${this.modeType}`, `${this.outlineParam}`]).setDelimiter(':');
    } else {
      if (this.outlineParam){
        paramValue = new ParamValue(['outline', `${this.outlineParam}`]).setDelimiter(':');
      } else {
        paramValue = new ParamValue(['outline', `${this.modeType}`]).setDelimiter(':');
      }
    }
    this.addParam(new Param('e', paramValue));
  }
}

/**
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} width The thickness of the outline in pixels. (Range: 1 to 100, Server default: 5)
 * @param {number} blur  The level of blur of the outline. (Range: 0 to 2000, Server default: 0)
 */
function outline(width?: number, blur?: number): Outline {
  return new Outline(width, blur);
}

export default outline;
