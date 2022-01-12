import {QualifierValue} from './QualifierValue.js';
import {QualifierModel} from '../models/QualifierModel.js';

/**
 * @summary SDK
 * @memberOf SDK
 */
class Qualifier extends QualifierModel{
  key: string;
  qualifierValue: QualifierValue;
  delimiter = '_'; // {key}{delimiter}{qualifierValue}

  constructor(key: string, qualifierValue?: QualifierValue | QualifierValue[] | number | string | (string | number)[]) {
    super();
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue);
    }
  }

  toString(): string {
    const {key, delimiter, qualifierValue} = this;

    return `${key}${delimiter}${qualifierValue.toString()}`;
  }

  addValue(value: any): this {
    this.qualifierValue.addValue(value);

    return this;
  }
}

export {Qualifier};
