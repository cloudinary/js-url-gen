import Qualifier from '../../../src/qualifier/Qualifier';
import QualifierValue from '../../../src/qualifier/QualifierValue';

describe('Tests for Qualifier', () => {
  it('Creates a Qualifier', () => {
    const qualifier = new Qualifier("a", 90);
    expect(qualifier.toString()).toBe('a_90');
  });
  it('Creates a Qualifier with multiple values', () => {
    const qualifier = new Qualifier("a", new QualifierValue([90, 80]).setDelimiter('.'));

    expect(qualifier.toString()).toBe('a_90.80');
  });
  it('Creates a Qualifier, passing QualifierValue to constructor', () => {
    const qualifier = new Qualifier("a", new QualifierValue(90));

    expect(qualifier.toString()).toBe('a_90');
  });
});
