import {Transformation} from "../../../src";
import {Effect} from "../../../src/actions/effect";

describe('LevelEffect.toJson()', () => {
  it('effect.sepia', () => {
    const transformation = new Transformation()
      .addAction(Effect.sepia());
    expect(transformation.toJson()).toStrictEqual( [
      { actionType: 'sepia' }
    ]);
  });
});
