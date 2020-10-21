import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @class AssistColorBlindEffectAction
 * @augments Action
 * @description Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.
 * You can replace colors using the xray() method.
 */
export class AssistColorBlindEffectAction extends Action {
  private hasStripes:boolean;

  constructor() {
    super();
    this.addQualifier(new Qualifier('e', new QualifierValue('assist_colorblind')));
  }

  /**
   * @description Replaces problematic colors with colors that are easier to differentiate.
   * @return {this}
   */
  xray(): this{
    // If stripes are defined, we don't do anything with xray
    if (!this.hasStripes) {
      return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', 'xray']).setDelimiter(':')));
    } else {
      return this;
    }
  }

  /**
   * @description Applies stripes of the specified intensity to help people with common color blind conditions to differentiate between colors that are similar for them.
   * @param {number | string} num The intensity of the stripes. (Range: 1 to 100, Server default: 10)
   * @return {this}
   */
  stripes(num:number | string): this {
    this.hasStripes = true;
    return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', num]).setDelimiter(':')));
  }
}

/**
 * @description
 * Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.</br>
 * You can replace colors using the xRay() method of the \Cloudinary\Transformation\AssistColorBlind class.
 * @memberOf Actions.Effect
 * @return {AssistColorBlindEffectAction}
 */
function assistColorBlind():AssistColorBlindEffectAction {
  return new AssistColorBlindEffectAction();
}

export default assistColorBlind;
