import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Generate PNG images in the png24 format.
 * @return {Values.Flag.FlagQualifier}
 */
function png24(): FlagQualifier {
  return new FlagQualifier('png24');
}

export {png24};
