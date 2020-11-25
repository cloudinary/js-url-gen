/**
 * @memberOf Values
 * @namespace FontWeight
 */
class FontWeight {
  /**
   * @@doc
   * @memberOf Values.FontWeight
   */
  static thin(): string {
    return 'thin';
  }

  /**
   * @@doc
   * @memberOf Values.FontWeight
   */
  static light(): string {
    return 'light';
  }

  /**
   * @@doc
   * @memberOf Values.FontWeight
   */
  static normal(): string {
    return 'normal';
  }

  /**
   * @@doc
   * @memberOf Values.FontWeight
   */
  static bold(): string {
    return 'bold';
  }
}

const {bold, light, normal, thin} = FontWeight;
export {
  FontWeight,
  bold,
  light,
  normal,
  thin
};
