import {Action} from "../../internal/Action";
import {TimelinePosition} from "../../values/video/TimelinePosition";
import {BlendModeQualifier} from "../../values/blendMode/BlendModeQualifier";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import {FlagQualifier} from "../../values/flag/FlagQualifier";
import {Position} from "../../values/position";
import {BaseSource} from "../../values/source/BaseSource";


/**
 * @extends {SDK.Action}
 * @memberOf SDK
 * @description
 * A generic Layer action that can add a Video, Text or Image layer.<br>
 * This class can represent an overlay or an underlay.
 */
class LayerAction extends Action {
  private source: BaseSource;
  private _position:PositionQualifier;
  private _blendMode: BlendModeQualifier;
  private _timelinePosition: TimelinePosition;
  layerType: 'u' | 'l';

  /**
   * @description Creates a LayerAction to be used with overlays and underlays
   * @param {ImageSource | TextSource | VideoSource} layerSource The Source used for the layer, use the builders provided {@link Values.Source|here}
   */
  constructor(layerSource: BaseSource) {
    super();
    this.source = layerSource;
  }

  /**
   * @description Sets the layerType to 'u' (underlay) or 'l' (overlay).
   * @param {'u' | 'l'} type
   * @return {this}
   */
  setLayerType(type: 'u' | 'l'): this {
    this.layerType = type;
    return this;
  }

  /**
   * @description Sets the timeline position of the video layer
   * @param {Values.TimelinePosition} timelinePosition
   * @return {this}
   */
  timeline(timelinePosition: TimelinePosition): this {
    this._timelinePosition = timelinePosition;
    return this;
  }

  /**
   * @description Sets the position of the layer
   * @param {Values.Position} position
   * @return {this}
   */
  position(position: Position): this {
    this._position = position;
    return this;
  }

  /**
   * @description Specifies how to blend the image overlay with the base overlay
   * @param {Values.BlendMode} blendMode
   * @return {this}
   */
  blendMode(blendMode: BlendModeQualifier): this {
    this._blendMode = blendMode;
    return this;
  }

  /**
   * @private
   * @description
   * Closes a layer (layers are built in three stages -> /Open/Transform/Close).
   * @return {SDK.Action}
   */
  private closeLayer():Action {
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

  /**
   * @private
   * @description
   * Opens a layer (layers are built in three stages -> /Open/Transform/Close).
   * @return string
   */
  private openLayer(): string {
    return `${this.layerType}_${this.source.getOpenSourceString()}`;
  }


  /**
   * @description
   * Serializes the Layer to a string
   * @return {string}
   */
  toString():string{
    return [
      this.openLayer(),
      this.source.getTransformation() && this.source.getTransformation().toString(),
      this.closeLayer()
    ].filter((a) => a).join('/');
  }
}

export {LayerAction};
