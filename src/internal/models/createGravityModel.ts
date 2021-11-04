import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {CompassGravity, ICompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";
import {AutoGravity} from "../../qualifiers/gravity/autoGravity/AutoGravity.js";
import {AutoFocus} from "../../qualifiers/autoFocus.js";

export interface IGravityModel {
  gravityType?: string;
}

export interface ICompassGravityModel extends IGravityModel {
  compass: ICompassGravity
}

export interface IOcrGravityModel extends IGravityModel {
}

export interface IAutoGravityObjectModel {
  object: string, // 'cat' | 'dog' etc
  weight?: number,
  avoid?: boolean
}

export interface IAutoGravityModel extends IGravityModel {
  autoFocus: IAutoGravityObjectModel[]
}

export interface IFocusOnGravityModel extends IGravityModel {
  focusOnObjects: string[], // 'cat' | 'dog' etc
  fallbackGravity: IAutoGravityModel
}

/**
 * Validate that given val is an ICompassGravity
 * @param gravity
 */
function isCompassGravity(gravity: unknown): gravity is CompassGravity {
  //const gravityString = `${(typeof gravity === "string" ? gravity : gravity.qualifierValue)}`;
  const gravityValue = getGravityValue(gravity);
  return ['north', 'center', 'east', 'west', 'south', 'north_west', 'south_east', 'south_west', 'north_east'].includes(gravityValue);
}

/**
 * Get the value of given gravity
 * @param gravity
 */
function getGravityValue(gravity: unknown): string {
  return `${gravity}`.replace('g_', '');
}

/**
 * Creates a compassGravity model
 * @param gravity
 */
function createCompassGravityModel(gravity: CompassGravity): ICompassGravityModel {
  return {
    compass: getGravityValue(gravity) as ICompassGravity,
    gravityType: 'direction'
  };
}

/**
 * Validate that given gravity is an instance of ocr gravity
 * @param gravity
 */
function isOcrGravity(gravity: unknown): boolean {
  return getGravityValue(gravity) === 'ocr_text';
}

/**
 * Creates an ocr gravity model
 */
function createOcrGravityModel(): IOcrGravityModel {
  return {
    gravityType: 'ocr'
  };
}

/**
 * Validate that given gravity is an instance of AutoGravity
 * @param gravity
 */
function isAutoGravity(gravity: unknown): gravity is AutoGravity {
  return `${(gravity as AutoGravity).qualifierValue}`.split(':')[0] === 'auto';
}

/**
 * Create an instance of IAutoGravityObjectModel
 * @param gravity
 */
function createIAutoFocusObject(gravity: AutoFocus): IAutoGravityObjectModel {
  const gravityString = gravity.toString();
  const values = gravityString.split('_');
  const result: IAutoGravityObjectModel = {
    object: values[0]
  };

  if (values.length > 1) {
    if (values[1] === 'avoid') {
      result.avoid = true;
    } else {
      result.weight = +values[1];
    }
  }

  return result;
}

/**
 * Creates an auto gravity model from given AutoGravity
 * @param gravity
 */
function createAutoGravityModel(gravity: AutoGravity): IAutoGravityModel {
  const values = gravity.qualifierValue.values.filter((v) => v !== 'auto');
  const autoFocus = values.map(createIAutoFocusObject);

  return {
    autoFocus
  };
}

/**
 * Create a model of given gravity
 * @param gravity
 */
export function createGravityModel(gravity: IGravity): IGravityModel {
  if (isCompassGravity(gravity)) {
    return createCompassGravityModel(gravity);
  }

  if (isOcrGravity(gravity)) {
    return createOcrGravityModel();
  }

  if (isAutoGravity(gravity)) {
    return createAutoGravityModel(gravity);
  }
}
