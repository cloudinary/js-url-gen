import {Gravity} from "../../../../src/qualifiers/gravity";
import getImageWithResize from "../../actions/Resize/shared/getImageWithResize";
import {crop} from "../../../../src/actions/resize";

describe('Gravity Qualifier', () => {
  it ('Expects Gravity to include the four Gravity types', () => {
    expect(Gravity.autoGravity).toBeInstanceOf(Function);
    expect(Gravity.focusOn).toBeInstanceOf(Function);
    expect(Gravity.compass).toBeInstanceOf(Function);
  });
  it('Can use shortened gravity notation', ()=>{
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .gravity('auto'),
      'url');
    expect(url).toContain('c_crop,g_auto,h_250,w_250');
  });
});
