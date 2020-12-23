import * as VideoEdit from '../../../src/actions/videoEdit';
import {CloudinaryVideo} from "../../../src/assets/CloudinaryVideo";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as Volume from "../../../src/values/volume";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {Concatenate} from "../../../src/values/concatenate";
import {Transition} from "../../../src/values/transition";
import {Effect} from "../../../src/actions/effect";
import {Transformation} from "../../../src/transformation/Transformation";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


describe('Tests for Transformation Action -- VideoEdit', () => {
  it('Creates a cloudinaryURL with concatenate', () => {
    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
      )
      .toString();

    // fl_splice,l_video:dog/{videoTransformation}/fl_layer_apply
    expect(url).toContain('fl_splice,l_video:dog/fl_layer_apply');
  });

  it('Creates a cloudinaryURL with concatenate prepend', () => {
    const url = new CloudinaryVideo()
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
          .prepend() // implicitly true
      )
      .toString();

    expect(url).toBe('fl_splice,l_video:dog/fl_layer_apply,so_0');
  });

  it('Creates a cloudinaryURL with concatenate with transition', () => {
    const src = Concatenate.imageSource("sample");
    src.transformation(new Transformation());
    src.getTransformation().effect(Effect.sepia());

    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.concatenate(src)
          .transition(Transition.videoSource("transition1"))
          .duration(5)
      ).toString();

    expect(url).toBe('du_5,l_sample/e_sepia/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply');
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
