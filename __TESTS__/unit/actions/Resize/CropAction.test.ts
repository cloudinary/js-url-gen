import getImageWithResize from "./shared/getImageWithResize";
import crop from "../../../../src/actions/resize/ResizeActions/CropAction";


describe('Tests for Transformation Action -- Resize.crop', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(crop(250, 250), 'url');
    expect(url).toContain('c_crop,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250),
      'url');
    expect(url).toContain('c_crop,h_250,w_250');
  });
});
