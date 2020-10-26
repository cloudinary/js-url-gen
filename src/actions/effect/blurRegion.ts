import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @class BlueRegionEffectAction
 * @augments Action
 * @description Applies a shadow filter to the asset, use the class methods to adjust the shadow
 */
class BlueRegionEffectAction extends Action {
  constructor(val:number) {
    super();
    // at run time, we don't know what the user will pass
    if(typeof val === 'number') {
      this.addQualifier(new Qualifier('e', `blur_region:${val}`));
    } else {
      this.addQualifier(new Qualifier('e', `blur_region`));
    }
  }

  /**
   * @description The strength of the blur. (Range: 1 to 2000, Server default: 100).
   * @param {number} val
   */
  strength(val: number) {
    return this.addQualifier(new Qualifier('e', `blur_region:${val}`));
  }

  /**
   * @description The x position in pixels.
   * @param {number} x
   */
  x(x:number | string) {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description The y position in pixels.
   * @param {number} y
   */
  y(y:number | string) {
    return this.addQualifier(new Qualifier('y', y));
  }

  /**
   * @description The width of the region in pixels.
   * @param {number} width
   */
  width(width:number) {
    return this.addQualifier(new Qualifier('w', width));
  }

  /**
   * @description The height of the region in pixels.
   * @param {number} height
   */
  height(height:number) {
    return this.addQualifier(new Qualifier('h', height));
  }
}

/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 100).
 * @param blurLevel
 */
function blurRegion(blurLevel?: number):BlueRegionEffectAction {
  return new BlueRegionEffectAction(blurLevel);
}

export default blurRegion;
