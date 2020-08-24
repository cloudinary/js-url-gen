import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import TransformableImage from "../../../src/transformation/TransformableImage";

import {fill} from "../../../src/actions/resize/Resize";

import Layers from "../../../src/actions/layers/Layers";
import * as LayersESM from "../../../src/actions/layers/Layers";

import Position from "../../../src/params/position/Position";
import BlendMode from "../../../src/params/blendMode/BlendMode";
import * as PositionESM from "../../../src/params/position/Position";
import * as BlendModeESM from "../../../src/params/blendMode/BlendMode";

import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

const {imageLayer} = Layers;
const {image} = Layers.Source;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for overlay actions', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(PositionESM, Position);
    expectESMToMatchDefault(BlendModeESM, BlendMode);
    expectESMToMatchDefault(LayersESM, Layers);
  });

  it('Parses an overlay with an imageSource', () => {
    const tImage = new TransformableImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .resize(fill(1000, 1000))
      .overlay(
        imageLayer(
          image('sample')
            .resize(fill(500, 500))
            .overlay(
              imageLayer(
                image('sample')
                  .resize(fill(200, 200)
                  )
              )
            )
        )
      );

    expect(tImage.toURL())
      .toBe('http://res.cloudinary.com/demo/image/upload/c_fill,h_1000,w_1000/l_sample/c_fill,h_500,w_500/l_sample/c_fill,h_200,w_200/fl_layer_apply/fl_layer_apply/sample');
  });


  it('Adds an overlay with position', () => {
    const tImage = new TransformableImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        imageLayer(
          image('sample'),
          Position.center()
        )
      );
    expect(tImage.toURL()).toContain('l_sample/fl_layer_apply,g_center/sample');
  });

  it('Adds an overlay with position', () => {
    const tImage = new TransformableImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        imageLayer(
          image('sample'),
          Position.center()
            .x(50)
            .y(100)
        )
      );
    expect(tImage.toURL()).toContain('l_sample/fl_layer_apply,g_center,x_50,y_100/sample');
  });

  it('Adds an overlay without position and with a blendMode', () => {
    const tImage = new TransformableImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        imageLayer(image('sample'), null, BlendMode.screen())
      );
    expect(tImage.toURL()).toContain('l_sample/e_screen,fl_layer_apply/sample');
  });
});
