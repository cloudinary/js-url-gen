import {Gravity} from "../../../../src/values/gravity/Gravity";
import {AutoFocus} from "../../../../src/values/gravity/qualifiers/autoFocus/AutoFocus";
import {FocusOn} from "../../../../src/values/gravity/qualifiers/focusOn/FocusOn";

describe('Gravity Qualifier', () => {
  it('AutoGravity should return g_auto by default', () => {
    const gAutoStr = Gravity.autoGravity().toString();
    expect(gAutoStr).toBe('g_auto');
  });

  it('AutoGravity with focus should return g_auto:{obj}', () => {
    const gAutoStr = Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.person())).toString();
    expect(gAutoStr).toBe('g_auto:person');
  });

  it('AutoGravity with focus should return g_auto:{obj}:{obj}', () => {
    const gAutoStr = Gravity.autoGravity().autoFocus(
      AutoFocus.focusOn(FocusOn.person()),
      AutoFocus.focusOn(FocusOn.cat())
    ).toString();

    expect(gAutoStr).toBe('g_auto:person:cat');
  });
});
