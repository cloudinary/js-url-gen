import ParamValue from "../../parameters/ParamValue";

export class FormatType extends ParamValue{
  readonly name:string;
  constructor(name:string) {
    super(name);
    this.name = name;
  }
}

export class LossyFormatType extends FormatType {
  lossy() {
    return this.addValue('fl_lossy').setDelimiter(',');
  }
}

class ProgressiveFormatType extends FormatType {
  progressive() {
    return this.addValue('fl_progressive').setDelimiter(',');
  }
}
export const PNG = new FormatType('png');
export const GIF = new LossyFormatType('gif');
export const AUTO = new LossyFormatType('auto');
export const JPG = new ProgressiveFormatType('jpg');
export const BMP = new FormatType('bmp');
export const ICO = new FormatType('ico');
export const PDF = new FormatType('pdf');
export const TIFF = new FormatType('tiff');
export const EPS = new FormatType('eps');
export const JPC = new FormatType('jpc');
export const JP2 = new FormatType('jp2');
export const PSD = new FormatType('psd');
export const WEBP = new FormatType('webp');
export const SVG = new FormatType('svg');
export const WEBM = new FormatType('webm');
export const WDP = new FormatType('wdp');
export const AI = new FormatType('ai');
export const FLIF = new FormatType('flif');
export const HEIC = new FormatType('heic');
