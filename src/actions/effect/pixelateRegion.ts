import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";


class PixelateRegionEffectAction extends Action {
  constructor() {
    super();
    this.addQualifier(new Qualifier('e', 'pixelate_region'));
  }

  pixelWidth(val: number) {
    return this.addQualifier(new Qualifier('e', `pixelate_region:${val}`));
  }

  x(x:number) {
    return this.addQualifier(new Qualifier('x', x));
  }

  y(y:number) {
    return this.addQualifier(new Qualifier('y', y));
  }

  width(width:number) {
    return this.addQualifier(new Qualifier('w', width));
  }

  height(height:number) {
    return this.addQualifier(new Qualifier('h', height));
  }
}

/**
 * @description Pixelates the region of the image specified by x, y, width and height.
 * @memberOf Actions.Effect
 */
function pixelateRegion():PixelateRegionEffectAction {
  return new PixelateRegionEffectAction();
}

export default pixelateRegion;
