import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Keeps all meta-data.
 */
function keepIptc(): FlagAction{
  return new FlagAction('keep_iptc');
}

export default keepIptc;
