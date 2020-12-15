import {Position} from "../../../src/values/position";
import {Gravity} from "../../../src/values/gravity";
import {Compass} from "../../../src/values/gravity/qualifiers/compass/Compass";
import {FocusOn} from "../../../src/values/gravity/qualifiers/focusOn/FocusOn";


describe('Position Qualifier', () => {
  it('Tests an empty Position', () => {
    const posString = new Position()
      .toString();

    expect(posString).toBe('');
  });

  it('Tests the toString() method of Position (Compass Gravity)', () => {
    const posString = new Position()
      .allowOverflow()
      .tiled()
      .gravity(Gravity.compass(Compass.north()))
      .x(10)
      .y(10)
      .toString();

    expect(posString).toBe('fl_no_overflow.tiled,g_north,x_10,y_10');
  });

  it('Tests the toString() method of Position (FocusOn Gravity)', () => {
    const posString = new Position()
      .allowOverflow()
      .tiled()
      .gravity(Gravity.focusOn(FocusOn.cat()))
      .x(10)
      .y(10)
      .toString();

    expect(posString).toBe('fl_no_overflow.tiled,g_cat,x_10,y_10');
  });
});
