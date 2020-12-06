import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Applies all chained transformations, until a transformation component that includes this flag, on the last added
 * overlay or underlay instead of applying on the containing image.
 * @return {Values.Flag.FlagQualifier}
 */
function layerApply(): FlagQualifier {
  return new FlagQualifier('layer_apply');
}

export {layerApply};
