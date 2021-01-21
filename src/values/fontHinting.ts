/**
 * @doc
 * @memberOf Values
 * @namespace FontHinting
 */


/**
 * @memberOf Values.FontHinting
 */
function none(): string {
  return '';
}

/**
 * @memberOf Values.FontHinting
 */
function slight(): string {
  return 'slight';
}

/**
 * @memberOf Values.FontHinting
 */
function medium(): string {
  return 'medium';
}

/**
 * @memberOf Values.FontHinting
 */
function full(): string {
  return 'full';
}

const FontHinting = {full, none, medium, slight};

export {
  FontHinting,
  full,
  none,
  medium,
  slight
};
