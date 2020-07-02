class ParamValue {
  values: any[] = [];
  delimiter = ':'; // {value}{delimiter}{value}...

  constructor(paramValue?: ParamValue | ParamValue[] | number | number[] | string | string[]) {
    if (paramValue) {
      this.addValue(paramValue);
    }
  }
  toString(): string {
    return this.values.join(this.delimiter);
  }

  addValue(value: unknown): this {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }

    return this;
  }

  setDelimiter(delimiter: string): this {
    this.delimiter = delimiter;

    return this;
  }
}

export default ParamValue;
