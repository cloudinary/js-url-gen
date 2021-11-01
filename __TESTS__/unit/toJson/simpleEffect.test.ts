import {Transformation} from "../../../src";
import {Effect} from "../../../src/actions/effect";

describe('SimpleEffect.toJson()', () => {
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
});
