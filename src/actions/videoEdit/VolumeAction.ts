import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IVolumeActionModel} from "../../internal/models/IVolumeActionModel.js";

/**
 * @description Class to Controls the volume of an audio or video file.
 * @extends SDK.Action
 * @memberOf Actions.VideoEdit
 * @see Visit {@link Actions.VideoEdit|VideoEdit} for an example
 */
class VolumeAction extends Action {
  protected _actionModel: IVolumeActionModel;

  constructor(volumeValue: string | number) {
    super();

    const mode = volumeValue === 'mute' ? 'mute' : (`${volumeValue}`.endsWith('db') ? 'decibels' : 'percent');
    this._actionModel = {
      actionType: 'volume',
      volumeValue: { mode }
    };

    if (mode !== 'mute'){
      this._actionModel.volumeValue.value = +(`${volumeValue}`.replace('db', ''));
    }

    const qualifierValue = new QualifierValue(['volume', volumeValue]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
  }

  static fromJson(actionModel: IActionModel): VolumeAction {
    const {volumeValue} = (actionModel as IVolumeActionModel);
    const {mode} = volumeValue;
    const value = mode === 'mute' ? mode : volumeValue.value;
    const suffix = (mode === 'mute' || mode === "percent") ? '' : 'db';


    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    return new this(`${value}${suffix}`);
  }
}

export default VolumeAction;
