import Border, {solid} from 'actions/border/Border';
import TransformableImage from 'transformation/TransformableImage';

describe('Tests for Transformation Action -- Border', () => {
  it('Ensures "solid" is exported in the Border namespace', () => {
    expect(Border.solid).toEqual(solid);
  });

  it('Is accepted as an action to TransformableImage', () => {
    let tImage = new TransformableImage();
    tImage.addAction(solid().width(50).color('green'));
    expect(Border.solid).toEqual(solid);
  });

  it('Ensure the "solid" methods are chainable', () => {
    let instance = solid();

    expect(instance.width(50)).toEqual(instance);
    expect(instance.color('red')).toEqual(instance);
  });
});
