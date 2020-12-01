import {CustomRegion} from "./CustomRegion";
import {NamedRegion} from "./NamedRegion";


/**
 * @doc
 * @namespace Region
 * @memberOf Values
 */
class Region {
  private regionType: string;

  constructor(regionType: string) {
    this.regionType = regionType;
  }

  /**
   * @memberOf Values.Region
   * @return {CustomRegion}
   */
  static custom(): CustomRegion {
    return new CustomRegion();
  }

  /**
   * @memberOf Values.Region
   * @return {NamedRegion}
   */
  static faces(): NamedRegion {
    return new NamedRegion('faces');
  }

  /**
   * @memberOf Values.Region
   * @return {NamedRegion}
   */
  static ocr(): NamedRegion {
    return new NamedRegion('ocr_text');
  }
}


const {ocr, faces, custom} = Region;
export {Region};
