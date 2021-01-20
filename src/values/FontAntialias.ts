/**
 * @doc
 * @memberOf Values
 * @namespace FontAntialias
 */

/**
 * @memberOf Values.FontAntialias
 */
function none(): string {
  return '';
}

/**
 * @memberOf Values.FontAntialias
 */
function gray(): string {
  return 'gray';
}

/**
 * @memberOf Values.FontAntialias
 */
function subPixel(): string {
  return 'subpixel';
}

/**
 * @memberOf Values.FontAntialias
 */
function fast(): string {
  return 'fast';
}

/**
 * @memberOf Values.FontAntialias
 */
function good(): string {
  return 'good';
}

/**
 * @memberOf Values.FontAntialias
 */
function best(): string {
  return 'best';
}

const FontAntialias = {gray, subPixel, best, fast, none, good};

export {
  FontAntialias,
  gray,
  subPixel,
  best,
  fast,
  none,
  good
};
