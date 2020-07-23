/**
 * Returns RGB or Color
 * @param color
 */
export function prepareColor(color: string){
  return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
}
