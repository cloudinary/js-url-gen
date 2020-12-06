import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Keeps the copyright related fields when stripping meta-data.
 * @return {Values.Flag.FlagQualifier}
 */
function keepAttribution(): FlagQualifier {
  return new FlagQualifier('keep_attribution');
}

export {keepAttribution};
