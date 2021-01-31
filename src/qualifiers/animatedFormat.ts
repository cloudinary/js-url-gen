import {AnimatedFormatQualifierValue} from "./animatedFormat/AnimatedFormatQualifierValue";

/**
 * @description Contains methods to specify the animated format
 * @namespace AnimatedFormat
 * @memberOf Qualifiers
 */


/**
 * @description Automatically sets the animated format
 * @memberOf Qualifiers.AnimatedFormat
 * @return {Qualifiers.AnimatedFormatQualifierValue}
 */
function auto(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('auto');
}


/**
 * @memberOf Qualifiers.AnimatedFormat
 * @return {Qualifiers.AnimatedFormatQualifierValue}
 */
function gif(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('gif');
}

/**
 * @memberOf Qualifiers.AnimatedFormat
 * @return {Qualifiers.AnimatedFormatQualifierValue}
 */
function webp(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('webp');
}

/**
 * @memberOf Qualifiers.AnimatedFormat
 * @return {Qualifiers.AnimatedFormatQualifierValue}
 */
function png(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('png');
}


const AnimatedFormat = {auto, gif, webp, png};
export {auto, gif, webp, png, AnimatedFormat};


