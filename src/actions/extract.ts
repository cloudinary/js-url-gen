import {QualifierValue} from "../internal/qualifier/QualifierValue";
import {Qualifier} from "../internal/qualifier/Qualifier";
import {Action} from "../internal/Action";

/**
 * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
 * @memberOf Actions
 * @namespace Actions
 */
class Extract extends Action {
  private qualifierValue = new QualifierValue();

  constructor() {
    super();
    this.qualifierValue.delimiter = ';';
  }

  /**
   * @description Extracts an image containing only specified layers of a Photoshop image.
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
   * @memberOf Actions.PSDTools
   * @return {GetLayerAction}
   */
  static getFrame(): Extract {
    return new Extract();
  }

  /**
   * @description Extracts the original content of an embedded object of a Photoshop image.
   * @memberOf Actions.PSDTools
   * @return {SmartObjectAction}
   */
  static getPage(): Extract {
    return new Extract();
  }

  /**
   * @description Extract an image containing only specified layer of an asset
   * @param {string|number} from The layer number
   */
  byNumber(from: string|number): this{
    this.qualifierValue.addValue(from);
    return this;
  }

  /**
   * @description Extract an image containing only specified range of layers of an asset
   * @param {string|number} from The layer number
   * @param {string|number} to The layer number
   */
  byRange(from: string|number, to: string|number): this{
    const range = new QualifierValue(from);
    range.addValue(to);
    range.delimiter = '-';

    this.qualifierValue.addValue(range);
    return this;
  }

  protected prepareQualifiers(): this {
    this.addQualifier(new Qualifier('pg', this.qualifierValue));
    return this;
  }
}


const {getFrame, getPage} = Extract;
export {getFrame, getPage, Extract};
