import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @description Class to Controls the volume of an audio or video file.
 * @class VolumeAction
 * @augments Action
 */
class VolumeAction extends Action {
  constructor(volumeValue: string | number) {
    super();
    const qualifierValue = new QualifierValue(['volume', volumeValue]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
  }
}

export default VolumeAction;
