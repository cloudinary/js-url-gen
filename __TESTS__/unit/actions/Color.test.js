import Color, {bgColor, RED, GRAY, BLUE} from 'actions/color/Color';
import TransformableImage from 'transformation/TransformableImage';

describe('Tests for Transformation Action -- Color', () => {
  it('Is accepted as an action to TransformableImage', () => {
    let tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.color(bgColor(RED))
    ).toEqual(tImage);
  });
});
