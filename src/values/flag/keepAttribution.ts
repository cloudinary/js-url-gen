import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Keeps the copyright related fields when stripping meta-data.
 * @return {Flag}
 */
function keepAttribution(): Flag{
  return new Flag('keep_attribution');
}

export default keepAttribution;
