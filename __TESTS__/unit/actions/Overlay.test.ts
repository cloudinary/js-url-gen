import {fill} from "../../../src/actions/resize/Resize";
import {overlayLayer} from "../../../src/actions/layers/Layers";
import {imageSource} from "../../../src/actions/layers/Sources";
import TransformableImage from "../../../src/transformation/TransformableImage";

describe('Tests for overlay actions', () => {
  it('Parses an overlay with an imageSource', () => {
    const tImage = new TransformableImage('sample');
    tImage
      .setConfig({
        cloud: {
          cloudName: 'demo'
        }
      })
      .resize(fill(1000, 1000))
      .overlay(
        overlayLayer(
          imageSource('sample')
            .resize(fill(500, 500))
            .overlay(
              overlayLayer(
                imageSource('sample')
                  .resize(fill(200, 200)
                  )
              )
            )
        )
      );

    expect(tImage.toURL())
      .toBe('http://res.cloudinary.com/demo/image/upload/c_fill,h_1000,w_1000/l_sample/c_fill,h_500,w_500/l_sample/c_fill,h_200,w_200/fl_layer_apply/fl_layer_apply/sample');
  });
});
