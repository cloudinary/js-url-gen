import {CustomRegion} from "./CustomRegion";
import {NamedRegion} from "./NamedRegion";

/**
 * @memberOf Values.Region
 * @return {Values.Region.CustomRegion}
 */
function custom(): CustomRegion {
  return new CustomRegion();
}

/**
 * @memberOf Values.Region
 * @return {Values.Region.NamedRegion}
 */
function faces(): NamedRegion {
  return new NamedRegion('faces');
}

/**
 * @memberOf Values.Region
 * @return {Values.Region.NamedRegion}
 */
function ocr(): NamedRegion {
  return new NamedRegion('ocr_text');
}

/**
 * @doc
 * @namespace Region
 * @memberOf Values
 */
const Region = { ocr, faces, custom };
export {Region, ocr, faces, custom};
