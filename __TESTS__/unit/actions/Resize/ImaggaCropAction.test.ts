import getImageWithResize from "./shared/getImageWithResize";
import imaggaCrop from "../../../../src/actions/resize/ResizeActions/ImaggaCropAction";


describe('Tests for Transformation Action -- Resize.imaggaCrop', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(imaggaCrop(250, 250), 'url');
    expect(url).toContain('c_imagga_crop,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      imaggaCrop()
        .width(250)
        .height(250)
        .aspectRatio(2),
      'url');
    expect(url).toContain('ar_2.0,c_imagga_crop,h_250,w_250');
  });
});
