import {Transformation} from '../../src';
import {Delivery, Resize} from "../../src/actions";
import {UnsupportedError} from "../../src/internal/utils/unsupportedError";
import {Action} from "../../src/internal/Action";
import {AspectRatio, Gravity} from "../../src/qualifiers";
import {Format} from "../../src/qualifiers/format";
import {Progressive} from "../../src/qualifiers/progressive";
import {Quality} from "../../src/qualifiers/quality";
import {ChromaSubSampling} from "../../src/qualifiers";
import {CompassQualifier} from "../../src/qualifiers/gravity/qualifiers/compass/CompassQualifier";

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

  it('delivery.colorSpace', () => {
    const transformation = new Transformation()
      .addAction(Delivery.colorSpace('srgb'));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'colorSpace',
        colorSpaceType: 'srgb'
      }
    ]
    );
  });

  it('delivery.dpr', () => {
    const transformation = new Transformation()
      .addAction(Delivery.dpr('auto'));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'dpr',
        type: 'auto'
      }
    ]);
  });

  it('delivery.colorSpaceFromICC', () => {
    const transformation = new Transformation()
      .addAction(Delivery.colorSpaceFromICC('sample'));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'colorSpaceFromICC',
        publicId: 'sample'
      }
    ]);
  });

  it('delivery.density', () => {
    const transformation = new Transformation()
      .addAction(Delivery.density(1));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'density',
        density: 1
      }
    ]);
  });

  it('jpg.progressive.semi()', () => {
    const transformation = new Transformation()
      .addAction(Delivery.format(Format.jpg()).progressive(Progressive.semi()));
    expect(transformation.toJson()).toStrictEqual([
      {
        progressive: { mode: 'semi' },
        actionType: 'format',
        formatType: 'jpg'
      }
    ]);
  });

  it('jpg.progressive.semi()', () => {
    const transformation = new Transformation()
      .addAction(Delivery.format(Format.jpg()).progressive('semi'));
    expect(transformation.toJson()).toStrictEqual([
      {
        progressive: { mode: 'semi' },
        actionType: 'format',
        formatType: 'jpg'
      }
    ]);
  });

  it('gif.lossy()', () => {
    const transformation = new Transformation()
      .addAction(Delivery.format(Format.gif()).lossy());
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'format',
        formatType: 'gif',
        lossy: true
      }
    ]);
  });

  it('quality:80', () => {
    const transformation = new Transformation()
      .addAction(Delivery.quality('80'));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'quality',
        level: '80'
      }
    ]);
  });

  it('quality:80.quantization', () => {
    const transformation = new Transformation()
      .addAction(Delivery.quality('80').quantization(10));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'quality',
        level: '80',
        quantization: 10
      }
    ]);
  });

  it('quality:auto', () => {
    const transformation = new Transformation()
      .addAction(Delivery.quality(Quality.auto()));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'quality',
        level: 'auto'
      }
    ]);
  });

  it('chromaSubSampling', () => {
    const transformation = new Transformation()
      .addAction(Delivery.quality('75').chromaSubSampling(ChromaSubSampling.chroma420()));
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'quality',
        level: '75',
        chromaSubSampling: 'CHROMA_420'
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
