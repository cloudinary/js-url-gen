import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import Cutter from '../../../src/actions/cutter/Cutter';
import TransformableImage from "../../../src/transformation/TransformableImage";
import {image} from "../../../src/params/sources/Sources";
import {scale} from "../../../src/actions/resize/Resize";




const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Cutter', () => {
  it ('Creates a cutter overlay', () => {
    const url = new TransformableImage('main')
      .setConfig(CONFIG_INSTANCE)
      .cutter(Cutter.source(image('sourceImage').resize(scale().width(100))))
      .toURL();

    expect(url).toContain('l_sourceImage/c_scale,w_100/fl_cutter,fl_layer_apply/main');
  });
});
