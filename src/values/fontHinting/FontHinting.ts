/**
 * @memberOf Values
 * @namespace FontHinting
 */


/**
 * @doc
 * @memberOf Values.FontHinting
 */
function none(): string {
  return '';
}

/**
 * @doc
 * @memberOf Values.FontHinting
 */
function slight(): string {
  return 'slight';
}

/**
 * @doc
 * @memberOf Values.FontHinting
 */
function medium(): string {
  return 'medium';
}

/**
 * @doc
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
