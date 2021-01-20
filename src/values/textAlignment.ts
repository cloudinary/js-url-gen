/**
 * @doc
 * @memberOf Values
 * @namespace TextAlignment
 */

/**
 * @memberOf Values.TextAlignment
 */
function left(): string {
  return 'left';
}

/**
 * @memberOf Values.TextAlignment
 */
function right(): string {
  return 'right';
}

/**
 * @memberOf Values.TextAlignment
 */
function center(): string {
  return 'center';
}

/**
 * @memberOf Values.TextAlignment
 */
function start(): string {
  return 'start';
}

/**
 * @memberOf Values.TextAlignment
 */
function end(): string {
  return 'end';
}

/**
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
