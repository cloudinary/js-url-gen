import {Action} from "../../../internal/Action.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";
import {IActionModel} from "../../../internal/models/IActionModel.js";
import {
  IAccelerateActionModel
} from "../../../internal/models/IEffectActionModel.js";

/**
 * @description Changes the speed of the video playback using the rate() method
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class AccelerationEffectAction extends Action {
  private _rate: string | number;
  protected _actionModel: IAccelerateActionModel = {actionType: 'accelerate'};

  constructor(rate: string | number) {
    super();

    rate && this.rate(rate);
  }

  rate(rate: number | string): this {
    this._actionModel.rate = rate;
    this._rate = rate;
    return this;
  }

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['accelerate', this._rate]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }

  static fromJson(actionModel: IActionModel): AccelerationEffectAction {
    const {rate} = (actionModel as IAccelerateActionModel);
    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    // @ts-ignore
    const result = new this() as AccelerationEffectAction;
    rate && result.rate(rate);

    return result;
  }
}


export {AccelerationEffectAction};
