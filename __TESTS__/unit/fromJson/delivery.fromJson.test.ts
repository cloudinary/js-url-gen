import {fromJson} from "../../../src/internal/fromJson";
import {Transformation} from "../../../src";
import {Delivery} from "../../../src/actions/delivery";
import {Quality} from "../../../src/qualifiers/quality";
import {ChromaSubSampling} from "../../../src/qualifiers/chromaSubSampling";

describe('delivery.fromJson', () => {
  it('should generate a transformation string from colorSpace action', function () {
    const transformation = fromJson([
      {actionType: 'colorSpace', mode: 'srgbTrueColor'}
    ]);

    expect(transformation.toString()).toStrictEqual('cs_srgb:truecolor');
  });

  it('should generate a transformation string from colorSpaceFromIcc action', function () {
    const transformation = fromJson([
      {actionType: 'colorSpaceFromICC', publicId: 'sample'}
    ]);

    expect(transformation.toString()).toStrictEqual('cs_icc:sample');
  });

  it('jpg.progressive.semi()', () => {
    const transformation = fromJson([
      {
        progressive: { mode: 'semi' },
        actionType: 'format',
        formatType: 'jpg'
      }
    ]);

    expect(transformation.toString()).toStrictEqual('f_jpg,fl_progressive:semi');
  });

  it('gif.lossy()', () => {
    const transformation = fromJson([
      {
        actionType: 'format',
        formatType: 'gif',
        lossy: true
      }
    ]);

    expect(transformation.toString()).toStrictEqual('f_gif,fl_lossy');
  });

  it('quality:80', () => {
    const transformation = fromJson([
      {
        actionType: 'quality',
        level: '80'
      }
    ]);

    expect(transformation.toString()).toStrictEqual('q_80');
  });

  it('quality:80.quantization', () => {
    const transformation = fromJson([
      {
        actionType: 'quality',
        level: '80',
        quantization: 10
      }
    ]);

    expect(transformation.toString()).toStrictEqual('q_80:qmax_10');
  });

  it('quality:auto', () => {
    const transformation = fromJson([
      {
        actionType: 'quality',
        level: 'auto'
      }
    ]);

    expect(transformation.toString()).toStrictEqual('q_auto');
  });

  it('quality:auto:best', () => {
    const transformation = fromJson([
      {
        actionType: 'quality',
        level: 'autoBest'
      }
    ]);

    expect(transformation.toString()).toStrictEqual('q_auto:best');
  });

  it('chromaSubSampling', () => {
    const transformation = fromJson([
      {
        actionType: 'quality',
        level: '75',
        chromaSubSampling: 'CHROMA_420'
      }
    ]);

    expect(transformation.toString()).toStrictEqual('q_75:420');
  });
});
