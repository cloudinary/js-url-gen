import {normal as normalFontWeight} from "./fontWeight";
import {normal as normalFontStyle} from "./fontStyle";
import {normal as normalTextDecoration} from "./textDecoration";
import {serializeCloudinaryCharacters} from "../internal/utils/serializeCloudinaryCharacters";

/**
 * @summary qualifier
 * @description Specifies how to style your layered text, controls the font, font size, line spacing and more.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace TextStyle
 */
class TextStyle {
  private _lineSpacing: number;
  private _letterSpacing: number;
  private _fontAntialias: string;
  private _fontFamily: string;
  private _fontSize: number | string;
  private _fontWeight: string;
  private _fontStyle: string;
  private _textDecoration: string;
  private _textAlignment: string;
  private _stroke: boolean;
  private _fontHinting: string;

  constructor(fontFamily: string, fontSize: string | number) {
    this._fontFamily = fontFamily;
    this._fontSize = fontSize;
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

  fontSize(fontSize: number | string): this {
    this._fontSize = fontSize ;
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
      `${serializeCloudinaryCharacters(this._fontFamily)}_${this._fontSize}`,
      this._fontWeight !== normalFontWeight() && this._fontWeight,
      this._fontStyle !== normalFontStyle() && this._fontStyle,
      this._textDecoration !== normalTextDecoration() && this._textDecoration,
      this._textAlignment,
      this._stroke && 'stroke',
      this._letterSpacing && `letter_spacing_${this._letterSpacing}`,
      this._lineSpacing && `line_spacing_${this._lineSpacing}`,
      this._fontAntialias && `letter_spacing_${this._fontAntialias}`,
      this._fontHinting && `hinting_${this._fontHinting}`
    ].filter( (a) => a).join('_');
  }
}

export {TextStyle};
