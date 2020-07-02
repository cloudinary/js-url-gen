import ParamValue from './ParamValue';
import {IKeyObject} from "../interfaces/IKeyObject";

class Param implements IKeyObject{
  key: string;
  paramValue: ParamValue;
  delimiter = '_'; // {key}{delimiter}{paramValue}

  constructor(key: string, paramValue?: ParamValue | ParamValue[] | number | number[] | string | string[]) {
    this.key = key;
    if (paramValue instanceof ParamValue) {
      this.paramValue = paramValue;
    } else {
      this.paramValue = new ParamValue();
      this.paramValue.addValue(paramValue);
    }
  }

  toString() {
    const {key, delimiter, paramValue} = this;

    return `${key}${delimiter}${paramValue.toString()}`;
  }

  addValue(value: unknown) {
    this.paramValue.addValue(value);

    return this;
  }
}

export default Param;
