import SmartObject from "../../../src/actions/getSmartObject/GetSmartObject";
import * as SmartObjectESM from '../../../src/actions/getSmartObject/GetSmartObject';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Border', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(SmartObjectESM, SmartObject);
  });

  it('Creates a cloudinaryURL with getSmartObject byIndex', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .getSmartObject(SmartObject.byIndex(7))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_embedded:7/sample');
  });

  it('Creates a cloudinaryURL with getSmartObject byFileName', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .getSmartObject(SmartObject.byFileName('my_file_name'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_embedded:name:my_file_name/sample');
  });


});
