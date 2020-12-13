import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import {fill} from "../../../src/actions/resize";
import * as Layers from "../../../src/actions/overlay";
import * as BlendMode from "../../../src/values/blendMode";
import {VideoRange, VideoOffset} from "../../../src/values/video";
import format from "../../../src/actions/delivery/format";
import {image, video} from "../../../src/values/sources";
import {CloudinaryVideo} from "../../../src/assets/CloudinaryVideo";
import {Position} from "../../../src/values/position";
import {Compass} from "../../../src/values/gravity/qualifiers/compass/Compass";
import {Gravity} from "../../../src/values/gravity";

const {imageLayer, videoLayer} = Layers;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for overlay actions', () => {
  it('Parses an overlay with an imageSource', () => {
    const tImage = new CloudinaryImage('sample');
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
      .toBe('https://res.cloudinary.com/demo/image/upload/c_fill,h_1000,w_1000/l_sample/c_fill,h_500,w_500/l_sample/c_fill,h_200,w_200/fl_layer_apply/fl_layer_apply/sample');
  });


  it('Adds an overlay with position', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        imageLayer(
          image('sample'),
          new Position().gravity(Gravity.compass(Compass.center())
          )
        )
      );
    expect(tImage.toURL()).toContain('l_sample/fl_layer_apply,g_center/sample');
  });

  it('Adds an overlay with position', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        imageLayer(
          image('sample'),
          new Position()
            .gravity(Gravity.compass(Compass.center()))
            .x(50)
            .y(100)
        )
      );
    expect(tImage.toURL()).toContain('l_sample/fl_layer_apply,g_center,x_50,y_100/sample');
  });

  it('Adds an overlay without position and with a blendMode', () => {
    const tImage = new CloudinaryImage('sample');
    tImage
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        imageLayer(image('sample'), null, BlendMode.screen())
      );
    expect(tImage.toURL()).toContain('l_sample/e_screen,fl_layer_apply/sample');
  });
  it('Adds a video overlay', () => {
    const tVideo = new CloudinaryVideo('dog');
    tVideo
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        videoLayer(video('dog'), null, new VideoRange(new VideoOffset(7)))
      );
    //TODO: update this dummy test to be a real test when spec is ready
    expect(tVideo.toURL()).toContain('l_dog');
  });
  it('Adds a video overlay and converts to jpg', () => {
    const tVideo = new CloudinaryVideo('dog');
    tVideo
      .setConfig(CONFIG_INSTANCE)
      .overlay(
        videoLayer(video('dog'), null, new VideoRange(new VideoOffset(7)))
      )
      .delivery(format('jpg'));
    //TODO: update this dummy test to be a real test when spec is ready
    expect(tVideo.toURL()).toContain('l_dog/');
  });
});
