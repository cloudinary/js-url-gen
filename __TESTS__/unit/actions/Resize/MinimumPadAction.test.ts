import getImageWithResize from "./shared/getImageWithResize";
import Gravity from "../../../../src/values/gravity/Gravity";
import minimumPad from "../../../../src/actions/resize/ResizeActions/MinimumPadAction";


describe('Tests for Transformation Action -- Resize.minimumPad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(minimumPad(250, 250), 'url');
    expect(url).toContain('c_mpad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      minimumPad()
        .width(250)
        .height(250)
        .gravity(Gravity.face())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_mpad,g_face,h_250,w_250');
  });
});
