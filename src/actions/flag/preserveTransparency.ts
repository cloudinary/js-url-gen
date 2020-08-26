import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 */
function preserveTransparency(): FlagAction{
  return new FlagAction('preserve_transparency');
}

export default preserveTransparency;
