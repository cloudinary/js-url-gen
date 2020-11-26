import getImageWithResize from "./shared/getImageWithResize";
import * as Gravity from "../../../../src/values/gravity/Gravity";
import minimumPad from "../../../../src/actions/resize/ResizeActions/pad/MinimumPadAction";
import * as Background from "../../../../src/values/background/Background";


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
        .gravity(Gravity.auto())
        .x(10)
        .y(10)
        .background(Background.color('red'))
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,b_red,c_mpad,g_auto,h_250,w_250,x_10,y_10');
  });
});
