import {Action} from "../../internal/Action";
import {LayerAction} from "../layer/LayerAction";
import {splice} from "../../values/flag/splice";
import {transition} from "../effect";
import {Overlay} from "../overlay";
import {Transformation} from "../../transformation/Transformation";
import {VideoSource} from "../../values/source/sourceTypes/VideoSource";

/**
 * @description Class for Concatenating another video.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenating_videos | Concatenating videos}
 * @augments Action
 */
class ConcatenateAction extends Action {
  private layer: LayerAction;
  private concatSource: VideoSource;
  private shouldTransition = false;

  constructor(source: VideoSource) {
    super();
    this.concatSource = source;
    // this.layer = Overlay.source(this.concatSource).setLayerType('l');
  }

  /**
   * @description Concatenates two videos one after the other, with custom transition
   * @param {VideoSource} source The source to concatenate.
   * @return {this}
   */
  transition(source: VideoSource): this {
    this.shouldTransition = true;
    this.concatSource
      .transformation(
        new Transformation()
          .overlay(Overlay.source(source)
            .setLayerType('l')
            // .setOpenLayerTransformation(transition())
          ));
    return this;
  }

  /**
   * @description Indicates that the video should be concatenated on to the container video and not added as an overlay.
   * @private
   */
  private prepareConcatString() {
    if (!this.shouldTransition) {
      // this.layer.setOpenLayerFlag(splice());
    }
  }

  toString(): string {
    this.prepareConcatString();
    // const open = this.concatSource.getOpener();
    // return `l_${open},fl_splice`;


    return this.layer.toString();
  }
}

export default ConcatenateAction;
