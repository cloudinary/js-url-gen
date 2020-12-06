import {AnimatedFormatQualifierValue} from "./AnimatedFormatQualifierValue";

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


const AnimatedFormat = {auto, gif, webp};
export {auto, gif, webp, AnimatedFormat};


