import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Generate PNG images in the PNG8 format.
 */
function png8(): FlagAction{
  return new FlagAction('png8');
}

export default png8;
