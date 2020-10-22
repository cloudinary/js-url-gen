import TransformableImage from "../../../src/transformation/TransformableImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {TextSource} from "../../../src/values/sources/sourceTypes/TextSource";
import {text} from "../../../src/values/sources/Sources";
import {BlendModeQualifier} from "../../../src/values/blendMode/BlendModeQualifier";
import {imageLayer} from "../../../src/actions/overlay/Overlay";
import {PositionQualifier} from "../../../src/values/position/PositionQualifier";
import {center} from "../../../src/values/position/Position";
import FontWeight from "../../../src/values/fontWeight/FontWeight";
import FontStyle from "../../../src/values/fontStyle/FontStyle";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

/**
 * @private
 * @param source
 * @param position
 * @param blendMode
 */
function getImageWithOverlay(source: TextSource, position?: PositionQualifier, blendMode?: BlendModeQualifier) {
  return new TransformableImage('sample')
    .setConfig(CONFIG_INSTANCE)
    .overlay(
      imageLayer(source, position, blendMode)
    );
}

describe('Tests for overlay texts', () => {
  it('Adds an Text Overlay', () => {
    const url = getImageWithOverlay(text('Testing')).toURL();
    expect(url).toContain('l_text:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family', () => {
    const url = getImageWithOverlay(
      text('Testing')
        .fontFamily('arial')
    ).toURL();
    expect(url).toContain('l_text:arial:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size', () => {
    const url = getImageWithOverlay(
      text('Testing')
        .fontFamily('arial')
        .fontSize(20)
    ).toURL();
    expect(url).toContain('l_text:arial_20:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size and weight', () => {
    const url = getImageWithOverlay(
      text('Testing')
        .fontFamily('arial')
        .fontSize(20)
        .fontWeight(FontWeight.bold())
    ).toURL();
    expect(url).toContain('l_text:arial_20_bold:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size and weight and color', () => {
    const url = getImageWithOverlay(
      text('Testing')
        .fontFamily('arial')
        .fontSize(20)
        .fontWeight('bold')
        .color('red')
    ).toURL();
    expect(url).toContain('l_text:arial_20_bold:Testing,co_red/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size and weight and color', () => {
    const url = getImageWithOverlay(
      text('Testing')
        .fontFamily('arial')
        .fontSize(20)
        .fontWeight('bold')
        .fontStyle(FontStyle.italic())
        .color('red')
    ).toURL();
    expect(url).toContain('l_text:arial_20_bold_italic:Testing,co_red/fl_layer_apply/sample');
  });

  it('Adds an Text Overlay with position', () => {
    const url = getImageWithOverlay(
      text('Testing'),
      center()
        .x(50)
        .y(100)
    ).toURL();
    expect(url).toContain('l_text:Testing/fl_layer_apply,g_center,x_50,y_100/sample');
  });
});
