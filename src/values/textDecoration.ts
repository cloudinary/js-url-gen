/**
 * @doc
 * @memberOf Values
 * @namespace TextDecoration
 */

/**
 * @memberOf Values.TextDecoration
 */
function normal(): string {
  return '';
}

/**
 * @memberOf Values.TextDecoration
 */
function underline(): string {
  return 'underline';
}

/**
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
