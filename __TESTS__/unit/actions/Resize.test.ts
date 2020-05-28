import Resize, {minimumPad} from 'actions/resize/Resize';
import TransformableImage from 'transformation/TransformableImage';

describe('Tests for Transformation Action -- Resize', () => {
  it('Ensures "minimumPad" is exported in the Resize namespace', () => {
    expect(Resize.minimumPad).toEqual(minimumPad);
  });

  it('Ensures minimumPad Is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(minimumPad(250, 250))
    ).toEqual(tImage);
  });
});
