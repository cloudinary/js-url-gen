import {AnimatedFormatQualifierValue} from "./animatedFormat/AnimatedFormatQualifierValue";

/**
 * @description Contains methods to specify the animated format
 * @namespace AnimatedFormat
 * @memberOf Values
 */


/**
 * @description Automatically sets the animated format
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function auto(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('auto');
}


/**
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function gif(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('gif');
}

/**
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function webp(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('webp');
}

/**
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function png(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('png');
}


const AnimatedFormat = {auto, gif, webp, png};
export {auto, gif, webp, png, AnimatedFormat};


