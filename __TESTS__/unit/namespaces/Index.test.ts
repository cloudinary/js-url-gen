import {Cloudinary} from "../../../src/instance/Cloudinary";

describe('Tests for the Main index namespace', () => {
  it('Test that Index exports Actions correctly', () => {
    expect(Cloudinary).toBeDefined();
  });
});
