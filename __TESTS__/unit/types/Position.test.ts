import {Position} from "../../../src/values/position";
import {Gravity} from "../../../src/values/gravity";
import {Compass} from "../../../src/values/compass";
import {FocusOn} from "../../../src/values/focusOn";
import {Overlay} from "../../../src/actions/overlay";
import {Source} from "../../../src/values/source";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";


describe('Position Qualifier', () => {
  it('Tests an empty Position', () => {
    const posString = new Position()
      .toString();

    expect(posString).toBe('');
  });

  it('Tests the toString() method of Position (Compass Gravity)', () => {
    const posString = new Position()
      .allowOverflow(false)
      .tiled()
      .gravity(Gravity.compass(Compass.north()))
      .offsetX(10)
      .offsetY(10)
      .toString();

    expect(posString).toBe('fl_no_overflow,fl_tiled,g_north,x_10,y_10');
  });

  it('Tests the toString() method of Position (FocusOn Gravity)', () => {
    const posString = new Position()
      .allowOverflow(false)
      .tiled()
      .gravity(Gravity.focusOn(FocusOn.cat()))
      .offsetX(10)
      .offsetY(10)
      .toString();

    expect(posString).toBe('fl_no_overflow,fl_tiled,g_cat,x_10,y_10');
  });

  it('Tests a tiled overlay', () => {
    const tAsset = createNewImage('sample')
      .overlay(Overlay.source(Source.image('sample'))
        .position(new Position()
          .tiled()));


    expect(tAsset.toString()).toBe('l_sample/fl_layer_apply,fl_tiled');
  });
});
