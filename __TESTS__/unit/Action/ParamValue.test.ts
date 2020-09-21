import QualifierValue from '../../../src/qualifier/QualifierValue';

describe('Tests for Param', () => {
  it('Creates a ParamValue', () => {
    const qualifierValue = new QualifierValue();
    expect(qualifierValue.toString()).toBe('');
  });
  it('Creates a ParamValue with single value', () => {
    const qualifierValue = new QualifierValue().addValue(90);

    expect(qualifierValue.toString()).toBe('90');
  });
  it('Creates a ParamValue with multiple values', () => {
    const qualifierValue = new QualifierValue().addValue(90).addValue(80);

    expect(qualifierValue.toString()).toBe('90:80');
  });

});
