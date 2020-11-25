/**
 * @memberOf Values
 * @namespace FontAntialias
 */
class FontAntialias {
  /**
   * @doc
   * @memberOf Values.FontAntialias
   */
  static none(): string {
    return '';
  }

  /**
   * @doc
   * @memberOf Values.FontAntialias
   */
  static gray(): string {
    return 'gray';
  }

  /**
   * @doc
   * @memberOf Values.FontAntialias
   */
  static subPixel(): string {
    return 'subpixel';
  }

  /**
   * @doc
   * @memberOf Values.FontAntialias
   */
  static fast(): string {
    return 'fast';
  }

  /**
   * @doc
   * @memberOf Values.FontAntialias
   */
  static good(): string {
    return 'good';
  }

  /**
   * @doc
   * @memberOf Values.FontAntialias
   */
  static best(): string {
    return 'best';
  }
}

const {gray, subPixel, best, fast, none, good} = FontAntialias;

export {
  FontAntialias,
  gray,
  subPixel,
  best,
  fast,
  none,
  good
};
