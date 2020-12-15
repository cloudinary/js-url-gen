/**
 * @description Defines transformations for delivering your assets without changing the visual or audio experience for the end user.
 * @memberOf Actions
 * @namespace Delivery
 */

import format from "./delivery/format";
import dpr from "./delivery/dpr";
import quality from "./delivery/quality";
import density from "./delivery/density";
import defaultImage from "./delivery/defaultImage";
import colorSpace from "./delivery/colorSpace";
import colorSpaceFromICC from "./delivery/colorSpaceFromICC";

const Delivery = {
  format: format,
  dpr: dpr,
  density: density,
  defaultImage: defaultImage,
  colorSpace: colorSpace,
  colorSpaceFromICC: colorSpaceFromICC,
  quality
};

export {Delivery, format, dpr, quality, density, defaultImage, colorSpace, colorSpaceFromICC};

