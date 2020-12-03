import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Generate PNG images in the png32 format.
 * @return {Values.Flag.FlagQualifier}
 */
function png32(): FlagQualifier {
  return new FlagQualifier('png32');
}

export {png32};
