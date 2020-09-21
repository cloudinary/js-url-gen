import getImageWithResize from "./shared/getImageWithResize";
import Gravity from "../../../../src/values/gravity/Gravity";
import limitFill from "../../../../src/actions/resize/ResizeActions/LimitFillAction";


describe('Tests for Transformation Action -- Resize.limitFill', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(limitFill(250, 250), 'url');
    expect(url).toContain('c_lfill,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      limitFill()
        .width(250)
        .height(250)
        .gravity(Gravity.face())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_lfill,g_face,h_250,w_250');
  });
});
