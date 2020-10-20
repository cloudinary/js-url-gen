import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Don't stream a video that is currently being generated on the fly. Wait until the video is fully generated.
 * @return {Flag}
 */
function noStream(): Flag{
  return new Flag('no_stream');
}

export default noStream;
