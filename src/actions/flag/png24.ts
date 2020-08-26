import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Generate PNG images in the png24 format.
 */
function png24(): FlagAction{
  return new FlagAction('png24');
}

export default png24;
