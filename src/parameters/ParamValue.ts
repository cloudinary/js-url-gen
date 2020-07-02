class ParamValue {
  values: any[] = [];
  delimiter = '.'; // {value}{delimiter}{value}...

  constructor(paramValue?: ParamValue | ParamValue[] | number | number[] | string | string[]) {
    if (paramValue) {
      this.addValue(paramValue);
    }
  }

  toString() {
    return this.values.join(this.delimiter);
  }

  addValue(value: unknown) {
    //Append values or array of values
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }

    //remove empty values
    this.values = this.values.filter(v => v != null);

    return this;
  }
}

export default ParamValue;
