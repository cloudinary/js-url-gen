import getImageWithResize from "./shared/getImageWithResize";
import {Background} from "../../../../src/qualifiers/background";
import {minimumPad} from "../../../../src/actions/resize";
import {Gravity} from "../../../../src/qualifiers/gravity";
import {Compass} from "../../../../src/qualifiers/compass";

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
        .gravity(Gravity.compass(Compass.west()))
        .offsetX(10)
        .offsetY(10)
        .background(Background.color('red'))
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,b_red,c_mpad,g_west,h_250,w_250,x_10,y_10');
  });
});
