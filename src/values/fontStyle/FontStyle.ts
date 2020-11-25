/**
 * @memberOf Values
 * @namespace FontStyle
 */
class FontStyle {
  /**
   * @@doc
   * @memberOf Values.FontStyle
   */
  static normal(): string {
    return 'normal';
  }

  /**
   * @@doc
   * @memberOf Values.FontStyle
   */
  static italic(): string {
    return 'italic';
  }
}

const {normal, italic} = FontStyle;

export {
  FontStyle,
  italic,
  normal
};

