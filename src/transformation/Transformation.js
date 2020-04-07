console.log('Side effect');

/**
 * @description - Placeholder
 */
class Transformation {
  constructor() {
    console.log('Transformation! - within constructor');
  }

  /**
   * @return {Transformation}
   */
  chain() {
    return this;
  }

  /**
   * @return {Transformation}
   */
  addAction() {
    return this;
  }
}

export default Transformation;
