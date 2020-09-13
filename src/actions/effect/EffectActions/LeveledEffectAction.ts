import SimpleEffectAction from "./SimpleEffectAction";


class LeveledEffectAction extends SimpleEffectAction {
  protected effectType: string;
  constructor(effectType?: string, level?: number|string) {
    super(effectType, level);
    this.effectType = effectType;
  }

  protected setLevel(level: string | number): this {
    const paramEffect = this.createEffectParam(this.effectType, level);
    this.addParam(paramEffect);
    return this;
  }
}

export default LeveledEffectAction;
