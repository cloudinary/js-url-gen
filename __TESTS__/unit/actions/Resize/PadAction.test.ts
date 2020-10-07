import getImageWithResize from "./shared/getImageWithResize";
import Gravity from "../../../../src/values/gravity/Gravity";
import pad from "../../../../src/actions/resize/ResizeActions/pad/PadAction";
import Background from "../../../../src/actions/background/Background";


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
        .x(10)
        .y(10)
        .background(Background.color('red'))
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,b_red,c_pad,g_face,h_250,w_250,x_10,y_10');
  });
});
