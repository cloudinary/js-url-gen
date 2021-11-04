import {ICompassGravityModel, IGravityModel, IOcrGravityModel} from "./createGravityModel.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {focusOn} from "../../qualifiers/gravity.js";
import {ocr} from "../../qualifiers/focusOn.js";

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
 * Create gravity instance from given gravity model
 * @param gravityModel
 */
function createGravityFromModel(gravityModel: IGravityModel): IGravity{
  if (isCompassGravityModel(gravityModel)){
    return gravityModel.compass;
  }

  if (isOcrGravityModel(gravityModel)) {
    return focusOn(ocr());
  }
}

export {createGravityFromModel};