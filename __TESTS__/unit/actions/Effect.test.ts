import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as ArtisticFilter from "../../../src/constants/artisticFilters/ArtisticFilters";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as EffectESM from "../../../src/actions/effect/Effect";
import Effect from "../../../src/actions/effect/Effect";
import * as Outline from "../../../src/constants/outline/Outline";
import {image} from "../../../src/params/sources/Sources";
import scale from "../../../src/actions/resize/scale";

const {blur, blurFaces, pixelateFaces, grayscale, sepia, shadow, cartoonify} = Effect;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Effect', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(EffectESM, Effect);
  });

  it('Ensures blur is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(blur())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect blur', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blur())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur/sample');
  });

  it('Creates a cloudinaryURL with effect blur:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blur(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur:50/sample');
  });

  it('Ensures blurFaces is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(blurFaces())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect blurFaces', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blurFaces())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur_faces/sample');
  });

  it('Creates a cloudinaryURL with effect blur_faces:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blurFaces(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur_faces:50/sample');
  });

  it('Ensures pixelateFaces is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(pixelateFaces())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect pixelateFaces', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.pixelateFaces())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_pixelate_faces/sample');
  });

  it('Creates a cloudinaryURL with effect pixelate_faces:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.pixelateFaces(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_pixelate_faces:50/sample');
  });

  it('Ensures grayscale is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(grayscale())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect grayscale', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.grayscale())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_grayscale/sample');
  });

  it('Ensures sepia is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(sepia())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect sepia', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.sepia())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_sepia/sample');
  });

  it('Creates a cloudinaryURL with effect shadow', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(shadow())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_shadow/sample');
  });

  it('Creates a cloudinaryURL with effect shadow:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.shadow(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_shadow:50/sample');
  });

  it('Creates a cloudinaryURL with effect colorize', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.colorize())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_colorize/sample');
  });

  it('Creates a cloudinaryURL with effect colorize:level', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.colorize(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_colorize:50/sample');
  });

  it('Creates a cloudinaryURL with effect oilPaint', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.oilPaint())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_oilPaint/sample');
  });

  it('Creates a cloudinaryURL with effect oilPaint:level', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.oilPaint(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_oilPaint:50/sample');
  });

  it('Creates a cloudinaryURL with effect artisticFilter', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.artisticFilter(ArtisticFilter.PEACOCK))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_art:peacock/sample');
  });

  it('Creates a cloudinaryURL with effect cartoonify:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(cartoonify(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_cartoonify:50/sample');
  });

  it('Creates a cloudinaryURL with effect outline:15:200', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.outline(15, 200))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_outline:15:200/sample');
  });

  it('Creates a cloudinaryURL with effect outline:1', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.outline(1))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_outline:1/sample');
  });

  it('Creates a cloudinaryURL with effect outline:mode.fill', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.outline()
        .mode(Outline.FILL))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_outline:fill/sample');
  });

  it('Creates a cloudinaryURL with effect outline:mode', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.outline(20, 200)
        .mode(Outline.OUTER))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_outline:outer:20:200/sample');
  });

  it('Creates a cloudinaryURL with effect style_transfer', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.styleTransfer(image('woman')))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('l_woman/e_style_transfer,fl_layer_apply/sample');
  });

  it('Creates a cloudinaryURL with effect style_transfer:strength', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.styleTransfer(image('woman')).strength(15))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('l_woman/e_style_transfer:15,fl_layer_apply/sample');
  });

  it('Creates a cloudinaryURL with effect style_transfer:preserve_color:strength', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.styleTransfer(image('woman'))
        .strength(15)
        .preserveColor()
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('l_woman/e_style_transfer:preserve_color:15,fl_layer_apply/sample');
  });

  it('Creates a cloudinaryURL with effect style_transfer:preserve_color:strength with a transformation', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.styleTransfer(image('woman').resize(scale(100, 100)))
        .strength(15)
        .preserveColor()
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('l_woman/c_scale,h_100,w_100/e_style_transfer:preserve_color:15,fl_layer_apply/sample');
  });
});
