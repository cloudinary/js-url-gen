import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Deliver an HLS adaptive bitrate streaming file as HLS v3 instead of the default version (HLS v4).
 * Delivering in this format requires a private CDN configuration.
 * @return {Values.Flag.FlagQualifier}
 */
function hlsv3(): FlagQualifier {
  return new FlagQualifier('hlsv3');
}

export {hlsv3};
