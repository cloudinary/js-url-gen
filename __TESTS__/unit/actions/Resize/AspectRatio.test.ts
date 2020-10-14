import getImageWithResize from "./shared/getImageWithResize";
import crop from "../../../../src/actions/resize/ResizeActions/CropAction";
import Gravity from "../../../../src/values/gravity/Gravity";
import AspectRatio from "../../../../src/values/aspectRatio/AspectRatio";

describe('Tests for AspectRatio values Action -- Resize.crop', () => {
  it('Generates URL using AspectRatio.AR1X1', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.AR1X1())
        .relative(),
      'url');
    expect(url).toContain('ar_1:1,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });

  it('Generates URL using AspectRatio.AR16X9', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.AR16X9())
        .relative(),
      'url');
    expect(url).toContain('ar_16:9,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });

  it('Generates URL using AspectRatio.AR4X3', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.AR4X3())
        .relative(),
      'url');
    expect(url).toContain('ar_4:3,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });

  it('Generates URL using AspectRatio.AR3X2', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.AR3X2())
        .relative(),
      'url');
    expect(url).toContain('ar_3:2,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });

  it('Generates URL using AspectRatio.AR3X1', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.AR3X1())
        .relative(),
      'url');
    expect(url).toContain('ar_3:1,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });

  it('Generates URL using AspectRatio.AR5X4', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.AR5X4())
        .relative(),
      'url');
    expect(url).toContain('ar_5:4,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });

  it('Generates URL using AspectRatio.IgnoreInitialAspectRatio', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.face())
        .aspectRatio(AspectRatio.IgnoreInitialAspectRatio())
        .relative(),
      'url');
    expect(url).toContain('fl_ignore_aspect_ratio,c_crop,fl_relative,g_face,h_250,w_250,x_10,y_10');
  });
});
