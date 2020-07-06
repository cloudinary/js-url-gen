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
    // Append value or array of values
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    // Remove falsy values
    this.values = this.values.filter((v) => v);

    return this;
  }

  setDelimiter(delimiter: string): this {
    this.delimiter = delimiter;

    return this;
  }
}

export default ParamValue;
