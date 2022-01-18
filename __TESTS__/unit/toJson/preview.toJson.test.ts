import {Transformation} from '../../../src';
import {VideoEdit} from "../../../src/actions";

describe('videoEdit.preview toJson', () => {
  it('Should return a json representation of given preview action', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.preview()
        .duration(1)
        .maximumSegments(10)
        .minimumSegmentDuration(1)
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'preview',
          duration: 1,
          maximumSegments: 10,
          minimumSegmentDuration: 1
        }
      ]
    });
  });
});
