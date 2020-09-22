import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Returns metadata of the input asset and of the transformed output asset in JSON instead of the
 * transformed image.
 */
function getInfo(): Flag{
  return new Flag('getinfo');
}

export default getInfo;
