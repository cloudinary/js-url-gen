import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Keeps all meta-data.
 */
function keepIptc(): Flag{
  return new Flag('keep_iptc');
}

export default keepIptc;
