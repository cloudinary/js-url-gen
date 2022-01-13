import {Transformation} from '../../../src';
import {Concatenate} from "../../../src/qualifiers/concatenate";
import {VideoEdit} from "../../../src/actions";
import {Format} from "../../../src/qualifiers";

describe('concatenate.toJson()', () => {
  it('Concatenate video source + prepend + duration + transition', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.concatenate(Concatenate.videoSource('dog'))
        .prepend()
        .duration(1)
        .transition(Concatenate.videoSource('cat'))
      );
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'concatenate',
        source: {
          sourceType: 'video',
          publicId: 'dog'
        },
        prepend: true,
        duration: 1,
        transition: {

          sourceType: 'video',
          publicId: 'cat'
        }
      }
    ]});
  });

  it('Concatenate image source + prepend + duration + transition', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.concatenate(Concatenate.imageSource('dog').format(Format.jpg()))
        .prepend()
        .duration(1)
        .transition(Concatenate.videoSource('cat'))
      );
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'concatenate',
        source: {
          sourceType: 'image',
          publicId: 'dog.jpg'
        },
        prepend: true,
        duration: 1,
        transition: {
          sourceType: 'video',
          publicId: 'cat'
        }
      }
    ]});
  });
});
