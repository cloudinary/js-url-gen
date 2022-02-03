import {
  IAutoGravityModel,
  IAutoGravityObjectModel,
  IFocusOnGravityModel,
  IGravityModel
} from "./createGravityModel.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {autoGravity, focusOn} from "../../qualifiers/gravity.js";
import {FocusOnValue, ocr} from "../../qualifiers/focusOn.js";
import {AutoGravity} from "../../qualifiers/gravity/autoGravity/AutoGravity.js";
import {AutoFocus} from "../../qualifiers/autoFocus.js";
import {FocusOnGravity} from "../../qualifiers/gravity/focusOnGravity/FocusOnGravity.js";
import {CompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";
import {CompassQualifier} from "../../qualifiers/gravity/qualifiers/compass/CompassQualifier.js";
import {isCompassGravityModel, isOcrGravityModel, isAutoGravityModel} from "../typeGuards/gravityGuards.js";


/**
 * Create AutoFocus from IAutoGravityObjectModel
 * @param autoGravityObjectModel
 */
function createAutoFocusFromModel(autoGravityObjectModel: IAutoGravityObjectModel): AutoFocus {
  const {object, weight, avoid} = autoGravityObjectModel;
  const autoFocus = new AutoFocus(new FocusOnValue(object));
  (weight || weight === 0) && autoFocus.weight(weight);
  avoid && autoFocus.avoid();

  return autoFocus;
}

/**
 * Create AutoGravity from IAutoGravityModel
 * @param gravityModel
 */
function createAutoGravityFromModel(gravityModel: IAutoGravityModel): AutoGravity {
  const autoFocusModel = gravityModel.autoFocus || [];
  const autoFocus = autoFocusModel.map(createAutoFocusFromModel);

  return autoGravity().autoFocus(...autoFocus);
}

/**
 * Create FocusOnGravity from given IFocusOnGravityModel
 * @param gravityModel
 */
function createFocusOnGravityFromModel(gravityModel: IFocusOnGravityModel): FocusOnGravity {
  const focusOnObjects = (gravityModel.focusOnObjects || []).map((str) => new FocusOnValue(str));
  const result = focusOn(...focusOnObjects);

  if (gravityModel.fallbackGravity) {
    const autoGravity = createAutoGravityFromModel(gravityModel.fallbackGravity);
    result.fallbackGravity(autoGravity);
  }

  return result;
}

/**
 * Create gravity instance from given gravity model
 * @param gravityModel
 */
function createGravityFromModel(gravityModel: IGravityModel): IGravity {
  if (isCompassGravityModel(gravityModel)) {
    return new CompassGravity(new CompassQualifier(gravityModel.compass));
  }

  if (isOcrGravityModel(gravityModel)) {
    return focusOn(ocr());
  }

  if (isAutoGravityModel(gravityModel)) {
    return createAutoGravityFromModel(gravityModel);
  }

  return createFocusOnGravityFromModel(gravityModel);
}

export {createGravityFromModel};
