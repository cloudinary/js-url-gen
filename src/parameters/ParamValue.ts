class ParamValue {
  values: any[] = [];
  delimiter = '.'; // {value}{delimiter}{value}...

  toString() {
    return this.values.join(this.delimiter);
  }

  addValue(value: unknown) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }

    return this;
  }
}

export default ParamValue;
