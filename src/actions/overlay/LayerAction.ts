import {Action} from "../../internal/Action";
import {TimelinePosition} from "../../values/video/TimelinePosition";
import {BlendModeQualifier} from "../../values/blendMode/BlendModeQualifier";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import {FlagQualifier} from "../../values/flag/FlagQualifier";
import {Position} from "../../values/position";
import {BaseSource} from "../../values/source/BaseSource";


/**
 * @description
 * A generic Layer action that can add a Video, Text or Image layer.<br>
 * This class can represent an overlay or an underlay.
 * @class LayerAction
 * @augments Action
 */
class LayerAction extends Action {
  private source: BaseSource;
  private _position:PositionQualifier;
  private _blendMode: BlendModeQualifier;
  private _timelinePosition: TimelinePosition;
  layerType: 'u' | 'l';

  constructor(layerSource: BaseSource) {
    super();
    this.source = layerSource;
  }

  /**
   * Sets the layerType to 'u' (underlay) or 'l' (overlay).
   * @param type
   */
  setLayerType(type: 'u' | 'l'): this {
    this.layerType = type;
    return this;
  }

  timeline(timelinePosition: TimelinePosition) {
    this._timelinePosition = timelinePosition;
    return this;
  }

  position(position: Position): this {
    this._position = position;
    return this;
  }

  blendMode(blendMode: BlendModeQualifier): this {
    this._blendMode = blendMode;
    return this;
  }

  /**
   * @description
   * Closes a layer (layers are built in three stages -> /Open/Transform/Close).
   */
  closeLayer():Action {
    const bit = new Action().addFlag(new FlagQualifier('layer_apply'));

    this._position?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    this._blendMode?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    this._timelinePosition?.qualifiers.forEach((qualifier) => {
      bit.addQualifier(qualifier);
    });

    return bit;
  }

  private openLayer(): string {
    return `${this.layerType}_${this.source.getOpenSourceString()}`;
  }


  toString():string{
    return [
      this.openLayer(),
      this.source.getTransformation() && this.source.getTransformation().toString(),
      this.closeLayer()
    ].filter((a) => a).join('/');
  }
}

export {LayerAction};
