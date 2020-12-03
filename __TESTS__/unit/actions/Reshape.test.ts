import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import TransformableImage from "../../../src/transformation/TransformableImage";
import {image} from "../../../src/values/sources/Sources";
import {scale} from "../../../src/actions/resize/Resize";
import * as Position from "../../../src/values/position/Position";
import {Reshape} from "../../../src/actions/reshape/Reshape";




const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Cutter', () => {
  it ('Creates a reshape.cutByImage (cutter)overlay', () => {
    const url = new TransformableImage('main')
      .setConfig(CONFIG_INSTANCE)
      .reshape(Reshape.cutByImage(image('sourceImage').resize(scale().width(100))))
      .toURL();

    expect(url).toContain('l_sourceImage/c_scale,w_100/fl_cutter,fl_layer_apply/main');
  });

  it ('Creates a reshape.cutByImage (cutter)overlay with position g_center', () => {
    const url = new TransformableImage('main')
      .setConfig(CONFIG_INSTANCE)
      .reshape(Reshape.cutByImage(image('sourceImage')).position(Position.center()))
      .toURL();

    expect(url).toContain('l_sourceImage/fl_cutter,fl_layer_apply,g_center/main');
  });

  it ('Creates a reshape.cutByImage (cutter)overlay with position g_north', () => {
    const url = new TransformableImage('main')
      .setConfig(CONFIG_INSTANCE)
      .reshape(Reshape.cutByImage(image('sourceImage')).position(Position.north()))
      .toURL();

    expect(url).toContain('l_sourceImage/fl_cutter,fl_layer_apply,g_north/main');
  });
});
