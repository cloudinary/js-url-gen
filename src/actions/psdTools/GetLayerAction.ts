import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @description Represents a layer in a Photoshop document.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
 * @class GetLayerAction
 * @augments Action
 */
class GetLayerAction extends Action {
  private from: string | number;
  private to: string | number;
  private name: string;

  constructor() {
    super();
  }

  /**
   * @description deliver an image containing only specified layer of a Photoshop image
   * @param {string|number} from The layer number
   */
  byNumber(from: string|number): this{
    this.from = from;
    return this;
  }

  /**
   * @description deliver an image containing only specified range of layers of a Photoshop image
   * @param {string|number} from The layer number
   * @param {string|number} to The layer number
   */
  byRange(from: string|number, to: string|number): this{
    this.from = from;
    this.to = to;
    return this;
  }

  /**
   * @description deliver an image containing only specified layer by name of a Photoshop image
   * @param {string|number} name The layer by name
   */
  byName(name: string): this{
    this.name = name;
    return this;
  }
  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.name) {
      qualifierValue = new QualifierValue(['name', `${this.name}`]).setDelimiter(':');
    } else if(this.from && this.to) {
      qualifierValue = new QualifierValue(`${this.from}-${this.to}`);
    }else if(this.from && !this.to){
      qualifierValue = new QualifierValue(`${this.from}`);
    }
    this.addQualifier(new Qualifier('pg', qualifierValue));
    return this;
  }
}

export default GetLayerAction;
