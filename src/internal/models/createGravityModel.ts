import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {CompassGravity, ICompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";
import {AutoGravity} from "../../qualifiers/gravity/autoGravity/AutoGravity.js";
import {AutoFocus} from "../../qualifiers/autoFocus.js";
import {FocusOnGravity} from "../../qualifiers/gravity/focusOnGravity/FocusOnGravity.js";
import {autoGravity} from "../../qualifiers/gravity.js";
import {FocusOnValue} from "../../qualifiers/focusOn.js";
import {isCompassGravity, isAutoGravity, isIAutoGravityString, isOcrGravity} from "../typeGuards/gravityGuards.js";

export type IAutoGravityString = 'auto' | 'auto:';

export interface IGravityModel {
  gravityType: string;
  [x: string]: unknown;
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
  fallbackGravity?: IAutoGravityModel
}

/**
 * Get the value of given gravity
 * @param gravity
 */
export function getGravityValue(gravity: unknown): string {
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
 * Creates an ocr gravity model
 */
function createOcrGravityModel(): IOcrGravityModel {
  return {
    gravityType: 'ocr'
  };
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
function createAutoGravityModel(gravity: IAutoGravityString | AutoGravity): IAutoGravityModel {
  let values;
  const gravityQualifier = gravity === 'auto' ? new AutoGravity() : gravity as AutoGravity;

  if (`${gravity}`.startsWith('auto:')) {
    values = `${gravity}`.split(':').filter((v) => v !== 'auto');
  } else {
    values = gravityQualifier.qualifierValue.values.filter((v) => v !== 'auto');
  }

  const autoFocus = values.map(createIAutoFocusObject);

  return {
    gravityType: 'auto',
    autoFocus
  };
}

/**
 * Create IFocusOnGravityModel from FocusOnGravity
 * @param gravity
 */
function createFocusOnGravityModel(gravity: FocusOnGravity): IFocusOnGravityModel {
  const hasAutoGravity = `${gravity}`.split(':').includes('auto');
  const values = gravity.qualifierValue.values;
  const focusOnValues = hasAutoGravity ? values.slice(0, values.length - 1) : values;

  const result: IFocusOnGravityModel = {
    gravityType: 'object',
    focusOnObjects: focusOnValues.map((v) => `${v}`)
  };

  if (hasAutoGravity) {
    // Remove the first 'auto' value by slicing it, because it's added by autoGravity()
    const autoFocusObjects = values[values.length - 1].values.slice(1);
    const autoGravityInstance = autoGravity().autoFocus(...autoFocusObjects);
    result.fallbackGravity = createAutoGravityModel(autoGravityInstance);
  }

  return result;
}

/**
 * Creates a FocusOnGravity from given string
 * @param gravity
 */
function createFocusOnGravity(gravity: string): FocusOnGravity {
  const values = gravity.split(':');
  const focusOnValues = values.map((g) => new FocusOnValue(g));
  return new FocusOnGravity(focusOnValues);
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

  if (isIAutoGravityString(gravity) || isAutoGravity(gravity)) {
    return createAutoGravityModel(gravity);
  }

  return createFocusOnGravityModel(
    typeof gravity === 'string' ? createFocusOnGravity(gravity) : gravity as FocusOnGravity
  );
}
