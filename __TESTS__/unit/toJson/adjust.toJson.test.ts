import {Transformation} from "../../../src";
import {Adjust} from "../../../src/actions/adjust";

describe('Adjust toJson()', () => {
  it('adjust.improve', () => {
    const transformation = new Transformation()
      .addAction(Adjust.improve().mode('outdoor').blend(50));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'improve',
        mode: 'outdoor',
        blend: 50
      }
    ]);
  });

  it('adjust.unsharpMask', () => {
    const transformation = new Transformation()
      .addAction(Adjust.unsharpMask().strength(10));
    expect(transformation.toJson()).toStrictEqual( [
      {
        actionType: 'unsharpMask',
        level: 10
      }
    ]);
  });
});
