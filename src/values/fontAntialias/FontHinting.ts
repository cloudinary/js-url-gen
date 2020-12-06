/**
 * @memberOf Values
 * @namespace FontAntialias
 */

/**
 * @doc
 * @memberOf Values.FontAntialias
 */
function none(): string {
  return '';
}

/**
 * @doc
 * @memberOf Values.FontAntialias
 */
function gray(): string {
  return 'gray';
}

/**
 * @doc
 * @memberOf Values.FontAntialias
 */
function subPixel(): string {
  return 'subpixel';
}

/**
 * @doc
 * @memberOf Values.FontAntialias
 */
function fast(): string {
  return 'fast';
}

/**
 * @doc
 * @memberOf Values.FontAntialias
 */
function good(): string {
  return 'good';
}

/**
 * @doc
 * @memberOf Values.FontAntialias
 */
function best(): string {
  return 'best';
}

const FontAntialias = { gray, subPixel, best, fast, none, good };

export {
  FontAntialias,
  gray,
  subPixel,
  best,
  fast,
  none,
  good
};
