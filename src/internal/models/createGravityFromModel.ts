import {
  IAutoGravityModel,
  IAutoGravityObjectModel,
  ICompassGravityModel, IFocusOnGravityModel,
  IGravityModel,
  IOcrGravityModel
} from "./createGravityModel.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {autoGravity, focusOn} from "../../qualifiers/gravity.js";
import {FocusOnValue, ocr} from "../../qualifiers/focusOn.js";
import {AutoGravity} from "../../qualifiers/gravity/autoGravity/AutoGravity.js";
import {AutoFocus} from "../../qualifiers/autoFocus.js";
import {FocusOnGravity} from "../../qualifiers/gravity/focusOnGravity/FocusOnGravity.js";

/**
 * Validates that gravityModel is an ICompassGravityModel
 * @param gravityModel
 */
function isCompassGravityModel(gravityModel: IGravityModel): gravityModel is ICompassGravityModel {
  return gravityModel.gravityType === 'direction';
}

/**
 * Validates that gravityModel is an IOcrGravityModel
 * @param gravityModel
 */
function isOcrGravityModel(gravityModel: IGravityModel): gravityModel is IOcrGravityModel {
  return gravityModel.gravityType === 'ocr';
}

/**
 * Validates that gravityModel is an IAutoGravityModel
 * @param gravityModel
 */
function isAutoGravityModel(gravityModel: IGravityModel): gravityModel is IAutoGravityModel {
  return gravityModel.gravityType === 'auto';
}

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
    return gravityModel.compass;
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