import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Applies all chained transformations, until a transformation component that includes this flag, on the last added
 * overlay or underlay instead of applying on the containing image.
 */
function layerApply(): Flag{
  return new Flag('layer_apply');
}

export default layerApply;
