import Effect, {blur, blurFaces, pixelateFaces, grayscale, sepia} from '../../../src/actions/effect/Effect';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as ArtisticFilter from "../../../src/constants/artisticFilters/ArtisticFilters";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Effect', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Effect.blur).toEqual(blur);
    expect(Effect.blurFaces).toEqual(blurFaces);
    expect(Effect.pixelateFaces).toEqual(pixelateFaces);
    expect(Effect.grayscale).toEqual(grayscale);
    expect(Effect.sepia).toEqual(sepia);
  });

  it('Ensures blur is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(blur())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect blur', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blur())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur/sample');
  });

  it('Creates a cloudinaryURL with effect blur:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blur(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur:50/sample');
  });

  it('Ensures blurFaces is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(blurFaces())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect blurFaces', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blurFaces())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur_faces/sample');
  });

  it('Creates a cloudinaryURL with effect blur_faces:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.blurFaces(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_blur_faces:50/sample');
  });

  it('Ensures pixelateFaces is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(pixelateFaces())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect pixelateFaces', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.pixelateFaces())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_pixelate_faces/sample');
  });

  it('Creates a cloudinaryURL with effect pixelate_faces:50', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.pixelateFaces(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_pixelate_faces:50/sample');
  });

  it('Ensures grayscale is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(grayscale())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect grayscale', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.grayscale())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_grayscale/sample');
  });

  it('Ensures sepia is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.effect(sepia())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with effect sepia', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.sepia())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_sepia/sample');
  });

  it('Creates a cloudinaryURL with effect artisticFilter', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .effect(Effect.artisticFilter(ArtisticFilter.PEACOCK))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_peacock/sample');
  });
});
