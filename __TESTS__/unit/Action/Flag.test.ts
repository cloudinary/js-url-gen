import Flag from '../../../src/parameters/flag';

describe('Tests for Flag', () => {
  it('Creates a Flag', () => {
    const flag = new Flag("single_flag");
    expect(flag.toString()).toBe('fl_single_flag');
  });
  it('Creates a Flag with multiple values', () => {
    const flag = new Flag(["first_flag", "second_flag"]);

    expect(flag.toString()).toBe('fl_first_flag.second_flag');
  });
});
