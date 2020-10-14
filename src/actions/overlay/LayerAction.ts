import Action from "../Action";
import {ISource} from "../../values/sources/ISource";
import {VideoRange} from "../../values/video/VideoRange";
import {Flag} from "../../values/flag/Flag";
import Qualifier from "../../qualifier/Qualifier";
import {BlendModeQualifier} from "../../values/blendMode/BlendModeQualifier";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import SimpleEffectAction from "../effect/EffectActions/SimpleEffectAction";


/**
 * @description
 * A generic Layer action that can a Video, Text or Image layer
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
  flag: Flag;
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
   * @@docs
   * Sets the layerType with u | l depending if underlay or overlay
   * @param type
   */
  setLayerType(type: 'u' | 'l'): this {
    this.layerType = type;
    return this;
  }

  /**
   * @@docs
   * Sets a flag in the first bit (Open)
   * @param {Flag} flag
   */
  setOpenLayerFlag(flag:Flag){
    this.flag = flag;
    return this;
  }

  /**
   * @@docs
   * Sets an effect in the first bit (Open)
   * @param effect
   */
  setOpenLayerTransformation(effect: SimpleEffectAction){
    this.effect = effect;
    return this;
  }

  /**
   * @@docs
   * Layers are built using three bits -> /Open/Transform/Close
   * The opening of a layer
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
   * @@docs
   * Layers are built using three bits -> /Open/Transform/Close
   * Transformations conducted on the image in the layer
   */
  layerTransformation():string {
    return this.source.getTransformationString();
  }

  /**
   * @@docs
   * @description
   * Layers are built using three bits -> /Open/Transform/Close
   * this function returns a string that closes the layer
   */
  closeLayer():Action {
    const bit = new Action().addFlag(new Flag('layer_apply'));

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
