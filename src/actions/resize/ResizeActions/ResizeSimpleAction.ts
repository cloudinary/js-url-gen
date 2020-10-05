import Qualifier from "../../../qualifier/Qualifier";
import Action from "../../Action";
import BackgroundAction from "../../background/BackgroundAction";
import {Flag} from "../../../values/flag/Flag";
import {toFloatAsString} from "../../../utils/toFloatAsString";

/**
 * @@doc
 * @description A class used to define simple resize with common methods: width and height
 * @class ResizeSimpleAction
 * @augments Action
 */
class ResizeSimpleAction extends Action {
  /**
   * @param {string} cropType
   * @param {number | string} cropWidth The required width of a transformed asset.
   * @param {number | string} cropHeight The required height of a transformed asset.
   */
  constructor(cropType: string, cropWidth: number|string, cropHeight?: number|string) {
    super();
    if(cropWidth) {
      this.addQualifier(new Qualifier('w', cropWidth));
    }
    if(cropHeight) {
      this.addQualifier(new Qualifier('h', cropHeight));
    }
    this.addQualifier(new Qualifier('c', cropType));
  }

  /**
   * @description Sets the height of the resize
   * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  height(x:number|string):this {
    return this.addQualifier(new Qualifier('h', x));
  }

  /**
   * @description Sets the width of the resize
   * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  width(x:number|string):this {
    return this.addQualifier(new Qualifier('w', x));
  }

  /**
   * @description Sets the aspect ratio of the asset.
   * @param {number|string} ratio The new aspect ratio, specified as a percentage or ratio.
   */
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }




  /*
   * The methods below should not exist on the ResizeSimpleAction class
   * However they are currently unspecced, so it's TBD where they'll belong.
   */


  /**
   * @description Horizontal position for custom-coordinates based cropping.
   * @param {number} x The x position.
   */
  x(x:number): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based cropping
   * @param {number} y The y position.
   */
  y(y:number): this {
    return this.addQualifier(new Qualifier('y', y));
  }


  /**
   * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
   * @param {number} z The zoom factor. (Default: 1.0)
   */
  zoom(z:number): this {
    return this.addQualifier(new Qualifier('z', z));
  }

  /**
   * @@doc
   * @description Adds background Action to Resize Action.
   * @param {BackgroundAction} backgroundAction Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundAction: BackgroundAction): this {
    return this.addQualifier(backgroundAction);
  }

  /**
   * @@doc
   * @description Sets the resize mode.
   * @param {string} modeType The resize mode type. For a list of supported types see {@link Values.ResizeMode |
    * Resize mode}
   */
  resizeMode(modeType:string): this {
    this.addFlag(new Flag(modeType));

    return this;
  }
}


export default ResizeSimpleAction;
