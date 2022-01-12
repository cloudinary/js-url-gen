import {Transformation} from '../../../src';
import {Concatenate} from "../../../src/qualifiers/concatenate";
import ConcatenateAction from "../../../src/actions/videoEdit/ConcatenateAction";

describe('concatenate.toJson()', () => {
  it('Concatenate + prepend + duration + transition', () => {
    const transformation = new Transformation()
      .videoEdit(
        new ConcatenateAction(Concatenate.videoSource('dog'))
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
