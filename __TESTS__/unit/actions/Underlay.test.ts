import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import {fill} from "../../../src/actions/resize/Resize";
import * as Underlay from "../../../src/actions/underlay/Underlay";
import * as Position from "../../../src/values/position/Position";
import * as BlendMode from "../../../src/values/blendMode/BlendMode";

import * as UnderlayESM from "../../../src/actions/underlay/Underlay";
import * as OverlayESM from "../../../src/actions/overlay/Overlay";
import {image} from "../../../src/values/sources/Sources";

const {imageLayer} = Underlay;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for underlay actions', () => {
  it ('Expect underlay to be alias of overlay', () => {
    expect(UnderlayESM).toEqual(OverlayESM);
  });
  it('Parses an underlay with an imageSource', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .resize(fill(1000, 1000))
      .underlay(
        imageLayer(
          image('sample')
            .resize(fill(500, 500))
            .underlay(
              imageLayer(
                image('sample')
                  .resize(fill(200, 200)
                  )
              )
            )
        )
      );

    expect(tImage.toURL())
      .toBe('https://res.cloudinary.com/demo/image/upload/c_fill,h_1000,w_1000/u_sample/c_fill,h_500,w_500/u_sample/c_fill,h_200,w_200/fl_layer_apply/fl_layer_apply/sample');
  });


  it('Adds an underlay with position', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .underlay(
        imageLayer(
          image('sample'),
          Position.center()
        )
      );
    expect(tImage.toURL()).toContain('u_sample/fl_layer_apply,g_center/sample');
  });

  it('Adds an underlay with position', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .underlay(
        imageLayer(
          image('sample'),
          Position.center()
            .x(50)
            .y(100)
        )
      );
    expect(tImage.toURL()).toContain('u_sample/fl_layer_apply,g_center,x_50,y_100/sample');
  });

  it('Adds an underlay without position and with a blendMode', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .underlay(
        imageLayer(image('sample'), null, BlendMode.screen())
      );
    expect(tImage.toURL()).toContain('u_sample/e_screen,fl_layer_apply/sample');
  });
});
