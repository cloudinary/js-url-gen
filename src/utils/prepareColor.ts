/**
 * Returns RGB or Color
 * @private
 * @param color
 */
export function prepareColor(color: string): string{
  return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
}
