import ParamValue from '../../../src/parameters/ParamValue';

describe('Tests for Param', () => {
  it('Creates a ParamValue', () => {
    const paramValue = new ParamValue();
    expect(paramValue.toString()).toBe('');
  });
  it('Creates a ParamValue with single value', () => {
    const paramValue = new ParamValue().addValue(90);

    expect(paramValue.toString()).toBe('90');
  });
  it('Creates a ParamValue with multiple values', () => {
    const paramValue = new ParamValue().addValue(90).addValue(80);

    expect(paramValue.toString()).toBe('90.80');
  });

});
