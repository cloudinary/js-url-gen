import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Keeps all meta-data.
 * @return {Values.Flag.FlagQualifier}
 */
function keepIptc(): FlagQualifier {
  return new FlagQualifier('keep_iptc');
}

export {keepIptc};
