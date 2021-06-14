import {
  CloudinaryImage,
  CloudinaryVideo,
  Transformation,
  Cloudinary,
  Qualifiers,
  Actions,
  ImageTransformation
} from '../../src/index';
import {image} from "../../src/qualifiers/source";
import {sepia} from "../../src/actions/effect";
import {source} from "../../src/actions/overlay";

describe('Ensures index exports correctly', () => {
  it('Exports correctly', () => {
    expect(CloudinaryImage).toBeDefined();
    expect(CloudinaryVideo).toBeDefined();
    expect(Transformation).toBeDefined();
    expect(Cloudinary).toBeDefined();
    expect(Qualifiers).toBeDefined();
    expect(Actions).toBeDefined();
  });
});


/**
 * @param urlToParse - the url to parse
 */
const foo = async (urlToParse: string) => {};

/**
 *
 */
async function bar() {

}



