import Action from "../Action";
import QualifierValue from "../../qualifiers/QualifierValue";
import Qualifier from "../../qualifiers/Qualifier";

class AssistColorBlindEffectAction extends Action {
  private hasStripes:boolean;

  xray() {
    // If stripes are defined, we don't do anything with xray
    if (!this.hasStripes) {
      return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', 'xray']).setDelimiter(':')));
    }
  }

  stripes(num:number | string) {
    this.hasStripes = true;
    return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', num]).setDelimiter(':')));
  }
}

/**
 * @description
 * Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.</br>
 * You can replace colors using the xRay() method of the \Cloudinary\Transformation\AssistColorBlind class.
 * @memberOf Actions.Effect
 */
function assistColorBlind():AssistColorBlindEffectAction {
  return new AssistColorBlindEffectAction();
}

export default assistColorBlind;
