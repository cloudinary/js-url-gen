import {BlendMode} from "../../../src/values/blendMode";
import {Overlay} from "../../../src/actions/overlay";
import {Source} from "../../../src/values/source";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {sampleFacePosition} from "../../TestUtils/transformations/sampleFacePosition";
import {sampleTxResizePad} from "../../TestUtils/transformations/sampleTxResizePad";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {sampleTextStyle} from "../../TestUtils/transformations/sampleTextStyle";
import {Format, png} from "../../../src/values/format";
import {Underlay} from "../../../src/actions/underlay";
import {Timeline} from "../../../src/values/timeline";
import {base64Encode} from "../../../src/internal/utils/base64Encode";

describe('Tests for overlay actions', () => {
  it('Tests Image on Image with publicID encoding', () => {
    const asset = createNewImage();
    asset.overlay(
      Overlay.source(Source.image("path/to/sample")
        .format(Format.png())
      )
    );

    expect(asset.toString()).toBe('l_path:to:sample.png/fl_layer_apply');
  });

  it('Tests Image on Image with format', () => {
    const asset = createNewImage();
    asset.overlay(
      Overlay.source(Source.image("sample")
        .format(Format.png())
      )
    );

    expect(asset.toString()).toBe('l_sample.png/fl_layer_apply');
  });

  it('Tests Image on Image with BlendMode and Position', () => {
    const asset = createNewImage();

    asset.overlay(Overlay.source(Source.image("sample"))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(asset.toString()).toBe('l_sample/e_screen,fl_layer_apply,g_face');
  });

  it('Tests Image on Image with Transformation', () => {
    const asset = createNewImage();

    asset.overlay(
      Overlay.source(Source.image("sample")
        .transformation(sampleTxResizePad())
      )
    );

    expect(asset.toString()).toBe('l_sample/c_pad,w_100/fl_layer_apply');
  });

  it('Tests Video on Video with Transformation', () => {
    const asset = createNewVideo();

    asset.overlay(
      Overlay.source(Source.video("sample")
        .transformation(sampleTxResizePad())
      )
    );

    expect(asset.toString()).toBe('l_video:sample/c_pad,w_100/fl_layer_apply');
  });

  it('Tests text on image', () => {
    const asset = createNewImage();
    const textStyle = sampleTextStyle();

    asset.overlay(Overlay.source(
      Source.text('Testing', textStyle)
        .backgroundColor('red')
        .textColor('blue')
    ));

    expect(asset.toString()).toBe(`b_red,co_blue,l_text:${textStyle.toString()}:Testing/fl_layer_apply`);
  });

  it('Tests nested subtitles on image', () => {
    const asset = createNewImage();
    const textStyle = sampleTextStyle();

    asset.overlay(Overlay.source(
      Source.subtitles('path/to/subs.srt', textStyle)
    ));

    expect(asset.toString()).toBe(`l_subtitles:${textStyle.toString()}:path:to:subs.srt/fl_layer_apply`);
  });

  it('Tests subtitle on image', () => {
    const asset = createNewImage();
    const textStyle = sampleTextStyle();

    asset.overlay(Overlay.source(
      Source.subtitles('subs.srt', textStyle)
    ));

    expect(asset.toString()).toBe(`l_subtitles:${textStyle.toString()}:subs.srt/fl_layer_apply`);
  });

  it('Tests an overlay with a complete example', () => {
    const asset = createNewImage();

    asset.overlay(Overlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(asset.toString()).toBe('l_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Tests an underlay with a complete example', () => {
    const asset = createNewImage();

    asset.underlay(Underlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(asset.toString()).toBe('u_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Video on Video with timeline', () => {
    const asset = createNewVideo();

    asset.overlay(Overlay.source(Source.video("sample").transformation(sampleTxResizePad()))
      .timeline(Timeline.position().startOffset(10).duration(20))
      .position(sampleFacePosition())
    );

    expect(asset.toString()).toBe('l_video:sample/c_pad,w_100/du_20,fl_layer_apply,g_face,so_10');
  });

  it('Tests a fetchSource without format', () => {
    const asset = createNewVideo();
    const REMOTE_URL = "https://res.cloudinary.com/demo/image/upload/ci";
    const BASE64_URL = base64Encode(REMOTE_URL);

    asset.overlay(
      Overlay.source(
        Source.fetch(REMOTE_URL)
          .transformation(sampleTxResizePad())
      )
        .position(sampleFacePosition())
    );

    expect(asset.toString()).toContain(`l_fetch:${BASE64_URL}/${sampleTxResizePad().toString()}`);
  });

  it('Tests a fetchSource with format', () => {
    const asset = createNewImage('sample');
    const REMOTE_URL = "https://res.cloudinary.com/demo/image/upload/ci";

    asset.overlay(
      Overlay.source(
        Source.fetch(REMOTE_URL)
          .transformation(sampleTxResizePad())
          .format(png())
      )
    );

    // This is a fully functional URL that should work in the browser.
    // Explicitly check the resulting base64 string
    expect(asset.toString()).toContain(`l_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvY2k=.png/${sampleTxResizePad().toString()}`);
  });
});
