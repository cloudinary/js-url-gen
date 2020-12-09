import * as Flag from '../flag/Flag';
import {AspectRatioQualifierValue} from "./AspectRatioQualifierValue";
import {FlagQualifier} from "../flag/FlagQualifier";


/**
 * @description 1 by 1 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR1X1(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('1:1');
}

/**
 * @description 5 by 4 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR5X4(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('5:4');
}

/**
 * @description 4 by 3 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR4X3(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('4:3');
}

/**
 * @description 3 by 2 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR3X2(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('3:2');
}

/**
 * @description 16 by 9 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR16X9(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('16:9');
}

/**
 * @description 3 by 1 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR3X1(): AspectRatioQualifierValue {
  return new AspectRatioQualifierValue('3:1');
}

/**
 * @description ignores aspect ratio.
 * @memberOf Values.AspectRatio
 * @return {IgnoreAspectRatioQualifier}
 */
function ignoreAspectRatio(): FlagQualifier {
  return Flag.ignoreAspectRatio();
}


/**
 * @description A list of all most commonly used aspect ratios. including an ‘ignore aspect ratio’ option which direct the BE to not stick to the original aspect ratio.
 * This is used in the context of resize actions
 * @namespace AspectRatio
 * @memberOf Values
 */
class AspectRatio {
  static AR1X1 = AR1X1;
  static AR5X4 = AR5X4;
  static AR3X1 = AR3X1;
  static AR3X2 = AR3X2;
  static AR4X3 = AR4X3;
  static AR16X9 = AR16X9;
  static ignoreAspectRatio = ignoreAspectRatio;
}


export {AR1X1, AR5X4, AR3X1, AR3X2, AR4X3, AR16X9, ignoreAspectRatio, AspectRatio};
