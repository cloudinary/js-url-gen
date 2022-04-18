import {Transformation} from "../../../src";
import {Overlay} from "../../../src/actions/overlay";
import {Source} from "../../../src/qualifiers/source";
import {scale} from "../../../src/actions/resize";
import {Position} from "../../../src/qualifiers/position";
import {
  FontHinting,
  FontStyle,
  FontWeight,
  Gravity,
  Stroke,
  TextAlignment,
  TextDecoration
} from "../../../src/qualifiers";
import {Compass} from "../../../src/qualifiers/compass";
import {Timeline} from "../../../src/qualifiers/timeline";
import {BlendMode} from "../../../src/qualifiers/blendMode";
import {TextStyle} from "../../../src/qualifiers/textStyle";
import {FontAntialias} from "../../../src/qualifiers/FontAntialias";
import {Underlay} from "../../../src/actions";

describe('Overlay & Underlay toJson', () => {
  it('Should generate Overlay model for image source', () => {
    const transformation = new Transformation();
    transformation.addAction(
      Overlay.source(Source.image('sample').transformation(new Transformation().resize(scale(100).aspectRatio(7))))
        .position(new Position().offsetX(1).offsetY(2).tiled().allowOverflow().gravity(Gravity.compass(Compass.northEast())))
        .blendMode(BlendMode.multiply())
    );

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'overlay',
          source: {
            sourceType: 'image',
            publicId: 'sample',
            transformation: {
              actions: [
                {actionType: 'scale', dimensions: {width: 100, aspectRatio: '7.0'}}
              ]
            }
          },
          position: {
            offsetX: 1,
            offsetY: 2,
            tiled: true,
            allowOverflow: true,
            gravity: {gravityType: 'direction', compass: 'north_east'}
          },
          blendMode: { blendModeType:'multiply' }
        }
      ]
    });
  });

  it('Should generate Overlay model for video source', () => {
    const transformation = new Transformation();
    transformation.addAction(
      Overlay.source(Source.video('dog.mp4').transformation(new Transformation().resize(scale(100).aspectRatio(7))))
        .position(new Position().offsetX(1).offsetY(2).tiled().allowOverflow().gravity(Gravity.compass(Compass.northEast())))
        .timeline(Timeline.position().startOffset(1).duration(2))
    );

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'overlay',
          source: {
            sourceType: 'video',
            publicId: 'dog.mp4',
            transformation: {
              actions: [
                {actionType: 'scale', dimensions: {width: 100, aspectRatio: '7.0'}}
              ]
            }
          },
          position: {
            offsetX: 1,
            offsetY: 2,
            tiled: true,
            allowOverflow: true,
            gravity: {gravityType: 'direction', compass: 'north_east'}
          },
          timelinePosition: {
            startOffset: '1',
            duration: '2'
          }
        }
      ]
    });
  });

  it('Should generate Overlay model for fetch source', () => {
    const transformation = new Transformation();
    transformation.addAction(
      Overlay.source(Source.fetch('https://some/image.jpg').transformation(new Transformation().resize(scale(100).aspectRatio(7))))
        .position(new Position().offsetX(1).offsetY(2).tiled().allowOverflow().gravity(Gravity.compass(Compass.northEast())))
        .blendMode(BlendMode.multiply())
    );

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'overlay',
          source: {
            sourceType: 'fetch',
            url: 'https://some/image.jpg',
            transformation: {
              actions: [
                {actionType: 'scale', dimensions: {width: 100, aspectRatio: '7.0'}}
              ]
            }
          },
          position: {
            offsetX: 1,
            offsetY: 2,
            tiled: true,
            allowOverflow: true,
            gravity: {gravityType: 'direction', compass: 'north_east'}
          },
          blendMode: {blendModeType: 'multiply'}
        }
      ]
    });
  });

  it('Should generate Underlay model for text source', () => {
    const transformation = new Transformation();
    transformation.addAction(
      Underlay.source(Source.text('example', new TextStyle('arial', 1)
        .fontWeight(FontWeight.bold())
        .fontStyle(FontStyle.italic())
        .fontAntialias(FontAntialias.fast())
        .fontHinting(FontHinting.slight())
        .textDecoration(TextDecoration.strikethrough())
        .textAlignment(TextAlignment.center())
        .stroke(Stroke.solid(2, 'white'))
        .letterSpacing(2.3)
        .lineSpacing(3.2)
      )
        .textColor('red')
        .backgroundColor('blue')
        .transformation(new Transformation().resize(scale(100).aspectRatio(7))))
    );

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'underlay',
          source: {
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
                {actionType: 'scale', dimensions: {width: 100, aspectRatio: '7.0'}}
              ]
            }
          }
        }
      ]
    });
  });

  it('Should generate Underlay model for subtitles source', () => {
    const transformation = new Transformation();
    transformation.addAction(
      Underlay.source(Source.subtitles('example').textStyle(new TextStyle('arial', 1)
        .fontWeight(FontWeight.bold())
        .fontStyle(FontStyle.italic())
        .fontAntialias(FontAntialias.fast())
        .fontHinting(FontHinting.slight())
        .textDecoration(TextDecoration.strikethrough())
        .textAlignment(TextAlignment.center())
        .stroke(Stroke.solid(2, 'white'))
        .letterSpacing(2.3)
        .lineSpacing(3.2)
      )
        .textColor('red')
        .backgroundColor('blue')
        .transformation(new Transformation().resize(scale(100).aspectRatio(7))))
    );

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'underlay',
          source: {
            sourceType: 'subtitles',
            publicId: 'example',
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
                {actionType: 'scale', dimensions: {width: 100, aspectRatio: '7.0'}}
              ]
            }
          }
        }
      ]
    });
  });

  it('Should generate Overlay model for source with Blendmode.antiRemoval', () => {
    const transformation = new Transformation();
    transformation.addAction(
      Overlay.source(Source.fetch('https://some/image.jpg').transformation(new Transformation().resize(scale(100).aspectRatio(7))))
        .position(new Position().offsetX(1).offsetY(2).tiled().allowOverflow().gravity(Gravity.compass(Compass.northEast())))
        .blendMode(BlendMode.antiRemoval(95))
    );

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'overlay',
          source: {
            sourceType: 'fetch',
            url: 'https://some/image.jpg',
            transformation: {
              actions: [
                {actionType: 'scale', dimensions: {width: 100, aspectRatio: '7.0'}}
              ]
            }
          },
          position: {
            offsetX: 1,
            offsetY: 2,
            tiled: true,
            allowOverflow: true,
            gravity: {gravityType: 'direction', compass: 'north_east'}
          },
          blendMode: {blendModeType: 'antiRemoval', level: '95'}
        }
      ]
    });
  });
});
