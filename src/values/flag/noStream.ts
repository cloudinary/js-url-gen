import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Don't stream a video that is currently being generated on the fly. Wait until the video is fully generated.
 * @return {Values.Flag.FlagQualifier}
 */
function noStream(): FlagQualifier {
  return new FlagQualifier('no_stream');
}

export {noStream};
