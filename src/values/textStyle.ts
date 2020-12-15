import {normal as normalFontWeight} from "./fontWeight";
import {normal as normalFontStyle} from "./fontStyle";
import {normal as normalTextDecoration} from "./textDecoration";

/**
 * @doc
 * @memberOf Values
 * @namespace TextStyle
 */
class TextStyle {
  private _lineSpacing: number;
  private _letterSpacing: number;
  private _fontAntialias: string;
  private _fontFamily: string;
  private _fontSize: number;
  private _fontWeight: string;
  private _fontStyle: string;
  private _textDecoration: string;
  private _textAlignment: string;
  private _stroke: boolean;
  private _fontHinting: string;

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

  fontSize(fontSize: number): this {
    this._fontSize = fontSize;
    return this;
  }

  fontWeight(fontWeight: string): this {
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

  stroke(): this {
    this._stroke = true;
    return this;
  }

  toString(): string {
    return [
      `${this._fontFamily}_${this._fontSize}`,
      this._fontStyle !== normalFontStyle() && this._fontStyle,
      this._textAlignment,
      this._textDecoration !== normalTextDecoration() && this._textDecoration,
      this._fontWeight !== normalFontWeight() && this._fontWeight,
      this._stroke && 'stroke',
      this._fontHinting && `hinting_${this._fontHinting}`,
      this._lineSpacing && `line_spacing_${this._lineSpacing}`,
      this._letterSpacing && `letter_spacing_${this._letterSpacing}`,
      this._fontAntialias && `letter_spacing_${this._fontAntialias}`
    ].filter( (a) => a).join('_');
  }
}

export {TextStyle};
