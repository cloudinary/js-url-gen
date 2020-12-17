import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import {image} from "../../../src/values/source";
import {scale} from "../../../src/actions/resize";
import {Reshape} from "../../../src/actions/reshape";
import {Position} from "../../../src/values/position";
import {Gravity} from "../../../src/values/gravity";
import {Compass} from "../../../src/values/gravity/qualifiers/compass/Compass";
import {Transformation} from "../../../src/transformation/Transformation";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Cutter', () => {
  it('Creates a reshape.cutByImage (cutter)overlay', () => {
    // const url = new CloudinaryImage('main')
    //   .setConfig(CONFIG_INSTANCE)
    //   .reshape(Reshape.cutByImage(image('sourceImage').transformation(
    //     new Transformation().resize(scale().width(100))
    //   )))
    //   .toURL();
    //
    // expect(url).toContain('l_sourceImage/c_scale,w_100/fl_cutter,fl_layer_apply/main');
  });

  it('Creates a reshape.cutByImage (cutter)overlay with position g_center', () => {
    // const url = new CloudinaryImage('main')
    //   .setConfig(CONFIG_INSTANCE)
    //   .reshape(
    //     Reshape.cutByImage(
    //       image('sourceImage'))
    //       .position(
    //         new Position().gravity(Gravity.compass(Compass.center()))
    //       )
    //   )
    //   .toURL();
    //
    // expect(url).toContain('l_sourceImage/fl_cutter,fl_layer_apply,g_center/main');
  });

  it('Creates a reshape.cutByImage (cutter)overlay with position g_north', () => {
    // const url = new CloudinaryImage('main')
    //   .setConfig(CONFIG_INSTANCE)
    //   .reshape(
    //     Reshape.cutByImage(
    //       image('sourceImage'))
    //       .position(
    //         new Position().gravity(Gravity.compass(Compass.north()))
    //       )
    //   )
    //   .toURL();
    //
    // expect(url).toContain('l_sourceImage/fl_cutter,fl_layer_apply,g_north/main');
  });
});
