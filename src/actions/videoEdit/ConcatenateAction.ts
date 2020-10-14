import Action from "../Action";
import {VideoSource} from "../../values/sources/sourceTypes/VideoSource";
import {LayerAction} from "../overlay/LayerAction";
import {imageLayer} from "../overlay/Overlay";
import Flag from "../../values/flag/Flag";
import Effect from "../../../src/actions/effect/Effect";

/**
 * @description Class for Concatenating another video.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenating_videos | Concatenating videos}
 * @class ConcatenateAction
 * @augments Action
 */
class ConcatenateAction extends Action {
  private layer: LayerAction;
  private concatSource: VideoSource;
  private shouldTransition = false;

  constructor(source:VideoSource) {
    super();
    this.concatSource = source;
    this.layer = imageLayer(this.concatSource).setLayerType('l');

  }

  /**
   * @description Concatenates two videos one after the other, with custom transition
   * @param {VideoSource} source The source to concatenate.
   */
  transition(source:VideoSource): this{
    this.shouldTransition = true;
    this.concatSource
      .overlay(imageLayer(source)
        .setLayerType('l')
        .setOpenLayerTransformation(Effect.transition()));

    return this;
  }

  /**
   * @description Indicates that the video should be concatenated on to the container video and not added as an overlay.
   * @private
   */
  private prepareConcatString(){
    if(!this.shouldTransition){
      this.layer.setOpenLayerFlag(Flag.splice());
    }
  }

  toString(): string {
    this.prepareConcatString();
    return this.layer.toString();
  }
}

export default ConcatenateAction;
