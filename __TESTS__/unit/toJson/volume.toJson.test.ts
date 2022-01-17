import {Transformation} from '../../../src';
import {VideoEdit} from "../../../src/actions";
import {byDecibels, byPercent, mute} from "../../../src/qualifiers/volume";

describe('videoEdit.trim toJson', () => {
  it('videoEdit.volume with decibels', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.volume(byDecibels(10))
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'volume',
          volumeValue: {
            mode: 'decibels',
            value: 10
          }
        }
      ]
    });
  });

  it('videoEdit.volume with percent', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.volume(byPercent(10))
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'volume',
          volumeValue: {
            mode: 'percent',
            value: 10
          }
        }
      ]
    });
  });

  it('videoEdit.volume with mute', () => {
    const transformation = new Transformation()
      .videoEdit(VideoEdit.volume(mute())
      );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'volume',
          volumeValue: {
            mode: 'mute'
          }
        }
      ]
    });
  });
});
