import {AnimatedFormatQualifierValue} from "./animatedFormat/AnimatedFormatQualifierValue";

/**
 * @@doc
 * @namespace AnimatedFormat
 * @memberOf Values
 */


/**
 * @@doc
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function auto(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('auto');
}


/**
 * @@doc
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function gif(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('gif');
}

/**
 * @@doc
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function webp(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('webp');
}

/**
 * @@doc
 * @memberOf Values.AnimatedFormat
 * @return {Values.AnimatedFormatQualifierValue}
 */
function png(): AnimatedFormatQualifierValue {
  return new AnimatedFormatQualifierValue('png');
}


const AnimatedFormat = {auto, gif, webp, png};
export {auto, gif, webp, png, AnimatedFormat};


