import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";


class QualityAction extends Action implements IAction {
  private qualityLevel: number;
  constructor(qualityType?: string) {
    super();
    const paramQuality = this.createQualityParam(qualityType);
    this.addParam(paramQuality);
  }

  createQualityParam(effectType: string): Param {
    return new Param('q', effectType);
  }
}

export default QualityAction;
