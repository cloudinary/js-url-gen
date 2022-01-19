import {Transformation} from '../../../src';
import {VideoEdit} from "../../../src/actions";

describe('videoEdit.trim toJson', () => {
  it('videoEdit.trim with duration', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.trim()
        .duration('30%')
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'trimVideo',
          duration: '30%',
        }
      ]
    });
  });

  it('videoEdit.trim with startOffset and endOffset', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .endOffset(5)
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'trimVideo',
          startOffset: 3,
          endOffset: 5,
        }
      ]
    });
  });

  it('videoEdit.trim with startOffset and duration', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .duration(5)
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'trimVideo',
          startOffset: 3,
          duration: 5,
        }
      ]
    });
  });
});
