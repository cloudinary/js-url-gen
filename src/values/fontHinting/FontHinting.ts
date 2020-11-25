/**
 * @memberOf Values
 * @namespace FontHinting
 */
class FontHinting {
  /**
   * @doc
   * @memberOf Values.FontHinting
   */
  static none(): string {
    return '';
  }

  /**
   * @doc
   * @memberOf Values.FontHinting
   */
  static slight(): string {
    return 'slight';
  }

  /**
   * @doc
   * @memberOf Values.FontHinting
   */
  static medium(): string {
    return 'medium';
  }

  /**
   * @doc
   * @memberOf Values.FontHinting
   */
  static full(): string {
    return 'full';
  }
}

const {full, none, medium, slight} = FontHinting;

export {
  FontHinting,
  full,
  none,
  medium,
  slight
};
