import {QualifierValue} from './QualifierValue';

/**
 * @memberOf SDK
 */
class Qualifier {
  key: string;
  qualifierValue: QualifierValue;
  delimiter = '_'; // {key}{delimiter}{qualifierValue}

  constructor(key: string, qualifierValue?: QualifierValue | QualifierValue[] | number | string | (string | number)[]) {
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue).setDelimiter('.');
    }
  }

  toString(): string {
    const {key, delimiter, qualifierValue} = this;

    return `${key}${delimiter}${qualifierValue.toString()}`;
  }

  addValue(value: unknown): this {
    this.qualifierValue.addValue(value);

    return this;
  }
}

export {Qualifier};
