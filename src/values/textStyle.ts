import {Action} from "../internal/Action";


/**
 * @memberOf Values
 * @namespace TextStyle
 */
class TextStyle extends Action {
  private _lineSpacing: number;
  private _letterSpacing: number;
  private _fontAntialias : string;
  private _fontFamily: string;
  private _fontSize: number;
  private _fontWeight: number;
  private _fontStyle: string;
  private _textDecoration: string;
  private _textAlignment: string;
  private _stroke: number;
  private _fontHinting: string;

  constructor() {
    super();
    this.setDelimiter('_');
  }

  lineSpacing(spacing: number): this {
    this._lineSpacing = spacing;
    return this;
  }

  letterSpacing(spacing: number): this {
    this._letterSpacing = spacing;
    return this;
  }

  fontAntialias(antiAlias: string): this {
    this._fontAntialias = antiAlias;
    return this;
  }

  fontFamily(fontFamilyName: string): this {
    this._fontFamily = fontFamilyName;
    return this;
  }

  fontSize(fontSize:number): this {
    this._fontSize = fontSize;
    return this;
  }

  fontWeight(fontWeight: number): this {
    this._fontWeight = fontWeight;
    return this;
  }

  fontStyle(fontStyle: string): this {
    this._fontStyle = fontStyle;
    return this;
  }

  fontHinting(fontHinting: string): this {
    this._fontHinting = fontHinting;
    return this;
  }

  textDecoration(textDecoration: string): this {
    this._textDecoration = textDecoration;
    return this;
  }

  textAlignment(textAlignment: string): this {
    this._textAlignment = textAlignment;
    return this;
  }
  stroke(stroke: number): this {
    this._stroke = stroke;
    return this;
  }
}



//
// // const TextAlignment = {left, right, center, end, justify, start};
//
// export {
//   TextAlignment,
//   left,
//   right,
//   center,
//   end,
//   justify,
//   start
// };
