import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Keeps all meta-data.
 */
function keepIptc(): Flag{
  return new Flag('keep_iptc');
}

export default keepIptc;
