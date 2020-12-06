import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Allows custom flag
 * @return {Values.Flag.FlagQualifier}
 */
function custom(value:string): FlagQualifier {
  return new FlagQualifier(value);
}

export default custom;
