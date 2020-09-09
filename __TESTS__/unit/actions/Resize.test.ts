import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import ResizeMode from "../../../src/params/resizeMode/ResizeMode";
import getImageWithResize from "./Resize/shared/getImageWithResize";
import Resize from "../../../src/actions/resize/Resize";
import * as ResizeESM from "../../../src/actions/resize/Resize";


describe('Tests for Transformation Action -- Resize', () => {
  it('Ensure ESM and Default export the same thing', () => {
    expectESMToMatchDefault(ResizeESM, Resize);
  });


  it ('Tests for unspecced methods,', () => {
    // TODO this is unspecced, but will probably be implemented like this.
    const url = getImageWithResize(Resize
      .scale(100)
      .x(100)
      .y(100)
      .zoom(100)
      .resizeMode(ResizeMode.relative()), 'url');
    expect(url).toContain('c_scale,fl_relative,w_100,x_100,y_100,z_100');
  });

  it('Resize with a resize mode - relative', () => {
    // TODO this is unspecced, but will probably be implemented like this.
    const url = getImageWithResize(Resize.scale(100).resizeMode(ResizeMode.relative()), 'url');
    expect(url).toContain('c_scale,fl_relative,w_100');
  });

  it('Resize with a resize mode - region_relative', () => {
    // TODO this is unspecced, but will probably be implemented like this.
    const url = getImageWithResize(Resize.scale(100).resizeMode(ResizeMode.regionRelative()), 'url');
    expect(url).toContain('c_scale,fl_region_relative,w_100');
  });
});
