import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class RecolorAction extends Action {
  readonly matrix: number[][];
  constructor(recolorMatrix:number[][]) {
    super();
    this.matrix = recolorMatrix;

    // Turn the matrix into a flat array of values
    // the values are ordered by row
    // [...row1, ...row2, ...row3, ..., row(n) ]
    const flat:string[] = [];
    for (let row = 0; row < recolorMatrix.length; row++) {

      for (let col = 0; col < recolorMatrix[row].length; col++) {
        flat.push(recolorMatrix[row][col].toString());
      }
    }

    const paramValue = new ParamValue(['recolor', ...flat]).setDelimiter(':');
    this.addParam(new Param('e', paramValue));
  }
}

export default RecolorAction;
