import getImageWithResize from "./shared/getImageWithResize";
import {Gravity} from "../../../../src/values/gravity";
import {Background} from "../../../../src/values/background";
import {fillPad} from "../../../../src/actions/resize";


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
        .x(10)
        .y(10)
        .gravity(Gravity.autoGravity())
        .aspectRatio(1.2)
        .background(Background.color('red')),
      'url');
    expect(url).toContain('ar_1.2,b_red,c_fill_pad,g_auto,h_250,w_250,x_10,y_10');
  });
});
