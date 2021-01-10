import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @description Class to Controls the volume of an audio or video file.
 * @extend {SDK.Action}
 */
class VolumeAction extends Action {
  constructor(volumeValue: string | number) {
    super();
    const qualifierValue = new QualifierValue(['volume', volumeValue]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
  }
}

export default VolumeAction;
