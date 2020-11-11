import * as Flag from '../flag/Flag';
import Action from "../../actions/Action";

/**
 * @description A list of all most commonly used aspect ratios. including an ‘ignore aspect ratio’ option which direct the BE to not stick to the original aspect ratio.
 * This is used in the context of resize actions
 * @namespace AspectRatio
 * @memberOf Values
 */
class IgnoreAspectRatioQualifier extends Action {
  constructor() {
    super();
    this.addFlag(Flag.ignoreAspectRatio());
  }
}

/**
 * @description 1 by 1 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR1X1(): string {
  return '1:1';
}

/**
 * @description 5 by 4 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR5X4(): string {
  return '5:4';
}

/**
 * @description 4 by 3 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR4X3(): string {
  return '4:3';
}

/**
 * @description 3 by 2 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR3X2(): string {
  return '3:2';
}

/**
 * @description 16 by 9 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR16X9(): string {
  return '16:9';
}

/**
 * @description 3 by 1 aspect ration.
 * @memberOf Values.AspectRatio
 * @return {string}
 */
function AR3X1(): string {
  return '3:1';
}

/**
 * @description ignores aspect ratio.
 * @memberOf Values.AspectRatio
 * @return {IgnoreAspectRatioQualifier}
 */
function IgnoreInitialAspectRatio(): IgnoreAspectRatioQualifier {
  return new IgnoreAspectRatioQualifier();
}

export {AR1X1, AR5X4, AR3X1, AR3X2, AR4X3, AR16X9, IgnoreInitialAspectRatio};
