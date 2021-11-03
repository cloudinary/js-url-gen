import {Action} from "../../../internal/Action.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {ExpressionQualifier} from "../../../qualifiers/expression/ExpressionQualifier.js";
import {ACTION_TYPE_TO_EFFECT_MODE_MAP, EFFECT_MODE_TO_ACTION_TYPE_MAP} from "../../../internal/internalConstants.js";
import {ISimpleEffectActionModel} from "../../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../../internal/models/IActionModel.js";
import {IEffectActionWithLevelModel} from "../../../internal/models/IEffectActionModel.js";

/**
 * @description A class that defines a simple effect of the type e_{effectName}
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class SimpleEffectAction extends Action {
  protected _actionModel: ISimpleEffectActionModel = {};
  constructor(effectType?: string, level?: number|string) {
    super();
    this._actionModel.actionType = EFFECT_MODE_TO_ACTION_TYPE_MAP[effectType] || effectType;
    const qualifierEffect = this.createEffectQualifier(effectType, level);
    this.addQualifier(qualifierEffect);
  }

  protected createEffectQualifier(effectType: string, level?: number|string|ExpressionQualifier):Qualifier {
    let qualifierValue;
    if(level) {
      qualifierValue = new QualifierValue([effectType, `${level}`]).setDelimiter(':');
    } else {
      qualifierValue = new QualifierValue(effectType);
    }
    return new Qualifier('e', qualifierValue);
  }

  static fromJson(actionModel: IActionModel): SimpleEffectAction {
    const {actionType, level} = (actionModel as IEffectActionWithLevelModel);
    const effectType = ACTION_TYPE_TO_EFFECT_MODE_MAP[actionType] || actionType;

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(effectType, level);

    return result;
  }
}

export {SimpleEffectAction};
