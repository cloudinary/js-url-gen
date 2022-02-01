import {Action} from "../../internal/Action.js";
import {TimelinePosition} from "../../qualifiers/video/TimelinePosition.js";
import {BlendModeQualifier} from "../../qualifiers/blendMode/BlendModeQualifier.js";
import {PositionQualifier} from "../../qualifiers/position/PositionQualifier.js";
import {FlagQualifier} from "../../qualifiers/flag/FlagQualifier.js";
import {Position} from "../../qualifiers/position.js";
import {BaseSource} from "../../qualifiers/source/BaseSource.js";
import {BlendModeType} from "../../types/types.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IOverlayActionModel} from "../../internal/models/IOverlayActionModel.js";
import {createSourceFromModel} from "../../internal/models/createSourceFromModel.js";
import {ImageSource} from "../../qualifiers/source/sourceTypes/ImageSource.js";
import {ITransformationFromJson} from "../../internal/models/IHasFromJson.js";
import {createPositionFromModel} from "../../internal/models/createPositionFromModel.js";
import {createTimelinePositionFromModel} from "../../internal/models/createTimelinePositionFromModel.js";
import {ISourceModel} from "../../internal/models/ISourceModel.js";
import {ITimelinePositionModel} from "../../internal/models/ITimelinePositionModel.js";
import {IPositionModel} from "../../internal/models/IPositionModel.js";


/**
 * @extends SDK.Action
 * @memberOf SDK
 * @description
 * A generic Layer action that can add a Video, Text or Image layer.<br>
 * This class can represent an overlay or an underlay.
 */
class LayerAction extends Action {
  private source: BaseSource;
  private _position:PositionQualifier;
  private _blendMode: BlendModeQualifier | BlendModeType;
  private _timelinePosition: TimelinePosition;
  protected _actionModel: IOverlayActionModel;
  layerType: 'u' | 'l';

  /**
   * @description Creates a LayerAction to be used with overlays and underlays
   * @param {ImageSource | TextSource | VideoSource} layerSource The Source used for the layer, use the builders provided {@link Qualifiers.Source|here}
   */
  constructor(layerSource: BaseSource) {
    super();
    this.source = layerSource;

    this._actionModel = {
      actionType: 'overlay',
      source: layerSource.toJson() as ISourceModel
    };
  }

  /**
   * @description Sets the layerType to 'u' (underlay) or 'l' (overlay).
   * @param {'u' | 'l'} type
   * @return {this}
   */
  setLayerType(type: 'u' | 'l'): this {
    this.layerType = type;
    this._actionModel.actionType = type === 'u' ? 'underlay' : 'overlay';

    return this;
  }

  /**
   * @description Sets the timeline position of the video layer
   * @param {Qualifiers.TimelinePosition} timelinePosition
   * @return {this}
   */
  timeline(timelinePosition: TimelinePosition): this {
    this._timelinePosition = timelinePosition;
    this._actionModel.timelinePosition = timelinePosition.toJson() as unknown as ITimelinePositionModel;

    return this;
  }

  /**
   * @description Sets the position of the layer
   * @param {Qualifiers.Position} position
   * @return {this}
   */
  position(position: Position): this {
    this._position = position;
    this._actionModel.position = position.toJson() as unknown as IPositionModel;

    return this;
  }

  /**
   * @description Specifies how to blend the image overlay with the base overlay
   * @param {Qualifiers.BlendMode|BlendModeType} blendMode
   * @return {this}
   */
  blendMode(blendMode: BlendModeType|BlendModeQualifier): this {
    this._blendMode = blendMode;
    this._actionModel.blendMode = `${blendMode}`.replace('e_', '');

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

    // Flags are stored separately from qualifiers, we need to add those as well
    this._position?.flags.forEach((flag) => {
      bit.addFlag(flag);
    });

    if(typeof this._blendMode === "string"){
      bit.addQualifier(new Qualifier('e', this._blendMode));
    }else{
      this._blendMode?.qualifiers.forEach((qualifier) => {
        bit.addQualifier(qualifier);
      });
    }
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
    return `${this.source.getOpenSourceString(this.layerType)}`;
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

  static fromJson(actionModel: IActionModel, transformationFromJson: ITransformationFromJson): LayerAction {
    const {source, actionType, position, timelinePosition, blendMode} = (actionModel as IOverlayActionModel);
    const sourceInstance = createSourceFromModel(source, transformationFromJson) as ImageSource;

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(sourceInstance);
    const layerType = actionType === 'overlay' ? 'l' : 'u';
    result.setLayerType(layerType);

    if (position) {
      result.position(createPositionFromModel(position));
    }

    if (timelinePosition) {
      result.timeline(createTimelinePositionFromModel(timelinePosition));
    }

    if (blendMode) {
      result.blendMode(blendMode as unknown as BlendModeQualifier);
    }

    return result;
  }
}

export {LayerAction};
