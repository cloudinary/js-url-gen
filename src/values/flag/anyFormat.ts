import {FlagQualifier} from "./FlagQualifier";

/**
 * @memberOf Values.Flag
 * @description When used together with automatic quality (q_auto):
 * allow switching to PNG8 encoding if the quality algorithm decides that it's more efficient.
 * @return {Values.Flag.FlagQualifier}
 */
function anyFormat(): FlagQualifier{
  return new FlagQualifier('any_format');
}

export {anyFormat};
