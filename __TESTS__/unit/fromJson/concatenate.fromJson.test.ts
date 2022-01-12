import {fromJson} from "../../../src/internal/fromJson";
import {IConcatenateActionModel} from "../../../src/internal/models/IConcatenateActionModel";

describe('concatenate.fromJson', () => {
  it('Should generate ConcatenateAction from model', ()=>{
    const concatenateModel: IConcatenateActionModel = {
      actionType: 'concatenate',
      source: {
        qualifierType: 'VideoSource',
        sourceType: 'video',
        publicId: 'dog'
      },
      prepend: true,
      duration: 1
    };

    const transformation = fromJson({actions:[concatenateModel]});

    expect(transformation.toString()).toStrictEqual('du_1,fl_splice,l_video:dog/fl_layer_apply,so_0');
  });

  it('Should generate ConcatenateAction with transition from model', ()=>{
    const concatenateModel: IConcatenateActionModel = {
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
    };

    const transformation = fromJson({actions:[concatenateModel]});

    expect(transformation.toString()).toStrictEqual('du_1,l_video:dog/e_transition,l_video:cat/fl_layer_apply/fl_layer_apply,so_0');
  });
});
