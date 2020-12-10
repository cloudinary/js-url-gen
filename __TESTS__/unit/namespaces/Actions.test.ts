import {RoundCorners} from "../../../src/actions/roundCorners";
import {Actions} from "../../../src/actions";
import {Resize} from "../../../src/actions/resize";
import {Border} from "../../../src/actions/border";

describe('Tests for the Actions namespace', () => {
  it('Test that Actions exports different actions correctly', () => {
    expect(Actions.Border).toBe(Border);
    expect(Actions.Resize).toBe(Resize);
    expect(Actions.RoundCorners).toBe(RoundCorners);
  });
});
