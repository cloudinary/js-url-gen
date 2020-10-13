import {prepareColor} from "../../../../utils/prepareColor";
import {BackgroundQualifier} from "./BackgroundQualifier";

/**
 * @@doc
 * @description Automatically sets the background color when resizing with padding.
 */
class BaseCommonBackground extends BackgroundQualifier {
  protected _palette: string[];
  protected _constrast: boolean;

  constructor() {
    super();
    this._palette = [];
  }

  /**
   * @@doc
   * @description Selects the strongest contrasting color to the predominant color while taking only the image border pixels into account.
   * @return {this}
   */
  contrast(): this {
    this._constrast = true;
    return this;
  }

  /**
   * @description Defines the custom colors to use when resizing using content-aware padding.
   * @param {...string} colors One or more colors - Example: palette('green', 'red', blue')
   * @return {this}
   */
  palette(...colors: string[]): this {
    this._palette = colors.map((color) => {
      return prepareColor(color);
    });

    return this;
  }
}

export {BaseCommonBackground};
