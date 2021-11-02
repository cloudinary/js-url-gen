import {Transformation} from "../../../src";
import {Effect} from "../../../src/actions/effect";


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
});
