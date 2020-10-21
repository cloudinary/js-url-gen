import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as ArtisticFilter from "../../../src/values/artisticFilter/ArtisticFilter";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as EffectESM from "../../../src/actions/effect/Effect";
import Effect from "../../../src/actions/effect/Effect";
import * as Outline from "../../../src/values/outline/Outline";
import {image} from "../../../src/values/sources/Sources";
import scale from "../../../src/actions/resize/ResizeActions/ScaleAction";
import cartoonify from "../../../src/actions/effect/cartoonify";
import {HALFTONE_4X4_ORTHOGONAL} from "../../../src/values/dither/Dither";
import * as GradientFade from "../../../src/values/gradientFade/GradientFade";
import {BLUE} from "../../../src/values/colors/Colors";
import {ROD_MONOCHROMACY} from "../../../src/values/simulateColorBlind/SimulateColorBlind";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Effect', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(EffectESM, Effect);
  });

  it('Creates a cloudinaryURL with Simple and Leveled effects', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.advancedRedEye())
      .effect(Effect.accelerate())
      .effect(Effect.accelerate(100))
      .effect(Effect.accelerate().rate(5))
      .effect(Effect.boomerang())
      .effect(Effect.blackWhite())
      .effect(Effect.blackWhite(10))
      .effect(Effect.blackWhite().level(20))
      .effect(Effect.blurFaces())
      .effect(Effect.blurFaces(100))
      .effect(Effect.blurFaces().level(5))
      .effect(Effect.blur())
      .effect(Effect.blur(100))
      .effect(Effect.blur().level(5))
      .effect(Effect.fadeIn(100))
      .effect(Effect.fadeIn().length(5))
      .effect(Effect.fadeOut(100))
      .effect(Effect.fadeOut().length(5))
      .effect(Effect.grayscale())
      .effect(Effect.loop())
      .effect(Effect.loop(100))
      .effect(Effect.loop().iterations(5))
      .effect(Effect.makeTransparent())
      .effect(Effect.makeTransparent(100))
      .effect(Effect.makeTransparent().tolerance(5))
      .effect(Effect.makeTransparent().tolerance(5).color('red'))
      .effect(Effect.noise())
      .effect(Effect.noise(100))
      .effect(Effect.noise().level(5))
      .effect(Effect.negate())
      .effect(Effect.pixelate())
      .effect(Effect.pixelate(100))
      .effect(Effect.pixelate().level(5))
      .effect(Effect.pixelateFaces())
      .effect(Effect.pixelateFaces(100))
      .effect(Effect.pixelateFaces().level(5))
      .effect(Effect.reverse())
      .effect(Effect.redEye())
      .effect(Effect.sepia())
      .effect(Effect.sepia(100))
      .effect(Effect.sepia().level(5))
      .effect(Effect.vignette())
      .effect(Effect.vignette(100))
      .effect(Effect.vignette().level(5))
      .effect(Effect.deshake())
      .effect(Effect.deshake(10))
      .effect(Effect.deshake().pixels(20))

      .setPublicID('sample')
      .toURL();

    const expectedToContain = [
      'e_adv_redeye',
      'e_accelerate',
      'e_accelerate:100',
      'e_accelerate:5',
      'e_boomerang',
      'e_blackwhite',
      'e_blackwhite:10',
      'e_blackwhite:20',
      'e_blur_faces',
      'e_blur_faces:100',
      'e_blur_faces:5',
      'e_blur',
      'e_blur:100',
      'e_blur:5',
      'e_fade:100',
      'e_fade:5',
      'e_fade:-100',
      'e_fade:-5',
      'e_grayscale',
      'e_loop',
      'e_loop:100',
      'e_loop:5',
      'e_make_transparent',
      'e_make_transparent:100',
      'e_make_transparent:5',
      'co_red,e_make_transparent:5',
      'e_noise',
      'e_noise:100',
      'e_noise:5',
      'e_negate',
      'e_pixelate',
      'e_pixelate:100',
      'e_pixelate:5',
      'e_pixelate_faces',
      'e_pixelate_faces:100',
      'e_pixelate_faces:5',
      'e_reverse',
      'e_redeye',
      'e_sepia',
      'e_sepia:100',
      'e_sepia:5',
      'e_vignette',
      'e_vignette:100',
      'e_vignette:5',
      'e_deshake',
      'e_deshake:10',
      'e_deshake:20'
    ].join('/');

    expect(url).toBe(`http://res.cloudinary.com/demo/image/upload/${expectedToContain}/sample`);
  });

  it('Creates a cloudinaryURL with effect shadow:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.shadow())
      .effect(Effect.shadow(50))
      .effect(Effect.shadow().strength(60).offsetX(1).offsetY(2).color('red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_shadow/e_shadow:50/co_red,e_shadow:60,x_1,y_2');
  });

  it('Creates a cloudinaryURL with effect colorize', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.colorize(10).color('red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/co_red,e_colorize:10/sample');
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
      .effect(cartoonify().strength(50).colorReductionLevel('bw'))
      .setPublicID('sample')
      .toURL();

    const withConstructor = cartoonify(50).colorReductionLevel('bw').toString();
    const withBuilder = cartoonify().strength(50).colorReductionLevel('bw').toString();

    expect(withBuilder).toBe(withConstructor);
    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_cartoonify:50:bw/sample');
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

  it('Tests blurRegion', () => {
    expect(Effect.blurRegion()
      .toString()
    ).toEqual('e_blur_region');

    expect(Effect.blurRegion()
      .strength(10)
      .toString()
    ).toEqual('e_blur_region:10');

    expect(Effect.blurRegion()
      .strength(10)
      .height(20)
      .width(30)
      .x(40)
      .y(50)
      .toString()
    ).toEqual('e_blur_region:10,h_20,w_30,x_40,y_50');
  });

  it('Tests pixelateRegion', () => {
    expect(Effect.pixelateRegion()
      .toString()
    ).toEqual('e_pixelate_region');

    expect(Effect.pixelateRegion()
      .pixelWidth(10)
      .toString()
    ).toEqual('e_pixelate_region:10');

    expect(Effect.pixelateRegion()
      .pixelWidth(10)
      .height(20)
      .width(30)
      .x(40)
      .y(50)
      .toString()
    ).toEqual('e_pixelate_region:10,h_20,w_30,x_40,y_50');
  });

  it('Tests for Effect.dither', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.dither())
      .effect(Effect.dither(HALFTONE_4X4_ORTHOGONAL))
      .effect(Effect.dither().type(HALFTONE_4X4_ORTHOGONAL))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_ordered_dither/e_ordered_dither:9/e_ordered_dither:9');
  });

  it('Test Vectorize', () => {

    expect(Effect.vectorize()
      .toString()
    ).toEqual('e_vectorize');

    expect(Effect.vectorize()

      .cornersLevel(1)
      .despeckleLevel(2)
      .detailsLevel(3)
      .paths(4)
      .numOfColors(5)
      .toString()
    ).toEqual('e_vectorize:colors:5:detail:3:despeckle:2:paths:4:corners:1');
  });

  it('Test gradientFade', () => {
    // e_gradient_fade:{type}:{strength},x_{x},y_{y}
    expect(Effect.gradientFade()
      .toString()
    ).toBe('e_gradient_fade');

    expect(Effect.gradientFade()
      .strength(5)
      .toString()
    ).toBe('e_gradient_fade:5');

    expect(Effect.gradientFade()
      .type(GradientFade.symmetricPad())
      .strength(5)
      .horizontalStartPoint(10)
      .verticalStartPoint(20)
      .toString()
    ).toBe('e_gradient_fade:symmetric_pad:5,x_10,y_20');
  });

  it('Test assistColorBlind', () => {
    expect(Effect.assistColorBlind()
      .toString()
    ).toBe('e_assist_colorblind');

    expect(Effect.assistColorBlind()
      .xray()
      .toString()
    ).toBe('e_assist_colorblind:xray');

    expect(Effect.assistColorBlind()
      .xray()
      .stripes(10)
      .toString()
    ).toBe('e_assist_colorblind:10');
  });

  it('Test Effect.outline', () => {
    // co_{color},e_outline:{mode}:{width}:{blurLevel}
    expect(Effect.outline()
      .toString()
    ).toBe('e_outline');

    expect(Effect.outline()
      .mode(Outline.FILL)
      .width(10)
      .blurLevel(25)
      .color(BLUE)
      .toString()
    ).toBe('co_blue,e_outline:fill:10:25');
  });

  it('Test simulateColorBlind', () => {
    expect(Effect.simulateColorBlind()
      .toString()
    ).toBe('e_simulate_colorblind');

    expect(Effect.simulateColorBlind()
      .condition(ROD_MONOCHROMACY)
      .toString()
    ).toBe('e_simulate_colorblind:rod_monochromacy');
  });
});
