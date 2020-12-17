import {TextStyle} from "../../../src/values/textStyle";
import {FontAntialias} from "../../../src/values/FontAntialias";
import {FontWeight} from "../../../src/values/fontWeight";
import {FontHinting} from "../../../src/values/fontHinting";
import {TextDecoration} from "../../../src/values/textDecoration";
import {TextAlignment} from "../../../src/values/textAlignment";
import {FontStyle} from "../../../src/values/fontStyle";

/**
 * Creates a TextStyle instance used for testing
 */
function sampleTextStyle() {
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
