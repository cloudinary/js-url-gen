import {Source, textLayer} from "../../../src/actions/overlay/Overlay";
import TransformableImage from "../../../src/transformation/TransformableImage";
import {Position, center} from "../../../src/values/position/Position";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {TextSource} from "../../../src/actions/layers/Source";
import {BlendMode} from "../../../src/values/blendMode/BlendMode";
import {FontStyle, FontWeight} from "../../../src/values/fonts/Fonts";

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
function getImageWithOverlay(source: TextSource, position?: Position, blendMode?: BlendMode) {
  return new TransformableImage('sample')
    .setConfig(CONFIG_INSTANCE)
    .overlay(
      textLayer(source, position, blendMode)
    );
}

describe('Tests for overlay texts', () => {
  it('Adds an Text Overlay', () => {
    const url = getImageWithOverlay(Source.text('Testing')).toURL();
    expect(url).toContain('l_text:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family', () => {
    const url = getImageWithOverlay(
      Source.text('Testing')
        .fontFamily('arial')
    ).toURL();
    expect(url).toContain('l_text:arial:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size', () => {
    const url = getImageWithOverlay(
      Source.text('Testing')
        .fontFamily('arial')
        .fontSize(20)
    ).toURL();
    expect(url).toContain('l_text:arial_20:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size and weight', () => {
    const url = getImageWithOverlay(
      Source.text('Testing')
        .fontFamily('arial')
        .fontSize(20)
        .fontWeight(FontWeight.BOLD)
    ).toURL();
    expect(url).toContain('l_text:arial_20_bold:Testing/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size and weight and color', () => {
    const url = getImageWithOverlay(
      Source.text('Testing')
        .fontFamily('arial')
        .fontSize(20)
        .fontWeight('bold')
        .color('red')
    ).toURL();
    expect(url).toContain('l_text:arial_20_bold:Testing,co_red/fl_layer_apply/sample');
  });

  it('Adds a Text Overlay with font family and size and weight and color', () => {
    const url = getImageWithOverlay(
      Source.text('Testing')
        .fontFamily('arial')
        .fontSize(20)
        .fontWeight('bold')
        .fontStyle(FontStyle.ITALIC)
        .color('red')
    ).toURL();
    expect(url).toContain('l_text:arial_20_bold_italic:Testing,co_red/fl_layer_apply/sample');
  });

  it('Adds an Text Overlay with position', () => {
    const url = getImageWithOverlay(
      Source.text('Testing'),
      center()
        .x(50)
        .y(100)
    ).toURL();
    expect(url).toContain('l_text:Testing/fl_layer_apply,g_center,x_50,y_100/sample');
  });
});
