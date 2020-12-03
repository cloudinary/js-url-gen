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

  /**
   * @description Image format djvu.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static djvu():Format { return new Format('djvu'); }

  /**
   * @description Image format ps.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static ps():Format { return new Format('ps'); }

  /**
   * @description Image format ept.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static ept():Format { return new Format('ept'); }

  /**
   * @description Image format eps3.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static eps3():Format { return new Format('eps3'); }

  /**
   * @description Image format fxb.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static fxb():Format { return new Format('fxb'); }

  /**
   * @description Image format gltf.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static gltf():Format { return new Format('gltf'); }

  /**
   * @description Image format heif.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static heif():Format { return new Format('heif'); }

  /**
   * @description Image format indd.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static indd():Format { return new Format('indd'); }

  /**
   * @description Image format jpe.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static jpe():Format { return new Format('jpe'); }

  /**
   * @description Image format jpeg.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static jpeg():Format { return new Format('jpeg'); }

  /**
   * @description Image format jxr.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static jxr():Format { return new Format('jxr'); }

  /**
   * @description Image format hdp.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static hdp():Format { return new Format('hdp'); }

  /**
   * @description Image format spd.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static spd():Format { return new Format('spd'); }

  /**
   * @description Image format arw.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static arw():Format { return new Format('arw'); }

  /**
   * @description Image format cr2.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static cr2():Format { return new Format('cr2'); }

  /**
   * @description Image format tga.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static tga():Format { return new Format('tga'); }

  /**
   * @description Image format tif.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static tif():Format { return new Format('tif'); }

  /**
   * @description Image format avif.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static avif():Format { return new Format('avif'); }

  /**
   * @description Image format 3g2.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static video3g2():Format { return new Format('3g2'); }

  /**
   * @description Image format 3gp.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static video3gp():Format { return new Format('3gp'); }

  /**
   * @description Image format avi.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoAvi():Format { return new Format('avi'); }

  /**
   * @description Image format flv.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoFlv():Format { return new Format('flv'); }

  /**
   * @description Image format m3u8.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoM3u8():Format { return new Format('m3u8'); }

  /**
   * @description Image format ts.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoTs():Format { return new Format('ts'); }

  /**
   * @description Image format mov.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMov():Format { return new Format('mov'); }

  /**
   * @description Image format mkv.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMkv():Format { return new Format('mkv'); }

  /**
   * @description Image format mp4.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMp4():Format { return new Format('mp4'); }

  /**
   * @description Image format mpeg.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMpeg():Format { return new Format('mpeg'); }

  /**
   * @description Image format mpd.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMpd():Format { return new Format('mpd'); }

  /**
   * @description Image format mxf.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMxf():Format { return new Format('mxf'); }

  /**
   * @description Image format ogv.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoOgv():Format { return new Format('ogv'); }

  /**
   * @description Image format webm.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoWebm():Format { return new Format('webm'); }

  /**
   * @description Image format wmv.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoWmv():Format { return new Format('wmv'); }

  /**
   * @description Image format m2ts.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoM2ts():Format { return new Format('m2ts'); }

  /**
   * @description Image format mts.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static videoMts():Format { return new Format('mts'); }

  /**
   * @description Image format aac.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioAac():Format { return new Format('aac'); }

  /**
   * @description Image format aiff.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioAiff():Format { return new Format('aiff'); }

  /**
   * @description Image format amr.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioAmr():Format { return new Format('amr'); }

  /**
   * @description Image format flac.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioFlac():Format { return new Format('flac'); }

  /**
   * @description Image format m4a.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioM4a():Format { return new Format('m4a'); }

  /**
   * @description Image format mp3.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioMp3():Format { return new Format('mp3'); }

  /**
   * @description Image format ogg.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioOgg():Format { return new Format('ogg'); }

  /**
   * @description Image format opus.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioOpus():Format { return new Format('opus'); }

  /**
   * @description Image format wav.
   * @memberOf Values.Format
   * @return {Values.Format}
   */
  static audioWav():Format { return new Format('wav'); }
}


const {jp2, ai, auto, bmp, eps, flif, gif, heic, ico, jpc, jpg, pdf, png, psd, svg, tiff, wdp, webp, arw, audioAac, audioAiff, audioAmr, audioFlac, audioM4a, audioMp3, audioOgg, audioOpus, audioWav, avif, cr2, djvu, eps3, ept, fxb, gltf, hdp, heif, indd, jpe, jpeg, jxr, ps, spd, tga, tif, video3g2, video3gp, videoAvi, videoFlv, videoM2ts, videoM3u8, videoMkv, videoMov, videoMp4, videoMpd, videoMpeg, videoMts, videoMxf, videoOgv, videoTs, videoWebm, videoWmv} = Format;
export {jp2, ai, auto, bmp, eps, flif, gif, heic, ico, jpc, jpg, pdf, png, psd, svg, tiff, wdp, webp, arw, audioAac, audioAiff, audioAmr, audioFlac, audioM4a, audioMp3, audioOgg, audioOpus, audioWav, avif, cr2, djvu, eps3, ept, fxb, gltf, hdp, heif, indd, jpe, jpeg, jxr, ps, spd, tga, tif, video3g2, video3gp, videoAvi, videoFlv, videoM2ts, videoM3u8, videoMkv, videoMov, videoMp4, videoMpd, videoMpeg, videoMts, videoMxf, videoOgv, videoTs, videoWebm, videoWmv, Format};
