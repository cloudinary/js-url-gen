import Resize, {minimumPad, scale} from 'actions/resize/Resize';
import TransformableImage from 'transformation/TransformableImage';

describe('Tests for Transformation Action -- Resize', () => {
  it('Ensures "minimumPad" is exported in the Resize namespace', () => {
    expect(Resize.minimumPad).toEqual(minimumPad);
  });

  it('Ensures minimumPad Is accepted as an action to TransformableImage', () => {
    let tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(minimumPad(250, 250))
    ).toEqual(tImage);
  });
});

describe('Tests for Transformation Action -- Scale', () => {
  it('Ensures "scale" is exported in the Resize namespace', () => {
    expect(Resize.scale).toEqual(scale);
  });

  it('Ensures scale Is accepted as an action to TransformableImage', () => {
    let tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(scale(250, 250))
    ).toEqual(tImage);
  });
});
