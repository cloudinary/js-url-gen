import {Transformation} from "../../../src";
import {Adjust} from "../../../src/actions/adjust";

describe('Adjust toJson()', () => {
  it('adjust.improve', () => {
    const transformation = new Transformation()
      .addAction(Adjust.improve().mode('outdoor').blend(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'improve',
        mode: 'outdoor',
        blend: 50
      }
    ]});
  });

  it('adjust.unsharpMask', () => {
    const transformation = new Transformation()
      .addAction(Adjust.unsharpMask().strength(10));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'unsharpMask',
        strength: 10
      }
    ]});
  });

  it('adjust.saturation', () => {
    const transformation = new Transformation()
      .addAction(Adjust.saturation().level(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'saturation',
        level: 50
      }
    ]});
  });

  it('adjust.contrast', () => {
    const transformation = new Transformation()
      .addAction(Adjust.contrast().level(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'contrast',
        level: 50
      }
    ]});
  });

  it('adjust.brightness', () => {
    const transformation = new Transformation()
      .addAction(Adjust.brightness().level(40));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'brightness',
        level: 40
      }
    ]});
  });

  it('adjust.gamma', () => {
    const transformation = new Transformation()
      .addAction(Adjust.gamma().level(40));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'gamma',
        level: 40
      }
    ]});
  });
});
