import {fromJson} from "../../../src/internal/fromJson";
import {IVolumeActionModel} from "../../../src/internal/models/IVolumeActionModel";

describe('videoEdit.volume fromJson', () => {
  it('Should generate VolumeAction with percentage from model', () => {
    const trimModel: IVolumeActionModel = {
      actionType: 'volume',
      volumeValue: {
        mode: "percent",
        value: 10
      }
    };

    const transformation = fromJson({actions: [trimModel]});

    expect(transformation.toString()).toStrictEqual('e_volume:10');
  });

  it('Should generate VolumeAction with decibels from model', () => {
    const trimModel: IVolumeActionModel = {
      actionType: 'volume',
      volumeValue: {
        mode: "decibels",
        value: 10
      }
    };

    const transformation = fromJson({actions: [trimModel]});

    expect(transformation.toString()).toStrictEqual('e_volume:10db');
  });

  it('Should generate VolumeAction with mute from model', () => {
    const trimModel: IVolumeActionModel = {
      actionType: 'volume',
      volumeValue: {
        mode: "mute",
      }
    };

    const transformation = fromJson({actions: [trimModel]});

    expect(transformation.toString()).toStrictEqual('e_volume:mute');
  });
});
