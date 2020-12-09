import * as VideoEdit from '../../../src/actions/videoEdit';
import {CloudinaryVideo} from "../../../src/assets/CloudinaryVideo";
import * as Sources from "../../../src/values/sources";

import CloudinaryConfig from "../../../src/sdk/config/CloudinaryConfig";
import * as Volume from "../../../src/values/volume";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- VideoEdit', () => {
  it('Creates a cloudinaryURL with concatenate', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.concatenate(Sources.video('sample')))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/l_sample,fl_splice/fl_layer_apply/sample');
  });

  it('Creates a cloudinaryURL with concatenate.transition', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.concatenate(Sources.video('sample'))
        .transition(Sources.video('dog')))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/l_sample/l_dog,e_transition/fl_layer_apply/fl_layer_apply/sample');
  });

  it('Creates a cloudinaryURL with trim', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .endOffset(4)
        .duration(10))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/du_10,eo_4,so_3/sample');
  });

  it('Creates a cloudinaryURL with volume string', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.volume('5db'))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:5db/sample');
  });

  it('Creates a cloudinaryURL with volume number', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.volume(10))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:10/sample');
  });

  it('Creates a cloudinaryURL with volume Volume.mute()', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.volume(Volume.mute()))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:mute/sample');
  });

  it('Creates a cloudinaryURL with volume Volume.byDecibels()', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.volume(Volume.byDecibels(5)))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:5db/sample');
  });

  it('Creates a cloudinaryURL with volume Volume.byPercent()', () => {
    const url = new CloudinaryVideo()
      .setConfig(CONFIG_INSTANCE)
      .videoEdit(VideoEdit.volume(Volume.byPercent('10')))
      .setAssetType('video')
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:10/sample');
  });
});
