import {SimpleEffectAction} from "./SimpleEffectAction.js";
import {ExpressionQualifier} from "../../../qualifiers/expression/ExpressionQualifier.js";
import {IEffectActionWithLevelModel} from "../../../internal/models/IEffectActionWithLevelModel.js";

/**
 * @description A base class for effects with a level, the extending class needs to implement a method that calls setLevel()
 * @extends {Actions.Effect.SimpleEffectAction}
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class LeveledEffectAction extends SimpleEffectAction {
  protected _actionModel: IEffectActionWithLevelModel = {};
  protected effectType: string;
  constructor(effectType?: string, level?: number|string) {
    super(effectType, level);
    this.effectType = effectType;
    this._actionModel.actionType = effectType;
  }

  /**
   *
   * @description Sets the effect level for the action
   * @param {string | number} level - The strength of the effect
   * @protected
   */
  protected setLevel(level: string | number | ExpressionQualifier): this {
    this._actionModel.level = level as number;
    const qualifierEffect = this.createEffectQualifier(this.effectType, level);
    this.addQualifier(qualifierEffect);
    return this;
  }
}

export {LeveledEffectAction};
