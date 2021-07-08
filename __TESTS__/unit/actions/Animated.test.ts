import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {Animated} from "../../../src/actions/animated";

describe('Tests for Transformation Action -- Animated', () => {
  it('Creates a cloudinaryURL with animated', () => {
    const url = createNewImage('sample')
      .animated(Animated.edit().delay(200).loop(3))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/dl_200,e_loop:3/sample');
  });
});
