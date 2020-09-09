import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as ArtisticFilter from "../../../src/constants/artisticFilters/ArtisticFilters";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as EffectESM from "../../../src/actions/effect/Effect";
import Effect, {shadow} from "../../../src/actions/effect/Effect";
import * as Outline from "../../../src/constants/outline/Outline";
import {image} from "../../../src/params/sources/Sources";
import scale from "../../../src/actions/resize/ResizeActions/ScaleAction";
import cartoonify from "../../../src/actions/effect/cartoonify";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Effect', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(EffectESM, Effect);
  });

  it('Creates a cloudinaryURL with Simple and Levelled effects', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.advancedRedEye())
      .effect(Effect.accelerate())
      .effect(Effect.accelerate(100))
      .effect(Effect.boomerang())
      .effect(Effect.blackWhite())
      .effect(Effect.blurFaces())
      .effect(Effect.blurFaces(100))
      .effect(Effect.blur())
      .effect(Effect.blur(100))
      .effect(Effect.fadeIn(100))
      .effect(Effect.fadeOut(100))
      .effect(Effect.grayscale())
      .effect(Effect.loop())
      .effect(Effect.loop(100))
      .effect(Effect.makeTransparent())
      .effect(Effect.makeTransparent(100))
      .effect(Effect.noise())
      .effect(Effect.noise(100))
      .effect(Effect.negate())
      .effect(Effect.pixelate())
      .effect(Effect.pixelate(100))
      .effect(Effect.pixelateFaces())
      .effect(Effect.pixelateFaces(100))
      .effect(Effect.reverse())
      .effect(Effect.redEye())
      .effect(Effect.sepia())
      .effect(Effect.sepia(100))
      .effect(Effect.vignette())
      .effect(Effect.vignette(100))

      .setPublicID('sample')
      .toURL();

    const expectedToContain = [
      'e_adv_redeye',
      'e_accelerate',
      'e_accelerate:100',
      'e_boomerang',
      'e_blackwhite',
      'e_blur_faces',
      'e_blur_faces:100',
      'e_blur',
      'e_blur:100',
      'e_fade:100',
      'e_fade:-100',
      'e_grayscale',
      'e_loop',
      'e_loop:100',
      'e_make_transparent',
      'e_make_transparent:100',
      'e_noise',
      'e_noise:100',
      'e_negate',
      'e_pixelate',
      'e_pixelate:100',
      'e_pixelate_faces',
      'e_pixelate_faces:100',
      'e_reverse',
      'e_redeye',
      'e_sepia',
      'e_sepia:100',
      'e_vignette',
      'e_vignette:100'
    ].join('/');

    expect(url).toBe(`http://res.cloudinary.com/demo/image/upload/${expectedToContain}/sample`);
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

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_oil_paint/sample');
  });

  it('Creates a cloudinaryURL with effect oilPaint:level', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.oilPaint(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_oil_paint:50/sample');
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
