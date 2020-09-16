import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";


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

  strength(val: number) {
    return this.addQualifier(new Qualifier('e', `blur_region:${val}`));
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
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param blurLevel
 */
function blurRegion(blurLevel?: number):BlueRegionEffectAction {
  return new BlueRegionEffectAction(blurLevel);
}

export default blurRegion;
