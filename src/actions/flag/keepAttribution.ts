import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Keeps the copyright related fields when stripping meta-data.
 */
function keepAttribution(): FlagAction{
  return new FlagAction('keep_attribution');
}

export default keepAttribution;
