import getImageWithResize from "./shared/getImageWithResize";
import limitPad from "../../../../src/actions/resize/ResizeActions/LimitPadAction";


describe('Tests for Transformation Action -- Resize.limitPad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(limitPad(250, 250), 'url');
    expect(url).toContain('c_lpad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      limitPad()
        .width(250)
        .height(250),
      'url');
    expect(url).toContain('c_lpad,h_250,w_250');
  });
});
