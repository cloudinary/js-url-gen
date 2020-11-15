import getImageWithResize from "./shared/getImageWithResize";
import limitPad from "../../../../src/actions/resize/ResizeActions/pad/LimitPadAction";
import * as Gravity from "../../../../src/values/gravity/Gravity";
import * as Background from "../../../../src/values/background/Background";


describe('Tests for Transformation Action -- Resize.limitPad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(limitPad(250, 250), 'url');
    expect(url).toContain('c_lpad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      limitPad()
        .width(250)
        .height(250)
        .aspectRatio(2)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .background(Background.color('red'))
      ,
      'url');
    expect(url).toContain('ar_2.0,b_red,c_lpad,g_face,h_250,w_250,x_10,y_10');
  });
});
