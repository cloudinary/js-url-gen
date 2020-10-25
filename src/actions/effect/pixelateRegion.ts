import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @description Pixelates the region of the image specified by x, y, width and height.
 * @class PixelateRegionEffectAction
 * @augments Action
 */
class PixelateRegionEffectAction extends Action {
  constructor() {
    super();
    this.addQualifier(new Qualifier('e', 'pixelate_region'));
  }

  /**
   * @description The width of each pixelation square in pixels. (Range: 1 to 200, Server default: 5)
   * @param {number} val
   */
  pixelWidth(val: number) {
    return this.addQualifier(new Qualifier('e', `pixelate_region:${val}`));
  }

  /**
   * @description 	The x position in pixels.
   * @param {number} x
   * @return {this}
   */
  x(x:number | string) {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description 	The y position in pixels.
   * @param {number} y
   * @return {this}
   */
  y(y:number | string) {
    return this.addQualifier(new Qualifier('y', y));
  }

  /**
   * @description 	The width of the region in pixels.
   * @param {number} width
   * @return {this}
   */
  width(width:number) {
    return this.addQualifier(new Qualifier('w', width));
  }

  /**
   * @description 	The width of the region in pixels.
   * @param {number} height
   * @return {this}
   */
  height(height:number) {
    return this.addQualifier(new Qualifier('h', height));
  }
}

/**
 * @description Pixelates the region of the image specified by x, y, width and height.
 * @memberOf Actions.Effect
 * @return {PixelateRegionEffectAction}
 */
function pixelateRegion():PixelateRegionEffectAction {
  return new PixelateRegionEffectAction();
}

export default pixelateRegion;
