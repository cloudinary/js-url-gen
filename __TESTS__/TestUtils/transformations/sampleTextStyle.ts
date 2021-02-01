import {TextStyle} from "../../../src/qualifiers/textStyle";
import {FontAntialias} from "../../../src/qualifiers/FontAntialias";
import {FontWeight} from "../../../src/qualifiers/fontWeight";
import {FontHinting} from "../../../src/qualifiers/fontHinting";
import {TextDecoration} from "../../../src/qualifiers/textDecoration";
import {TextAlignment} from "../../../src/qualifiers/textAlignment";
import {FontStyle} from "../../../src/qualifiers/fontStyle";

/**
 * Creates a TextStyle instance used for testing
 */
function sampleTextStyle(): TextStyle {
  return new TextStyle('arial', 50)
    .letterSpacing(10)
    .lineSpacing(20)
    .fontAntialias(FontAntialias.good())
    .fontWeight(FontWeight.bold())
    .fontHinting(FontHinting.full())
    .textDecoration(TextDecoration.strikethrough())
    .textAlignment(TextAlignment.justify())
    .stroke()
    .fontStyle(FontStyle.italic()
    );
}


export {sampleTextStyle};
