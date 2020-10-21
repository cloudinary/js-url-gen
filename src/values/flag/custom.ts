import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Allows custom flag
 */
function custom(value:string): Flag{
  return new Flag(value);
}

export default custom;
