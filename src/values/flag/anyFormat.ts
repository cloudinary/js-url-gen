import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description When used together with automatic quality (q_auto):
 * allow switching to PNG8 encoding if the quality algorithm decides that it's more efficient.
 * @return {Flag}
 */
function anyFormat(): Flag{
  return new Flag('any_format');
}

export default anyFormat;
