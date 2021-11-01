import {Transformation} from "../../../src";
import {Action} from "../../../src/internal/Action";
import {UnsupportedError} from "../../../src/internal/utils/unsupportedError";

describe('Transformation.toJson()', () => {
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
