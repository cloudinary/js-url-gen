import {IOverlayActionModel} from "../../../src/internal/models/IOverlayActionModel";
import {fromJson} from "../../../src/internal/fromJson";
import {IImageSourceModel} from "../../../src/internal/models/IImageSourceModel";
import {IPositionModel} from "../../../src/internal/models/IPositionModel";
import {ITimelinePositionModel} from "../../../src/internal/models/ITimelinePositionModel";
import {ITextSourceModel} from "../../../src/internal/models/ITextSourceModel";
import {IFetchSourceModel} from "../../../src/internal/models/IFetchSourceModel";
import {IVideoSourceModel} from "../../../src/internal/models/IVideoSourceModel";

const position: IPositionModel = {
  offsetX: 1,
  offsetY: 2,
  tiled: true,
  allowOverflow: true,
  gravity: {gravityType: 'direction', compass: 'north_east'}
};

describe('Overlay & Underlay fromJson', () => {
  it('Should generate Overlay for image source', () => {
    const source: IImageSourceModel = {
      sourceType: 'image',
      publicId: 'sample',
      transformation: {
        actions: [
          {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
        ]
      }
    };

    const overlayModel: IOverlayActionModel = {
      actionType: 'overlay',
      source,
      position,
      blendMode: {blendModeType: 'multiply'}
    };

    const overlayTransformation = fromJson({actions: [overlayModel]});
    const underlayTransformation = fromJson({actions: [{...overlayModel, actionType: 'underlay'}]});

    expect(overlayTransformation.toString()).toStrictEqual('l_sample/ar_7.0,c_scale,w_100/e_multiply,fl_layer_apply,fl_tiled,g_north_east,x_1,y_2');
    expect(underlayTransformation.toString()).toStrictEqual('u_sample/ar_7.0,c_scale,w_100/e_multiply,fl_layer_apply,fl_tiled,g_north_east,x_1,y_2');
  });

  it('Should generate Overlay for video source', () => {
    const source: IVideoSourceModel = {
      sourceType: 'video',
      publicId: 'dog.mp4',
      transformation: {
        actions: [
          {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
        ]
      }
    };

    const timelinePosition: ITimelinePositionModel = {
      startOffset: 1,
      duration: 2
    };

    const overlayModel: IOverlayActionModel = {
      actionType: 'overlay',
      source,
      position,
      timelinePosition,
      blendMode: {blendModeType: 'antiRemoval', level: '96'}
    };

    const overlayTransformation = fromJson({actions: [overlayModel]});
    const underlayTransformation = fromJson({actions: [{...overlayModel, actionType: 'underlay'}]});

    expect(overlayTransformation.toString()).toStrictEqual('l_video:dog.mp4/ar_7.0,c_scale,w_100/du_2,e_anti_removal:96,fl_layer_apply,fl_tiled,g_north_east,so_1,x_1,y_2');
    expect(underlayTransformation.toString()).toStrictEqual('u_video:dog.mp4/ar_7.0,c_scale,w_100/du_2,e_anti_removal:96,fl_layer_apply,fl_tiled,g_north_east,so_1,x_1,y_2');
  });

  it('Should generate Overlay for fetch source', () => {
    const source: IFetchSourceModel = {
      sourceType: 'fetch',
      url: 'https://some/image.jpg',
      transformation: {
        actions: [
          {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
        ]
      }
    };


    const overlayModel: IOverlayActionModel = {
      actionType: 'overlay',
      source,
      position,
      blendMode: {blendModeType: 'antiRemoval'}
    };

    const overlayTransformation = fromJson({actions: [overlayModel]});
    const underlayTransformation = fromJson({actions: [{...overlayModel, actionType: 'underlay'}]});

    expect(overlayTransformation.toString()).toStrictEqual('l_fetch:aHR0cHM6Ly9zb21lL2ltYWdlLmpwZw==/ar_7.0,c_scale,w_100/e_anti_removal,fl_layer_apply,fl_tiled,g_north_east,x_1,y_2');
    expect(underlayTransformation.toString()).toStrictEqual('u_fetch:aHR0cHM6Ly9zb21lL2ltYWdlLmpwZw==/ar_7.0,c_scale,w_100/e_anti_removal,fl_layer_apply,fl_tiled,g_north_east,x_1,y_2');
  });

  it('Should generate Overlay for text source', () => {
    const source: ITextSourceModel = {
      sourceType: 'text',
      text: 'example',
      textStyle: {
        fontFamily: 'arial',
        fontSize: 1,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontAntialias: 'fast',
        fontHinting: 'slight',
        textDecoration: 'strikethrough',
        textAlignment: 'center',
        stroke: {width: 2, color: 'white'},
        letterSpacing: 2.3,
        lineSpacing: 3.2
      },
      textColor: 'red',
      backgroundColor: 'blue',
      transformation: {
        actions: [
          {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
        ]
      }
    };

    const overlayModel: IOverlayActionModel = {
      actionType: 'overlay',
      source,
    };

    const overlayTransformation = fromJson({actions: [overlayModel]});
    const underlayTransformation = fromJson({actions: [{...overlayModel, actionType: 'underlay'}]});
    expect(overlayTransformation.toString()).toStrictEqual('b_blue,co_red,l_text:arial_1_bold_italic_strikethrough_center_stroke_bo_2px_solid_white_letter_spacing_2.3_line_spacing_3.2_antialias_fast_hinting_slight:example/ar_7.0,c_scale,w_100/fl_layer_apply');
    expect(underlayTransformation.toString()).toStrictEqual('b_blue,co_red,u_text:arial_1_bold_italic_strikethrough_center_stroke_bo_2px_solid_white_letter_spacing_2.3_line_spacing_3.2_antialias_fast_hinting_slight:example/ar_7.0,c_scale,w_100/fl_layer_apply');
  });

  it('Should generate Overlay for subtitles source', () => {
    const source: ITextSourceModel = {
      sourceType: 'text',
      text: 'example',
      textStyle: {
        fontFamily: 'arial',
        fontSize: 1,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontAntialias: 'fast',
        fontHinting: 'slight',
        textDecoration: 'strikethrough',
        textAlignment: 'center',
        stroke: {width: 2, color: 'white'},
        letterSpacing: 2.3,
        lineSpacing: 3.2
      },
      textColor: 'red',
      backgroundColor: 'blue',
      transformation: {
        actions: [
          {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}}
        ]
      }
    };

    const overlayModel: IOverlayActionModel = {
      actionType: 'overlay',
      source,
    };

    const overlayTransformation = fromJson({actions: [overlayModel]});
    const underlayTransformation = fromJson({actions: [{...overlayModel, actionType: 'underlay'}]});
    expect(overlayTransformation.toString()).toStrictEqual('b_blue,co_red,l_text:arial_1_bold_italic_strikethrough_center_stroke_bo_2px_solid_white_letter_spacing_2.3_line_spacing_3.2_antialias_fast_hinting_slight:example/ar_7.0,c_scale,w_100/fl_layer_apply');
    expect(underlayTransformation.toString()).toStrictEqual('b_blue,co_red,u_text:arial_1_bold_italic_strikethrough_center_stroke_bo_2px_solid_white_letter_spacing_2.3_line_spacing_3.2_antialias_fast_hinting_slight:example/ar_7.0,c_scale,w_100/fl_layer_apply');
  });
});
