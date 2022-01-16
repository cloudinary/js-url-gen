import {fromJson} from "../../../src/internal/fromJson";

describe('delivery.fromJson', () => {
  it('should generate a transformation string from colorSpace action', function () {
    const transformation = fromJson({actions:[
      {actionType: 'colorSpace', mode: 'srgbTrueColor'}
    ]});

    expect(transformation.toString()).toStrictEqual('cs_srgb:truecolor');
  });

  it('should generate a transformation string from colorSpaceFromIcc action', function () {
    const transformation = fromJson({actions:[
      {actionType: 'colorSpaceFromICC', publicId: 'sample'}
    ]});

    expect(transformation.toString()).toStrictEqual('cs_icc:sample');
  });

  it('jpg.progressive.semi()', () => {
    const transformation = fromJson({actions:[
      {
        progressive: { mode: 'semi' },
        actionType: 'format',
        formatType: 'jpg'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('f_jpg,fl_progressive:semi');
  });

  it('gif.lossy()', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'format',
        formatType: 'gif',
        lossy: true
      }
    ]});

    expect(transformation.toString()).toStrictEqual('f_gif,fl_lossy');
  });

  it('quality:80', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: '80'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_80');
  });

  it('quality:80.quantization', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: '80',
        quantization: 10
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_80:qmax_10');
  });

  it('quality:auto', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'auto'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_auto');
  });

  it('quality:auto:best', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'autoBest'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_auto:best');
  });

  it('quality:auto:eco', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'autoEco'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_auto:eco');
  });

  it('quality:auto:good', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'autoGood'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_auto:good');
  });

  it('quality:auto:low', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'autoLow'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_auto:low');
  });

  it('quality:jpegminiHigh', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'jpegminiHigh'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_jpegmini:1');
  });

  it('quality:jpegminiMedium', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'jpegminiMedium'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_jpegmini:2');
  });

  it('quality:jpegminiBest', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: 'jpegminiBest'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_jpegmini:0');
  });

  it('chromaSubSampling', () => {
    const transformation = fromJson({actions:[
      {
        actionType: 'quality',
        level: '75',
        chromaSubSampling: 'CHROMA_420'
      }
    ]});

    expect(transformation.toString()).toStrictEqual('q_75:420');
  });

  it('dpr', () => {
    const transformation = fromJson({actions:[
      { actionType: 'dpr', dpr: 'auto'},
      { actionType: 'dpr', dpr: 2},
    ]});
    expect(transformation.toString()).toStrictEqual('dpr_auto/dpr_2.0');
  });
});
