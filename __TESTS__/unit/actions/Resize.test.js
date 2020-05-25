import Resize, {minimumPad, fill} from 'actions/resize/Resize';
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

describe('Tests for Transformation Action -- Fill', () => {
  it('Ensures "fill" is exported in the Resize namespace', () => {
    expect(Resize.fill).toEqual(fill);
  });

  it('Ensures fill Is accepted as an action to TransformableImage', () => {
    let tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(fill(250, 250))
    ).toEqual(tImage);
  });
});
