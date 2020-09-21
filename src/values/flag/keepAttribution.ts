import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Keeps the copyright related fields when stripping meta-data.
 */
function keepAttribution(): Flag{
  return new Flag('keep_attribution');
}

export default keepAttribution;
