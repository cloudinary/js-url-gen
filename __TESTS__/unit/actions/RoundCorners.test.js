import RoundCorners, {radius, max} from 'actions/roundCorners/RoundCorners';
import TransformableImage from 'transformation/TransformableImage';

describe('Tests for Transformation Action -- RoundCorners', () => {
  it('Ensures "radius" is exported in the RoundCorners namespace', () => {
    expect(RoundCorners.radius).toEqual(radius);
  });

  it('Ensures "max" is exported in the RoundCorners namespace', () => {
    expect(RoundCorners.max).toEqual(max);
  });

  it('Is accepted as an action to TransformableImage', () => {
    let tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.roundCorners(radius(10))
    ).toEqual(tImage);

    expect(
      tImage.roundCorners(max())
    ).toEqual(tImage);
  });
});
