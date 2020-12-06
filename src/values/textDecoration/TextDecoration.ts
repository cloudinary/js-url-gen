/**
 * @memberOf Values
 * @namespace TextDecoration
 */

/**
 * @doc
 * @memberOf Values.TextDecoration
 */
function normal(): string {
  return '';
}

/**
 * @doc
 * @memberOf Values.TextDecoration
 */
function underline(): string {
  return 'underline';
}

/**
 * @doc
 * @memberOf Values.TextDecoration
 */
function strikethrough(): string {
  return 'strikethrough';
}

const TextDecoration = {normal, underline, strikethrough};

export {
  TextDecoration,
  normal,
  underline,
  strikethrough
};
