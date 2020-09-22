import getImageWithResize from "./shared/getImageWithResize";
import Gravity from "../../../../src/values/gravity/Gravity";
import pad from "../../../../src/actions/resize/ResizeActions/PadAction";


describe('Tests for Transformation Action -- Resize.pad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(pad(250, 250), 'url');
    expect(url).toContain('c_pad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      pad()
        .width(250)
        .height(250)
        .gravity(Gravity.face())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_pad,g_face,h_250,w_250');
  });
});
