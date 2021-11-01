import {Transformation} from '../../../src';
import {Delivery} from "../../../src/actions";
import {ChromaSubSampling, ColorSpace, Format, Quality} from "../../../src/qualifiers";
import {Progressive} from "../../../src/qualifiers/progressive";

describe('Delivery.toJson()', () => {
  it('delivery.colorSpace', () => {
    const transformation = new Transformation()
      .addAction(Delivery.colorSpace(ColorSpace.trueColor()));
    expect(transformation.toJson()).toStrictEqual(
      [
        {
          actionType: 'colorSpace',
          mode: 'srgbTrueColor'
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

  it('jpg.progressive("semi")', () => {
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
});
