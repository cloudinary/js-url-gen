import {Action} from "../../internal/Action.js";
import {toFloatAsString} from "../../internal/utils/toFloatAsString.js";
import {IPreviewActionModel} from "../../internal/models/IPreviewActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Class for creating a preview of a video
 * @memberOf Actions.VideoEdit
 * @extends SDK.Action
 * @see Visit {@link Actions.VideoEdit|VideoEdit} for an example
 */
class PreviewAction extends Action {
  protected _actionModel: IPreviewActionModel;
  private _minSeg: string | number;
  private _maxSeg: string | number;
  private _duration: string | number;

  constructor() {
    super();
    this._actionModel = {
      actionType: 'preview'
    };
  }

  /**
   * @description Control the duration of the video segments
   * @param {string|number} minSegDuration The duration of a video segment
   * @return {this}
   */
  minimumSegmentDuration(minSegDuration: string | number): this {
    this._actionModel.minimumSegmentDuration = +minSegDuration;
    this._minSeg = minSegDuration;
    return this;
  }

  /**
   * @description Control the number of the video segments
   * @param {string|number} maxSeg The number of the video segments.
   * @return {this}
   */
  maximumSegments(maxSeg: string | number): this {
    this._actionModel.maximumSegments = +maxSeg;
    this._maxSeg = maxSeg;
    return this;
  }

  /**
   * @description control the length of the generated preview
   * @param {string|number} duration The duration in seconds such as 1.2, or 5.0
   * @return {this}
   */
  duration(duration: string | number): this {
    this._actionModel.duration = +duration;
    this._duration = duration;
    return this;
  }

  toString(): string {
    return [
      'e_preview',
      this._duration && `duration_${toFloatAsString(this._duration)}`,
      this._maxSeg && `max_seg_${this._maxSeg}`,
      this._minSeg && `min_seg_dur_${toFloatAsString(this._minSeg)}`
    ].filter((a) => a).join(':');
  }

  static fromJson(actionModel: IActionModel): PreviewAction {
    const {duration, maximumSegments, minimumSegmentDuration} = (actionModel as IPreviewActionModel);
    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this();
    if (duration != null){
      result.duration(duration);
    }

    if (maximumSegments != null){
      result.maximumSegments(maximumSegments);
    }

    if (minimumSegmentDuration != null){
      result.minimumSegmentDuration(minimumSegmentDuration);
    }

    return result;
  }
}

export {PreviewAction};
