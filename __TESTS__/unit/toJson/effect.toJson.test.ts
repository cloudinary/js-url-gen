import {Transformation} from "../../../src";
import {Effect} from "../../../src/actions/effect";
import {halftone4x4Orthogonal} from "../../../src/qualifiers/dither";
import {rodMonochromacy} from "../../../src/qualifiers/simulateColorBlind";
import {Region} from "../../../src/qualifiers";


describe('Effect toJson()', () => {
  it('effect.sepia', () => {
    const transformation = new Transformation()
      .addAction(Effect.sepia());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'sepia' }
    ]);
  });

  it('effect.boomerang', () => {
    const transformation = new Transformation()
      .addAction(Effect.boomerang());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'boomerang' }
    ]);
  });

  it('effect.grayscale', () => {
    const transformation = new Transformation()
      .addAction(Effect.grayscale());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'grayscale' }
    ]);
  });

  it('effect.advancedRedEye', () => {
    const transformation = new Transformation()
      .addAction(Effect.advancedRedEye());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'advancedRedEye' }
    ]);
  });

  it('effect.negate', () => {
    const transformation = new Transformation()
      .addAction(Effect.negate());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'negate' }
    ]);
  });

  it('effect.redEye', () => {
    const transformation = new Transformation()
      .addAction(Effect.redEye());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'redEye' }
    ]);
  });

  it('effect.reverse', () => {
    const transformation = new Transformation()
      .addAction(Effect.reverse());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'reverse' }
    ]);
  });

  it('effect.transition', () => {
    const transformation = new Transformation()
      .addAction(Effect.transition());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'transition' }
    ]);
  });

  it('effect.shadow', () => {
    const transformation = new Transformation()
      .addAction(Effect.shadow(4).offsetX(5).offsetY(8).color('red'));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'shadow',
        offsetX: 5,
        offsetY: 8,
        color: 'red'
      }
    ]);
  });

  it('effect.colorize', () => {
    const transformation = new Transformation()
      .addAction(Effect.colorize(10).color('red'));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'colorize',
        level: 10,
        color: 'red'
      }
    ]);
  });

  it('effect.oilPaint', () => {
    const transformation = new Transformation()
      .addAction(Effect.oilPaint().strength(8));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'oilPaint',
        level: 8,
      }
    ]);
  });

  it('effect.cartoonify', () => {
    const transformation = new Transformation()
      .addAction(Effect.cartoonify().lineStrength(70).colorReductionLevel(80));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'cartoonify',
        colorReductionLevel: 80,
        lineStrength: 70
      }
    ]);
  });

  it('effect.outline', () => {
    const transformation = new Transformation()
      .addAction(Effect.outline().width(100).color("lightblue"));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'outline',
        width: 100,
        color: 'lightblue'
      }
    ]);
  });

  it('effect.blackwhite', () => {
    const transformation = new Transformation()
      .addAction(Effect.blackwhite().threshold(40));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'blackwhite',
        level: 40,
      }
    ]);
  });

  it('effect.accelerate', () => {
    const transformation = new Transformation()
      .addAction(Effect.accelerate().rate(5));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'accelerate',
        level: 5,
      }
    ]);
  });

  it('effect.loop', () => {
    const transformation = new Transformation()
      .addAction(Effect.loop().additionalIterations(5));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'loop',
        iterations: 5,
      }
    ]);
  });

  it('effect.make_transparent', () => {
    const transformation = new Transformation()
      .addAction(Effect.makeTransparent().tolerance(5).colorToReplace('red'));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'makeTransparent',
        tolerance: 5,
        level: 5,
        color: 'red'
      }
    ]);
  });

  it('effect.noise', () => {
    const transformation = new Transformation()
      .addAction(Effect.noise().level(50));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'noise',
        level: 50,
      }
    ]);
  });

  it('effect.vignette', () => {
    const transformation = new Transformation()
      .addAction(Effect.vignette().strength(5));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'vignette',
        level: 5,
      }
    ]);
  });

  it('effect.dither', () => {
    const transformation = new Transformation()
      .addAction(Effect.dither().type(halftone4x4Orthogonal()));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'Dither',
        type: 9,
      }
    ]);
  });

  it('effect.vectorize', () => {
    const transformation = new Transformation()
      .addAction(Effect.vectorize().numOfColors(17).detailsLevel(100));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'vectorize',
        numOfColors: 17,
        detailLevel: 100
      }
    ]);
  });

  it('effect.gradientFade', () => {
    const transformation = new Transformation()
      .addAction(Effect.gradientFade()
        .strength(5)
        .horizontalStartPoint(10)
        .verticalStartPoint(20));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'GradientFade',
        strength: 5,
        horizontalStartPoint: 10,
        verticalStartPoint: 20
      }
    ]);
  });

  it('effect.assistColorBlind', () => {
    const transformation = new Transformation()
      .addAction(Effect.assistColorBlind().stripesStrength(20));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'assistColorblind',
        type: 'stripes',
        stripesStrength: 20
      }
    ]);
  });

  it('effect.simulateColorBlind', () => {
    const transformation = new Transformation()
      .addAction(Effect.simulateColorBlind().condition(rodMonochromacy()));
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'simulateColorblind',
        condition: 'rod_monochromacy'
      }
    ]);
  });

  it('effect.deshake', () => {
    const transformation = new Transformation()
      .addAction(Effect.deshake().shakeStrength(16));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'deshake',
        pixels: 16
      }
    ]);
  });

  it('effect.pixelate', () => {
    const transformation = new Transformation()
      .addAction(Effect.pixelate().squareSize(15).region(Region.faces()));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'pixelate',
        squareSize: 15,
        region: { RegionType: 'faces' }
      }
    ]);
  });

  it('effect.blur', () => {
    const transformation = new Transformation()
      .addAction(Effect.blur().strength(5));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'blur',
        strength: 5,
      }
    ]);
  });
});
