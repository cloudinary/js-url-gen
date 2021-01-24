/**
 * @description Contains functions to select the mode when using a progressive format.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/transformation_reference#fl_progressive | Progressive modes}
 * @memberOf Values
 * @namespace Progressive
 * @example yourAsset.delivery(Delivery.format(Format.jpg()).progressive(Progressive.steep()))
 */
import {FlagQualifier} from "./flag/FlagQualifier";



class ProgressiveQualifier extends FlagQualifier {
  constructor(mode?: string) {
    super('progressive', mode);
  }
}


/**
 * @memberOf Values.Progressive
 */
function none(): FlagQualifier {
  return new ProgressiveQualifier('none');
}

/**
 * @memberOf Values.Progressive
 */
function semi(): FlagQualifier {
  return new ProgressiveQualifier('semi');
}

/**
 * @memberOf Values.Progressive
 */
function steep(): FlagQualifier {
  return new ProgressiveQualifier('steep');
}

/**
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


