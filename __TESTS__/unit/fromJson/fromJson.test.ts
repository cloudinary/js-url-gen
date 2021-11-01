import {fromJson} from "../../../src/internal/fromJson";
import {createUnsupportedError} from "../../../src/internal/utils/unsupportedError";

describe('fromJson', () => {
  it('should generate an error for array that includes an unsupported action', function () {
    const transformation = fromJson([
      {actionType: 'unsupported', dimensions: {width: 100}},
      {actionType: 'scale', dimensions: {height: 200}, relative: true}
    ]);

    expect(transformation).toStrictEqual({error: createUnsupportedError('unsupported action unsupported')});
  });
});
