import {fromJson} from "../../../src/internal/fromJson";

describe('effect.fromJson', () => {
  it('should generate a url with resize actions from array of models', function () {
    const transformation = fromJson([
      { actionType: 'sepia' },
      { actionType: 'boomerang' },
      { actionType: 'grayscale' },
      { actionType: 'advancedRedEye' },
      { actionType: 'negate' },
      { actionType: 'redEye' },
      { actionType: 'reverse' },
      { actionType: 'transition' },
      { actionType: 'shadow', offsetX: 5, color: 'red'},
      { actionType: 'colorize', level: 10, color: 'red' },
      { actionType: 'oilPaint', level: 8 },
      { actionType: 'cartoonify', colorReductionLevel: 80, lineStrength: 70 },
      { actionType: 'outline', width: 100, color: 'lightblue' },
      { actionType: 'blackwhite', level: 40 },
      { actionType: 'accelerate' },
      { actionType: 'loop', iterations: 5 },
      { actionType: 'makeTransparent', tolerance: 5, color: 'red' },
      { actionType: 'noise', level: 50 },
      { actionType: 'vignette', level: 5 },
      { actionType: 'dither', type: 9 },
      { actionType: 'vectorize', numOfColors: 17, detailLevel: 100 },
      { actionType: 'gradientFade', strength: 5, horizontalStartPoint: 10, verticalStartPoint: 20 },
      { actionType: 'assistColorblind', type: 'stripes', stripesStrength: 20 },
      { actionType: 'assistColorblind', type: 'xray' },
      { actionType: 'simulateColorblind', condition: 'rod_monochromacy' },
      { actionType: 'deshake', pixels: 16 }
    ]);

    expect(transformation.toString()).toStrictEqual([
      'e_sepia',
      'e_boomerang',
      'e_grayscale',
      'e_adv_redeye',
      'e_negate',
      'e_redeye',
      'e_reverse',
      'e_transition',
      'co_red,e_shadow,x_5',
      'co_red,e_colorize:10',
      'e_oil_paint:8',
      'e_cartoonify:70:80',
      'co_lightblue,e_outline:100',
      'e_blackwhite:40',
      'e_accelerate',
      'e_loop:5',
      'co_red,e_makeTransparent:5',
      'e_noise:50',
      'e_vignette:5',
      'e_dither:9',
      'e_vectorize:colors:17:detail:100',
      'e_gradient_fade:5,x_10,y_20',
      'e_assist_colorblind:20',
      'e_assist_colorblind:xray',
      'e_simulate_colorblind:rod_monochromacy',
      'e_deshake:16'
    ].join('/'));
  });
});
