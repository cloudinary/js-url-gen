import {SystemColors} from "../../values/color";


/**
 * Returns RGB or Color
 * @private
 * @param color
 */
export function prepareColor(color: SystemColors): SystemColors {
  return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
}
