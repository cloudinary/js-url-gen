import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @doc
 * @memberOf Values
 * @namespace Format
 * @extends {QualifierValue}
 * @example
 * transformation.delivery(Delivery.format(Format.jpg()))
 */
class Format extends QualifierValue {
  constructor(val: string) {
    super(val);
  }

  /**
   * @description Image format heic.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static heic():Format { return new Format('heic'); }

  /**
   * @description Image format flif.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static flif():Format { return new Format('flif'); }

  /**
   * @description Image format ai.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static ai():Format { return new Format('ai'); }

  /**
   * @description Image format wdp.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static wdp():Format { return new Format('wdp'); }

  /**
   * @description Image format webm.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static webm():Format { return new Format('webm'); }

  /**
   * @description Image format svg.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static svg():Format { return new Format('svg'); }

  /**
   * @description Image format webp.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static webp():Format { return new Format('webp'); }

  /**
   * @description Image format psd.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static psd():Format { return new Format('psd'); }

  /**
   * @description Image format jp2.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static jp2():Format { return new Format('jp2'); }

  /**
   * @description Image format jpc.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static jpc():Format { return new Format('jpc'); }

  /**
   * @description Image format eps.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static eps():Format { return new Format('eps'); }

  /**
   * @description Image format tiff.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static tiff():Format { return new Format('tiff'); }

  /**
   * @description Image format pdf.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static pdf():Format { return new Format('pdf'); }

  /**
   * @description Image format ico.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static ico():Format { return new Format('ico'); }

  /**
   * @description Image format bmp.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static bmp():Format { return new Format('bmp'); }

  /**
   * @description Image format png.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static png():Format { return new Format('png'); }

  /**
   * @description Image format gif.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static gif():Format { return new Format('gif'); }

  /**
   * @description Image format auto.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static auto():Format { return new Format('auto'); }

  /**
   * @description Image format jpg.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static jpg():Format { return new Format('jpg'); }
}


const {jp2, ai, auto, bmp, eps, flif, gif, heic, ico, jpc, jpg, pdf, png, psd, svg, tiff, wdp, webm, webp} = Format;
export {jp2, ai, auto, bmp, eps, flif, gif, heic, ico, jpc, jpg, pdf, png, psd, svg, tiff, wdp, webm, webp, Format};
