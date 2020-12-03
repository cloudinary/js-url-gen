import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Splices the video stipulated as an overlay on to the end of the container video instead of adding it as an
 * overlay.
 * @return {Values.Flag.FlagQualifier}
 */
function splice(): FlagQualifier {
  return new FlagQualifier('splice');
}

export {splice};
