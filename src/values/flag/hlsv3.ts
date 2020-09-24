import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Deliver an HLS adaptive bitrate streaming file as HLS v3 instead of the default version (HLS v4).
 * Delivering in this format requires a private CDN configuration.
 * @return {Flag}
 */
function hlsv3(): Flag{
  return new Flag('hlsv3');
}

export default hlsv3;
