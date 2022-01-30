import {IOverlayActionModel} from "../../../src/internal/models/IOverlayActionModel";
//import {IImageSourceModel} from "../../../src/internal/models/IImageSourceModel";
import {fromJson} from "../../../src/internal/fromJson";

describe('Overlay fromJson', () => {
  it('Should generate Overlay from model', () => {
    const overlayModel: IOverlayActionModel = {
      actionType: 'overlay',
      source: {
        sourceType: 'image',
        publicId: 'demo'
      }
    };

    const transformation = fromJson({actions: [overlayModel]});

    expect(transformation.toString()).toStrictEqual('l_demo/fl_layer_apply');
  });
});
