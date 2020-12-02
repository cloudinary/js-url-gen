import getImageWithResize from "./Resize/shared/getImageWithResize";
import * as Resize from "../../../src/actions/resize/Resize";


describe('Tests for Transformation Action -- Resize', () => {
  it('Resize with a resize mode - relative', () => {
    const url = getImageWithResize(Resize.scale(100).relative(), 'url');
    expect(url).toContain('c_scale,fl_relative,w_100');
  });

  it('Resize with a resize mode - region_relative', () => {
    // TODO this is unspecced, but will probably be implemented like this.
    const url = getImageWithResize(Resize.scale(100).regionRelative(), 'url');
    expect(url).toContain('c_scale,fl_region_relative,w_100');
  });
});
