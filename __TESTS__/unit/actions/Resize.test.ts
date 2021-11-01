import getImageWithResize from "./Resize/shared/getImageWithResize.js";
import * as Resize from "../../../src/actions/resize.js";
import {Expression} from "../../../src/qualifiers/expression.js";

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

  it('Resize with gravity', () => {
    const url = getImageWithResize(Resize.pad().width(100).gravity('west'), 'url');
    expect(url).toContain('c_pad,g_west,w_100');
  });
});
