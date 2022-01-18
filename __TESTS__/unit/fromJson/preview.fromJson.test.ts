import {fromJson} from "../../../src/internal/fromJson";
import {IPreviewActionModel} from "../../../src/internal/models/IPreviewActionModel";

describe('videoEdit.preview fromJson', () => {
  it('Should generate PreviewAction from model', () => {
    const previewModel: IPreviewActionModel = {
      actionType: 'preview',
      duration: 5,
      maximumSegments: 10,
      minimumSegmentDuration: 1
    };

    const transformation = fromJson({actions: [previewModel]});

    expect(transformation.toString()).toStrictEqual('e_preview:duration_5.0:max_seg_10:min_seg_dur_1.0');
  });
});
