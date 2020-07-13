import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {Color} from "../../../src/actions/Actions";
import * as Colors from '../../../src/constants/colors/Colors';
import {AQUAMARINE1} from "../../../src/constants/colors/Colors";
import {rgb, namedColor} from "../../../src/actions/color/Color";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Color', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Color.rgb).toEqual(rgb);
    expect(Color.namedColor).toEqual(namedColor);
  });

  it('Ensures rgb is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.color(rgb(Colors.AZURE2))
    ).toEqual(tImage);
  });

  it('Ensures namedColor is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.color(namedColor(Colors.BISQUE))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with rgb and hex', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .color(Color.rgb("#123456"))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/co_123456/sample');
  });

  it('Creates a cloudinaryURL with rgb and Colors', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .color(Color.rgb(Colors.RED))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/co_red/sample');
  });

  it('Creates a cloudinaryURL with namedColor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .color(Color.namedColor(Colors.RED))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/co_red/sample');
  });

  it('Creates a cloudinaryURL with namedColor and single import of AQUAMARINE1', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .color(Color.namedColor(AQUAMARINE1))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/co_aqua/sample');
  });
});
