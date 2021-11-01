import {Transformation} from '../../../src';
import {Resize} from "../../../src/actions";
import {AspectRatio} from "../../../src/qualifiers";

describe('resize.toJson()', () => {
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

  it('scale.fit.limitFit.minimumFit.crop.fill.limitFill.thumbnail.pad.limitPad.minimumPad', () => {
    const transformation = new Transformation()
      .addAction(Resize.scale(200).aspectRatio(7))
      .addAction(Resize.fit(100, 200).aspectRatio('16:9'))
      .addAction(Resize.limitFit(100).aspectRatio(AspectRatio.ar16X9()))
      .addAction(Resize.minimumFit(100).aspectRatio(AspectRatio.ignoreInitialAspectRatio()))
      .addAction(Resize.crop(100).x(3).y(4).gravity('north_east').zoom(10))
      .addAction(Resize.fill(200).x(3).y(4).gravity('south'))
      .addAction(Resize.limitFill(200).x(3).y(4).gravity('south'))
      .addAction(Resize.thumbnail(100).gravity('south').zoom(4))
      .addAction(Resize.pad(100).gravity('south').offsetX(3).offsetY(4))
      .addAction(Resize.limitPad(100).gravity('south').offsetX(3).offsetY(4))
      .addAction(Resize.minimumPad(100).gravity('south').offsetX(3).offsetY(4));
    expect(transformation.toJson()).toStrictEqual([
      {
        "actionType": "scale",
        "dimensions": {
          "aspectRatio": "7.0",
          "width": 200
        }
      },
      {
        "actionType": "fit",
        "dimensions": {
          "aspectRatio": "16:9",
          "height": 200,
          "width": 100
        }
      },
      {
        "actionType": "limitFit",
        "dimensions": {
          "aspectRatio": "16:9",
          "width": 100
        }
      },
      {
        "actionType": "minimumFit",
        "dimensions": {
          "aspectRatio": "ignore_aspect_ratio",
          "width": 100
        }
      },
      {
        "actionType": "crop",
        "dimensions": {
          "width": 100
        },
        x: 3,
        y: 4,
        gravity: 'north_east',
        zoom: 10
      },
      {
        "actionType": "fill",
        "dimensions": {
          "width": 200
        },
        x: 3,
        y: 4,
        gravity: 'south'
      },
      {
        "actionType": "limitFill",
        "dimensions": {
          "width": 200
        },
        x: 3,
        y: 4,
        gravity: 'south'
      },
      {
        "actionType": "thumbnail",
        "dimensions": {
          "width": 100
        },
        gravity: 'south',
        zoom: 4
      },
      {
        "actionType": "pad",
        "dimensions": {
          "width": 100
        },
        gravity: 'south',
        x: 3,
        y: 4
      },
      {
        "actionType": "limitPad",
        "dimensions": {
          "width": 100
        },
        gravity: 'south',
        x: 3,
        y: 4
      },
      {
        "actionType": "minimumPad",
        "dimensions": {
          "width": 100
        },
        gravity: 'south',
        x: 3,
        y: 4
      }
    ]);
  });
});
