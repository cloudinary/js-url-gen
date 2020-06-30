import Param from '../../../src/parameters/Param';
import ParamValue from '../../../src/parameters/ParamValue';

describe('Tests for Param', () => {
  it('Creates a Param', () => {
    const param = new Param("a", 90);
    expect(param.toString()).toBe('a_90');
  });
  it('Creates a Param with multiple values', () => {
    const param = new Param("a", [90, 80]);

    expect(param.toString()).toBe('a_90.80');
  });
  it('Creates a Param, passing ParamValue to constructor', () => {
    const param = new Param("a", new ParamValue(90));

    expect(param.toString()).toBe('a_90');
  });
});
