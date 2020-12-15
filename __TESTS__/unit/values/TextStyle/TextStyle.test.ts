import {TextStyle} from "../../../../src/values/textStyle";
import {FontStyle} from "../../../../src/values/fontStyle";
import {FontAntialias} from "../../../../src/values/FontAntialias";
import {FontWeight} from "../../../../src/values/fontWeight";
import {FontHinting} from "../../../../src/values/fontHinting";
import {TextDecoration} from "../../../../src/values/textDecoration";
import {TextAlignment} from "../../../../src/values/textAlignment";

describe('Text Style tests', () => {
  it('Create a new instance', () => {
    const res = new TextStyle()
      .fontFamily('arial')
      .fontSize(50)
      .toString();
    expect(res).toBe('arial_50');
  });

  it('Create a new with italic', () => {
    const res = new TextStyle()
      .fontFamily('arial')
      .fontSize(50)
      .fontStyle(FontStyle.italic())
      .toString();
    expect(res).toBe('arial_50_italic');
  });

  it('Create a new with all options', () => {
    const res = new TextStyle()
      .fontFamily('arial')
      .fontSize(50)
      .letterSpacing(10)
      .lineSpacing(20)
      .fontAntialias(FontAntialias.good())
      .fontWeight(FontWeight.bold())
      .fontHinting(FontHinting.full())
      .textDecoration(TextDecoration.strikethrough())
      .textAlignment(TextAlignment.justify())
      .stroke()
      .fontStyle(FontStyle.italic())
      .toString();
    expect(res).toBe('arial_50_bold_italic_strikethrough_justify_stroke_letter_spacing_10_line_spacing_20_letter_spacing_good_hinting_full');
  });

  it('Ensure normal is not included in the URL(this is the default)', () => {
    const res = new TextStyle()
      .fontFamily('arial')
      .fontSize(50)
      .fontWeight(FontWeight.normal())
      .textDecoration(TextDecoration.normal())
      .fontStyle(FontStyle.normal())
      .toString();
    expect(res).toBe('arial_50');
  });
});
