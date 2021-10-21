import {fromJson} from "../../src/internal/fromJson";
import {createUnsupportedError} from "../../src/internal/utils/unsupportedError";

describe('fromJson', () => {
  it('should generate a url with resize actions from array of models', function () {
    const transformation = fromJson([
      {actionType: 'scale', dimensions: {width: 100}},
      {actionType: 'fit', dimensions: {height: 200}, relative: true},
      {actionType: 'limitFit', dimensions: {height: 200}, relative: true}
    ]);

    expect(transformation.toString()).toStrictEqual('c_scale,w_100/c_fit,fl_relative,h_200/c_limit,fl_relative,h_200');
  });

  it('should generate an error for array that includes an unsupported action', function () {
    const transformation = fromJson([
      {actionType: 'unsupported', dimensions: {width: 100}},
      {actionType: 'scale', dimensions: {height: 200}, relative: true}
    ]);

    expect(transformation).toStrictEqual({error: createUnsupportedError('unsupported action unsupported')});
  });
});