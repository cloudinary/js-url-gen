import {AspectRatioQualifierValue} from "./aspectRatio/AspectRatioQualifierValue";
import {ignoreInitialAspectRatio as ignoreInitialAspectRatioFlag} from "./flag";
import {FlagQualifier} from "./flag/FlagQualifier";


/**
 * @description 1 by 1 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function ar1X1(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('1:1');
}

/**
 * @description 5 by 4 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function ar5X4(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('5:4');
}

/**
 * @description 4 by 3 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function ar4X3(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('4:3');
}

/**
 * @description 3 by 2 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function ar3X2(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('3:2');
}

/**
 * @description 16 by 9 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function ar16X9(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('16:9');
}

/**
 * @description 3 by 1 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function ar3X1(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('3:1');
}

/**
 * @description ignores aspect ratio.
 * @memberOf Values.AspectRatio
 * @return {IgnoreAspectRatioQualifier}
 */
function ignoreInitialAspectRatio(): FlagQualifier {
  return ignoreInitialAspectRatioFlag();
}


/**
 * @description A list of all most commonly used aspect ratios. including an ‘ignore aspect ratio’ option which direct the BE to not stick to the original aspect ratio.
 * This is used in the context of resize actions
 * @namespace AspectRatio
 * @memberOf Values
 */
const AspectRatio = {
  ar1X1,
  ar5X4,
  ar3X1,
  ar3X2,
  ar4X3,
  ar16X9,
  ignoreInitialAspectRatio
};


export {ar1X1, ar5X4, ar3X1, ar3X2, ar4X3, ar16X9, ignoreInitialAspectRatio, AspectRatio};
