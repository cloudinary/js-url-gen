import CloudinaryBase, {Actions} from "../../../src/index";

describe('Tests for the Main index namespace', () => {
  it('Test that Index exports Actions correctly', () => {
    expect(CloudinaryBase.Actions).toBe(Actions);
    expect(Actions.Resize).not.toBeUndefined();
  });
});
