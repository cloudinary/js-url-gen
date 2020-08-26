import Resize, * as ResizeESM from '../../../src/actions/resize/Resize';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {AutoGravity} from "../../../src/constants/gravityObjects/GravityObjects";
import Gravity from "../../../src/params/gravity/Gravity";
import * as GravityObjects from '../../../src/constants/gravityObjects/GravityObjects';
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import ResizeAction from "../../../src/actions/resize/ResizeAction";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


/**
 * Utility function for resize image tests
 * @param resizeAction
 * @param type
 */
function getImageWithResize(resizeAction: ResizeAction, type:'url' | 'image') {
  const img = new TransformableImage('sample')
    .setConfig(CONFIG_INSTANCE)
    .resize(resizeAction);

  if (type === 'image') {
    return img;
  }

  if (type === 'url') {
    return img.toURL();
  }
}


describe('Tests for Transformation Action -- Resize', () => {
  it('Ensure ESM and Default export the same thing', () => {
    expectESMToMatchDefault(ResizeESM, Resize);
  });

  it('Ensures MinimumPad generates the right URL', () => {
    const url = getImageWithResize(Resize.minimumPad(250, 250), 'url');
    expect(url).toContain('c_mpad');
  });

  it('Ensures Crop pad generates the right URL', () => {
    const url = getImageWithResize(Resize.crop(250, 250), 'url');
    expect(url).toContain('c_crop');
  });

  it('Ensures Crop pad generates the right URL', () => {
    const url = getImageWithResize(Resize.crop(100, 100), 'url');
    expect(url).toContain('c_crop,h_100,w_100');
  });

  it('Ensures crop generates the right URL with only width', () => {
    const url = getImageWithResize(Resize.crop(100), 'url');
    expect(url).toContain('c_crop,w_100');
  });

  it('Ensures Fill generates the right URL with width and height', () => {
    const url = getImageWithResize(Resize.fill(250, 250), 'url');
    expect(url).toContain('c_fill');
  });

  it('Ensures Fill generates the right URL with only width', () => {
    const url = getImageWithResize(Resize.fill(100), 'url');
    expect(url).toContain('c_fill,w_100');
  });

  it('Ensures Scale generates the right URL', () => {
    const url = getImageWithResize(Resize.scale(250, 250), 'url');
    expect(url).toContain('c_scale');
  });

  it('Ensures Scale generates the right URL', () => {
    const url = getImageWithResize(Resize.scale(100), 'url');
    expect(url).toContain('c_scale,w_100');
  });

  it('Ensures minimumPad generates the right URL', () => {
    const url = getImageWithResize(Resize.minimumPad(100), 'url');
    expect(url).toContain('c_mpad,w_100');
  });

  it('Ensures imaggaCrop generates the right URL', () => {
    const url = getImageWithResize(Resize.imaggaCrop(100), 'url');
    expect(url).toContain('c_imagga_crop,w_100');
  });

  it('Ensures imaggaScale generates the right URL', () => {
    const url = getImageWithResize(Resize.imaggaScale(100), 'url');
    expect(url).toContain('c_imagga_scale,w_100');
  });

  it('Ensures aspectRatio generates the right URL', () => {
    const url = getImageWithResize(Resize.scale(100).aspectRatio(0.5), 'url');
    expect(url).toContain('ar_0.5,c_scale,w_100');
  });

  it('Ensures fit generates the right URL', () => {
    const url = getImageWithResize(Resize.fit(100), 'url');
    expect(url).toContain('c_fit,w_100');
  });

  it('Ensures limitFill generates the right URL', () => {
    const url = getImageWithResize(Resize.limitFill(100), 'url');
    expect(url).toContain('c_lfill,w_100');
  });

  it('Ensures limitFit generates the right URL', () => {
    const url = getImageWithResize(Resize.limitFit(100), 'url');
    expect(url).toContain('c_limit,w_100');
  });

  it('Ensures limitPad generates the right URL', () => {
    const url = getImageWithResize(Resize.limitPad(100), 'url');
    expect(url).toContain('c_lpad,w_100');
  });

  it('Ensures minimumFit generates the right URL', () => {
    const url = getImageWithResize(Resize.minimumFit(100), 'url');
    expect(url).toContain('c_mfit,w_100');
  });

  it('Ensures pad generates the right URL', () => {
    const url = getImageWithResize(Resize.pad(100), 'url');
    expect(url).toContain('c_pad,w_100');
  });

  it('Ensures thumbnail generates the right URL', () => {
    const url = getImageWithResize(Resize.thumbnail(100), 'url');
    expect(url).toContain('c_thumb,w_100');
  });

  it('Ensures FillPad generates the right URL', () => {
    const url = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .resize(
        Resize.fillPad(400)
      )
      .toURL();

    expect(url).toContain('c_fill_pad,w_400');
  });


  it('Ensures Gravity generates the right URL', () => {
    const url = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .resize(
        Resize.fill(400)
          .aspectRatio(0.8)
          .gravity(Gravity.auto()))
      .toURL();

    expect(url).toContain('ar_0.8,c_fill,g_auto,w_400');
  });

  it('Ensures Gravity generates the right URL - with object', () => {
    const url = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .resize(
        Resize.fill(400)
          .aspectRatio(0.8)
          .gravity(Gravity.object(GravityObjects.BIRD))
      )
      .toURL();

    expect(url).toContain('ar_0.8,c_fill,g_bird,w_400');
  });

  it('Ensures Gravity generates the right URL - with objects', () => {
    const url = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .resize(
        Resize.fill(400)
          .aspectRatio(0.8)
          .gravity(Gravity.auto(AutoGravity.object(GravityObjects.CAT)))
      )
      .toURL();

    expect(url).toContain('ar_0.8,c_fill,g_auto:cat,w_400');
  });

  it('Accepts x y and z', () => {
    const url = getImageWithResize(Resize.scale(100).x(1).y(2).zoom(3), 'url');
    expect(url).toContain('c_scale,w_100,x_1,y_2,z_3');
  });
});
