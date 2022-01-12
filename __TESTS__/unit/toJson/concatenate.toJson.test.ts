import {Transformation} from '../../../src';
import {Concatenate} from "../../../src/qualifiers/concatenate";
import {VideoEdit} from "../../../src/actions";

describe('concatenate.toJson()', () => {
  it('Concatenate + prepend + duration + transition', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.concatenate(Concatenate.videoSource('dog'))
        .prepend()
        .duration(1)
        .transition(Concatenate.videoSource('cat'))
      );
    expect(transformation.toJson()).toStrictEqual([
      {
        actionType: 'concatenate',
        source: {
          qualifierType: 'VideoSource',
          sourceType: 'video',
          publicId: 'dog'
        },
        prepend: true,
        duration: 1,
        transition: {
          qualifierType: 'VideoSource',
          sourceType: 'video',
          publicId: 'cat'
        }
      }
    ]);
  });
});
