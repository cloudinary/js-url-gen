import {fromJson} from "../../../src/internal/fromJson";
import {IConcatenateActionModel} from "../../../src/internal/models/IConcatenateActionModel";

describe('concatenate.fromJson', () => {
  it('Should generate ConcatenateAction from model', () => {
    const concatenateModel: IConcatenateActionModel = {
      actionType: 'concatenate',
      source: {
        sourceType: 'video',
        publicId: 'dog'
      },
      prepend: true,
      duration: 1
    };

    const transformation = fromJson({actions: [concatenateModel]});

    expect(transformation.toString()).toStrictEqual('du_1,fl_splice,l_video:dog/fl_layer_apply,so_0');
  });

  it('Should generate ConcatenateAction with transition from model', () => {
    const concatenateModel: IConcatenateActionModel = {
      actionType: 'concatenate',
      source: {
        sourceType: 'video',
        publicId: 'dog',
        transformation: {
          actions: [
            {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
          ]
        }
      },
      prepend: true,
      duration: 1,
      transition: {

        sourceType: 'video',
        publicId: 'cat'
      }
    };

    const transformation = fromJson({actions: [concatenateModel]});
    expect(transformation.toString()).toStrictEqual('du_1,l_video:dog/ar_7.0,c_scale,w_100/e_transition,l_video:cat/fl_layer_apply/fl_layer_apply,so_0');
  });

  it('Should generate ConcatenateAction with ImageSource and transition from model', () => {
    const concatenateModel: IConcatenateActionModel = {
      actionType: 'concatenate',
      source: {
        sourceType: 'image',
        publicId: 'dog',
        transformation: {
          actions: [
            {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
          ]
        }
      },
      prepend: true,
      duration: 1,
      transition: {

        sourceType: 'video',
        publicId: 'cat'
      }
    };

    const transformation = fromJson({actions: [concatenateModel]});

    expect(transformation.toString()).toStrictEqual('du_1,l_dog/ar_7.0,c_scale,w_100/e_transition,l_video:cat/fl_layer_apply/fl_layer_apply,so_0');
  });

  it('Should generate ConcatenateAction with FetchSource and transition from model', () => {
    const concatenateModel: IConcatenateActionModel = {
      actionType: 'concatenate',
      source: {
        sourceType: 'fetch',
        url: 'https://example.com',
        format: 'jpg'
      },
      prepend: true,
      duration: 1,
      transition: {

        sourceType: 'video',
        publicId: 'cat'
      }
    };

    const transformation = fromJson({actions: [concatenateModel]});

    expect(transformation.toString()).toStrictEqual('du_1,l_fetch:aHR0cHM6Ly9leGFtcGxlLmNvbQ==.jpg/e_transition,l_video:cat/fl_layer_apply/fl_layer_apply,so_0');
  });
});
