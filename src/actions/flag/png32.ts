import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Generate PNG images in the png32 format.
 */
function png32(): FlagAction{
  return new FlagAction('png32');
}

export default png32;
