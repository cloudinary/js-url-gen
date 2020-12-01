import Qualifier from "../../../../qualifier/Qualifier";
import Action from "../../../Action";
import {toFloatAsString} from "../../../../utils/toFloatAsString";
import relativeFlag from '../../../../values/flag/relative';
import regionRelativeFlag from '../../../../values/flag/regionRelative';

/**
 * @description Defines a resize using width and height.
 * @class ResizeSimpleAction
 * @augments Action
 */
class ResizeSimpleAction extends Action {
  /**
   * @param {string} cropType
   * @param {number | string} cropWidth The required width of a transformed asset.
   * @param {number | string} cropHeight The required height of a transformed asset.
   */
  constructor(cropType: string, cropWidth: number|string, cropHeight?: number|string) {
    super();
    if(cropWidth) {
      this.addQualifier(new Qualifier('w', cropWidth));
    }
    if(cropHeight) {
      this.addQualifier(new Qualifier('h', cropHeight));
    }
    this.addQualifier(new Qualifier('c', cropType));
  }

  /**
   * @description Sets the height of the resize
   * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  height(x:number|string):this {
    return this.addQualifier(new Qualifier('h', x));
  }

  /**
   * @description Sets the width of the resize
   * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  width(x:number|string):this {
    return this.addQualifier(new Qualifier('w', x));
  }

  /**
   * @description Sets the aspect ratio of the asset.
   * For a list of supported types see {@link Values.AspectRatio |
    * AspectRatio values}
   * @param {number|string} ratio The new aspect ratio, specified as a percentage or ratio.
   * @return {this}
   */
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }

  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
   * @return {this}
   */
  relative(): this {
    return this.addFlag(relativeFlag());
  }

  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
   * @return {this}
   */
  regionRelative(): this {
    return this.addFlag(regionRelativeFlag());
  }
}


export default ResizeSimpleAction;
