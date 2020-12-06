import Action from "../Action";
import {ISource} from "../../values/sources/ISource";
import {VideoRange} from "../../values/video/VideoRange";
import Qualifier from "../../qualifier/Qualifier";
import {BlendModeQualifier} from "../../values/blendMode/BlendModeQualifier";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import SimpleEffectAction from "../effect/EffectActions/SimpleEffectAction";
import {FlagQualifier} from "../../values/flag/FlagQualifier";


/**
 * @description
 * A generic Layer action that can add a Video, Text or Image layer.<br>
 * This class can represent an overlay or an underlay.
 * @class LayerAction
 * @augments Action
 */
class LayerAction extends Action {
  source: ISource;
  position:PositionQualifier;
  blendMode: BlendModeQualifier;
  timeLinePosition: VideoRange;
  modifications: Action; // Appends modifications to the layer, such as e_style_transfer
  layerType: string;
  flag: FlagQualifier;
  private effect: SimpleEffectAction;
  constructor(layerSource: ISource, position:PositionQualifier, blendMode: BlendModeQualifier|null=null, timeLinePosition: VideoRange|null=null) {
    super();
    this.source = layerSource;
    this.position = position;
    this.blendMode = blendMode;
    this.timeLinePosition = timeLinePosition;
    this.modifications = new Action();
  }

  /**
   * Sets the layerType to 'u' (underlay) or 'l' (overlay).
   * @param type
   */
  setLayerType(type: 'u' | 'l'): this {
    this.layerType = type;
    return this;
  }

  /**
   * Sets a flag to take effect at the point specified in the transformation.
   * @param {Flag} flag
   * @return {this}
   */
  setOpenLayerFlag(flag:FlagQualifier): this{
    this.flag = flag;
    return this;
  }

  /**
   * Sets an effect action to start at the point specified in the transformation.
   * @param effect
   * @return {this}
   */
  setOpenLayerTransformation(effect: SimpleEffectAction): this{
    this.effect = effect;
    return this;
  }

  /**
   * Opens a layer (layers are built in three stages -> /Open/Transform/Close).
   */
  openLayer(): string {
    if(this.flag) {
      return `${this.layerType}_${this.source.getSource()},${this.flag}`;
    } else if(this.effect) {
      return `${this.layerType}_${this.source.getSource()},${this.effect}`;
    }

    return `${this.layerType}_${this.source.getSource()}`;
  }

  /**
   * Applies a transformation to the layer (layers are built in three stages -> /Open/Transform/Close).
   */
  layerTransformation():string {
    return this.source.getTransformationString();
  }

  /**
   * @description
   * Closes a layer (layers are built in three stages -> /Open/Transform/Close).
   */
  closeLayer():Action {
    const bit = new Action().addFlag(new FlagQualifier('layer_apply'));

    this.position?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    this.blendMode?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    this.timeLinePosition?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    if (this.timeLinePosition) {
      // TODO: This is just for testing. remove this after implementing VideoRange
      bit.addQualifier(new Qualifier("so", 7));
    }

    this.modifications?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    return bit;
  }

  toString():string{
    // Since layerTransformation can be empty, we filter out empty strings.
    return [this.openLayer(), this.layerTransformation(), this.closeLayer()].filter((a) => a).join('/');
  }
}

export {LayerAction};
