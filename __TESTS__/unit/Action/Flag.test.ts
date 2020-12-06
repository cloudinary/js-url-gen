import {FlagQualifier} from "../../../src/values/flag/FlagQualifier";

describe('Tests for Flag', () => {
  it('Creates a Flag', () => {
    const flag = new FlagQualifier("single_flag");
    expect(flag.toString()).toBe('fl_single_flag');
  });
  it('Creates a Flag with multiple values', () => {
    const flag = new FlagQualifier(["first_flag", "second_flag"]);

    expect(flag.toString()).toBe('fl_first_flag.second_flag');
  });
});
