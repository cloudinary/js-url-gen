import {fromJson} from "../../src/internal/fromJson";
import {createUnsupportedError} from "../../src/internal/utils/unsupportedError";

describe('fromJson', () => {
  it('should generate a url with resize actions from array of models', function () {
    const transformation = fromJson([
      {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}},
      {actionType: 'fit', dimensions: {height: 200, aspectRatio: '16:9'}, relative: true},
      {actionType: 'limitFit', dimensions: {height: 200, aspectRatio: 'ignore_aspect_ratio'}, relative: true},
      {actionType: 'minimumFit', dimensions: {width: 100}, regionRelative: true},
      {actionType: 'crop', dimensions: {width: 100}, regionRelative: true, gravity: 'north_east', y: 3, zoom: 7},
      {actionType: 'fill', dimensions: {width: 100}, relative: true, gravity: 'south', x: 4, y: 5},
      {actionType: 'limitFill', dimensions: {width: 100}, relative: true, gravity: 'south', x: 4, y: 5},
      {actionType: 'thumbnail', dimensions: {width: 100}, relative: true, gravity: 'south', zoom: 4},
      {actionType: 'pad', dimensions: {width: 100}, relative: true, gravity: 'south', x: 3, y:4, background: 'white'},
      {actionType: 'limitPad', dimensions: {width: 100}, relative: true, gravity: 'south', x: 3, y:4, background: 'white'},
      {actionType: 'minimumPad', dimensions: {width: 100}, relative: true, gravity: 'south', x: 3, y:4, background: 'white'}
    ]);

    expect(transformation.toString()).toStrictEqual('c_scale,w_100/c_fit,fl_relative,h_200/c_limit,fl_relative,h_200/c_mfit,fl_region_relative,w_100/c_crop,fl_region_relative,g_north_east,w_100,y_3,z_7/c_fill,fl_relative,g_south,w_100,x_4,y_5/c_lfill,fl_relative,g_south,w_100,x_4,y_5/c_thumb,fl_relative,g_south,w_100,z_4/b_white,c_pad,fl_relative,g_south,w_100,x_3,y_4/b_white,c_lpad,fl_relative,g_south,w_100,x_3,y_4/b_white,c_mpad,fl_relative,g_south,w_100,x_3,y_4');
  });

  it('should generate an error for array that includes an unsupported action', function () {
    const transformation = fromJson([
      {actionType: 'unsupported', dimensions: {width: 100}},
      {actionType: 'scale', dimensions: {height: 200}, relative: true}
    ]);

    expect(transformation).toStrictEqual({error: createUnsupportedError('unsupported action unsupported')});
  });
});