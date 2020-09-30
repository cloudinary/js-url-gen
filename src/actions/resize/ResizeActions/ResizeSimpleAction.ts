import Qualifier from "../../../qualifier/Qualifier";
import Action from "../../Action";
import BackgroundAction from "../../background/BackgroundAction";
import {Flag} from "../../../values/flag/Flag";
import {toFloatAsString} from "../../../utils/toFloatAsString";

/**
 * @description A simple resize with common methods: width and height
 */
class ResizeSimpleAction extends Action {
  /**
   * @param {string} cropType
   * @param {number | string} cropWidth
   * @param {number | string} cropHeight
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
   * Sets the height of the resize
   * @param {string | number} x
   */
  height(x:number|string):this {
    return this.addQualifier(new Qualifier('h', x));
  }

  /**
   * Sets the width of the resize
   * @param {string | number} x
   */
  width(x:number|string):this {
    return this.addQualifier(new Qualifier('w', x));
  }

  /**
   * Sets the aspect ratio of the asset.
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
   * Horizontal position for custom-coordinates based cropping
   * @param {number} x
   * @return {this}
   */
  x(x:number): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * Vertical position for custom-coordinates based cropping
   * @param {number} y
   * @return {this}
   */
  y(y:number): this {
    return this.addQualifier(new Qualifier('y', y));
  }




  zoom(z:number): this {
    return this.addQualifier(new Qualifier('z', z));
  }



  background(backgroundAction: BackgroundAction): this {
    return this.addQualifier(backgroundAction);
  }

  resizeMode(modeType:string): this {
    this.addFlag(new Flag(modeType));

    return this;
  }
}


export default ResizeSimpleAction;
