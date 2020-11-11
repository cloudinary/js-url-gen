import * as Actions from "../../../src/actions/Actions";
import * as Border from "../../../src/actions/border/Border";
import * as Resize from "../../../src/actions/resize/Resize";
import * as RoundCorners from "../../../src/actions/roundCorners/RoundCorners";


describe('Tests for the Actions namespace', () => {
  it('Test that Actions exports different actions correctly', () => {
    expect(Actions.Border).toBe(Border);
    expect(Actions.Resize).toBe(Resize);
    expect(Actions.RoundCorners).toBe(RoundCorners);
  });
});
