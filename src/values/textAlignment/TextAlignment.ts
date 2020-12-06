/**
 * @memberOf Values
 * @namespace TextAlignment
 */

/**
 * @doc
 * @memberOf Values.TextAlignment
 */
function left(): string {
  return 'left';
}

/**
 * @doc
 * @memberOf Values.TextAlignment
 */
function right(): string {
  return 'right';
}

/**
 * @doc
 * @memberOf Values.TextAlignment
 */
function center(): string {
  return 'center';
}

/**
 * @doc
 * @memberOf Values.TextAlignment
 */
function start(): string {
  return 'start';
}

/**
 * @doc
 * @memberOf Values.TextAlignment
 */
function end(): string {
  return 'end';
}

/**
 * @doc
 * @memberOf Values.TextAlignment
 */
function justify(): string {
  return 'justify';
}

const TextAlignment = {left, right, center, end, justify, start};

export {
  TextAlignment,
  left,
  right,
  center,
  end,
  justify,
  start
};
