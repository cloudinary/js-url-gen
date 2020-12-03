import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Generate PNG images in the PNG8 format.
 * @return {Values.Flag.FlagQualifier}
 */
function png8(): FlagQualifier {
  return new FlagQualifier('png8');
}

export {png8};
