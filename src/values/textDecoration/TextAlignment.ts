/**
 * @memberOf Values
 * @namespace TextDecoration
 */
class TextDecoration {
  /**
   * @doc
   * @memberOf Values.TextDecoration
   */
  static normal(): string {
    return '';
  }

  /**
   * @doc
   * @memberOf Values.TextDecoration
   */
  static underline(): string {
    return 'underline';
  }

  /**
   * @doc
   * @memberOf Values.TextDecoration
   */
  static strikethrough(): string {
    return 'strikethrough';
  }
}

const {normal, underline, strikethrough} = TextDecoration;

export {
  TextDecoration,
  normal,
  underline,
  strikethrough
};
