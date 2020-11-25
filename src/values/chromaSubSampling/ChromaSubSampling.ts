/**
 * @memberOf Values
 * @namespace ChromeSubSampling
 */
class ChromaSubSampling {
  /**
   * @@doc
   * @memberOf Values.ChromeSubSampling
   */
  static chroma444():number { return 444; }

  /**
   * * @@doc
   * @memberOf Values.ChromeSubSampling
   */
  static chroma420():number { return 420; }
}

const {chroma420, chroma444} = ChromaSubSampling

export {
  ChromaSubSampling,
  chroma420,
  chroma444
};

