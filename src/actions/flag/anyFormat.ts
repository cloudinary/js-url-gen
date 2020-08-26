import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description When used together with automatic quality (q_auto):
 * allow switching to PNG8 encoding if the quality algorithm decides that it's more efficient.
 */
function anyFormat(): FlagAction{
  return new FlagAction('any_format');
}

export default anyFormat;
