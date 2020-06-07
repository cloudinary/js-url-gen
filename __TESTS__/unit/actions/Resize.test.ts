import Resize, {minimumPad, crop, fill, scale} from '../../../src/actions/resize/Resize';
import TransformableImage from '../../../src/transformation/TransformableImage';

describe('Tests for Transformation Action -- Resize', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Resize.minimumPad).toEqual(minimumPad);
    expect(Resize.crop).toEqual(crop);
    expect(Resize.fill).toEqual(fill);
    expect(Resize.scale).toEqual(scale);
  });

  it('Ensures minimumPad is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(minimumPad(250, 250))
    ).toEqual(tImage);
  });

  it('Ensures crop is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(crop(250, 250))
    ).toEqual(tImage);
  });

  it('Ensures fill is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(fill(250, 250))
    ).toEqual(tImage);
  });

  it('Ensures scale is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(scale(250, 250))
    ).toEqual(tImage);
  });
});
