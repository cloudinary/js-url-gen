/**
 * @@doc
 * @memberOf Values
 * @namespace Progressive
 */
import {FlagQualifier} from "./flag/FlagQualifier";



class ProgressiveQualifier extends FlagQualifier {
  constructor(mode?: string) {
    super('progressive', mode);
  }
}


/**
 * @@doc
 * @memberOf Values.Progressive
 */
function none(): FlagQualifier {
  return new ProgressiveQualifier('none');
}

/**
 * @@doc
 * @memberOf Values.Progressive
 */
function semi(): FlagQualifier {
  return new ProgressiveQualifier('semi');
}

/**
 * @@doc
 * @memberOf Values.Progressive
 */
function steep(): FlagQualifier {
  return new ProgressiveQualifier('steep');
}

/**
 * @@doc
 * @memberOf Values.Progressive
 */
function progressive(): FlagQualifier {
  return new ProgressiveQualifier();
}



const Progressive = {
  semi,
  none,
  steep,
  progressive,
  ProgressiveQualifier
};

export {
  Progressive,
  semi,
  none,
  steep,
  progressive,
  ProgressiveQualifier
};


