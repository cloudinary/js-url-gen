/**
 * @description Defines transformations for delivering your assets without changing the visual or audio experience for the end user.
 * @memberOf Actions
 * @namespace Delivery
 */

import format from "./format";
import dpr from "./dpr";
import quality from "./quality";
import density from "./density";
import defaultImage from "./defaultImage";
import colorSpace from "./colorSpace";
import colorSpaceFromICC from "./colorSpaceFromICC";

class Delivery {
  static format = format;
  static dpr = dpr;
  static density = density;
  static defaultImage = defaultImage;
  static colorSpace = colorSpace;
  static colorSpaceFromICC = colorSpaceFromICC;
}

export {Delivery, format, dpr, quality, density, defaultImage, colorSpace, colorSpaceFromICC};

