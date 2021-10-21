import {Transformation} from '../../src';
import {Resize} from "../../src/actions";
import {UnsupportedError} from "../../src/internal/utils/unsupportedError";
import {Action} from "../../src/internal/Action";

describe('Transformation.toJson()', () => {
  it('scale', () => {
    const transformation = new Transformation()
      .addAction(Resize.scale(200));
    expect(transformation.toJson()).toStrictEqual([
      {
        "actionType": "scale",
        "dimensions": {
          "width": 200
        }
      }
    ]);
  });

  it('scale.fit.limitFit', () => {
    const transformation = new Transformation()
      .addAction(Resize.scale(200))
      .addAction(Resize.fit(100, 200))
      .addAction(Resize.limitFit(100));
    expect(transformation.toJson()).toStrictEqual([
      {
        "actionType": "scale",
        "dimensions": {
          "width": 200
        }
      },
      {
        "actionType": "fit",
        "dimensions": {
          "height": 200,
          "width": 100
        }
      },
      {
        "actionType": "limitFit",
        "dimensions": {
          "width": 100
        }
      }
    ]);
  });

  it('unsupported actions', () => {
    const transformation = new Transformation()
      .addAction(new Action())
      .addAction(new Action());
    expect(transformation.toJson()).toStrictEqual(
      {
        error: new UnsupportedError('unsupported action Action')
      }
    );
  });
});