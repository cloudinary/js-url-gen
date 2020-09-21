import getImageWithResize from "./shared/getImageWithResize";
import Gravity from "../../../../src/values/gravity/Gravity";
import {thumb} from "../../../../src/actions/resize/Resize";

describe('Tests for Transformation Action -- Resize.thumb()', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(thumb(250, 250), 'url');
    expect(url).toContain('c_thumb,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      thumb()
        .width(250)
        .height(250)
        .aspectRatio(2)
        .gravity(Gravity.west()),
      'url');
    expect(url).toContain('ar_2.0,c_thumb,g_west,h_250,w_250');
  });
});
