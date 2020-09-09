import getImageWithResize from "./shared/getImageWithResize";
import fillPad from "../../../../src/actions/resize/ResizeActions/FillPadAction";


describe('Tests for Transformation Action -- Resize.fillPad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(fillPad(250, 250), 'url');
    expect(url).toContain('c_fill_pad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      fillPad()
        .width(250)
        .height(250)
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_fill_pad,h_250,w_250');
  });
});
