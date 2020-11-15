import CloudinaryInstance from '../../../src/instance/Cloudinary';
import {Actions, Cloudinary} from "../../../src/index";

describe('Tests for the Main index namespace', () => {
  it('Test that Index exports Actions correctly', () => {
    expect(Cloudinary).toBe(CloudinaryInstance);
    expect(Actions.Resize).not.toBeUndefined();
  });
});
