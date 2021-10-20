import getImageWithResize from "./Resize/shared/getImageWithResize.js";
import * as Resize from "../../../src/actions/resize.js";
import {Expression} from "../../../src/qualifiers/expression.js";
import {ScaleAction} from "../../../src/actions/resize/ScaleAction.js";

describe('Tests for Transformation Action -- Resize', () => {
  it('Resize with a resize mode - relative', () => {
    const url = getImageWithResize(Resize.scale(100).relative(), 'url');
    expect(url).toContain('c_scale,fl_relative,w_100');
  });

  it('Resize with a resize mode - region_relative', () => {
    const url = getImageWithResize(Resize.scale(100).regionRelative(), 'url');
    expect(url).toContain('c_scale,fl_region_relative,w_100');
  });

  it('Resize with an expression', () => {
    const url = getImageWithResize(Resize.scale().width(Expression.expression('100 + 5')), 'url');
    expect(url).toContain('c_scale,w_100_add_5');
  });

  describe('Tests for resize action model', () => {
    it('ScaleAction to json', () => {
      const action = Resize.scale(100).height(200).regionRelative().relative();
      expect(action.toJson()).toStrictEqual({
        actionType: 'scale',
        dimensions: {
          width: 100,
          height: 200
        },
        relative: true,
        regionRelative: true
      });
    });

    it('ScaleAction from json', () => {
      const action = ScaleAction.fromJson({
        actionType: 'scale',
        dimensions: {
          width: 100,
          height: 200
        },
        relative: true,
        regionRelative: true
      });

      const url = getImageWithResize(action, 'url');
      expect(url).toContain('c_scale,fl_region_relative,fl_relative,h_200,w_100');
    });
  });
});
