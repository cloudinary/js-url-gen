/**
 * @memberOf Values
 * @namespace TextAlignment
 */
class TextAlignment {
  /**
   * @doc
   * @memberOf Values.TextAlignment
   */
  static left(): string {
    return 'left';
  }

  /**
   * @doc
   * @memberOf Values.TextAlignment
   */
  static right(): string {
    return 'right';
  }

  /**
   * @doc
   * @memberOf Values.TextAlignment
   */
  static center(): string {
    return 'center';
  }

  /**
   * @doc
   * @memberOf Values.TextAlignment
   */
  static start(): string {
    return 'start';
  }

  /**
   * @doc
   * @memberOf Values.TextAlignment
   */
  static end(): string {
    return 'end';
  }

  /**
   * @doc
   * @memberOf Values.TextAlignment
   */
  static justify(): string {
    return 'justify';
  }
}

const {left, right, center, end, justify, start} = TextAlignment;

export {
  TextAlignment,
  left,
  right,
  center,
  end,
  justify,
  start
};
