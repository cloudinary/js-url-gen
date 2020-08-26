import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Adds ICC color space metadata to the image, even when the original image doesn't contain any ICC data.
 */
function forceIcc(): FlagAction{
  return new FlagAction('force_icc');
}

export default forceIcc;
