import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Don't stream a video that is currently being generated on the fly. Wait until the video is fully generated.
 */
function noStream(): Flag{
  return new Flag('no_stream');
}

export default noStream;
