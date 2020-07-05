import Border, {solid} from '../../../src/actions/border/Border';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Border', () => {
  it('Ensures "solid" is exported in the Border namespace', () => {
    expect(Border.solid).toEqual(solid);
  });

  it('Is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.border(solid().width(50).color('green'))
    ).toEqual(tImage);
  });

  it('Ensure the "solid" methods are chainable', () => {
    const borderActionInstance = solid();

    expect(borderActionInstance.width(50)).toEqual(borderActionInstance);
    expect(borderActionInstance.color('red')).toEqual(borderActionInstance);
  });

  it('Creates a cloudinaryURL with border', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.solid()
        .width(7)
        .color('red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/bo_7px_solid_red/sample');
  });
});
