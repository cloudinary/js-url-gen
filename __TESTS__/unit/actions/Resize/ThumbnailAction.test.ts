import getImageWithResize from "./shared/getImageWithResize";
import thumbnail from "../../../../src/actions/resize/ResizeActions/ThumbnailAction";
import Gravity from "../../../../src/qualifiers/gravity/Gravity";


describe('Tests for Transformation Action -- Resize.thumbnail', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(thumbnail(250, 250), 'url');
    expect(url).toContain('c_thumb,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      thumbnail()
        .width(250)
        .height(250)
        .aspectRatio(2)
        .gravity(Gravity.west()),
      'url');
    expect(url).toContain('ar_2.0,c_thumb,g_west,h_250,w_250');
  });
});
