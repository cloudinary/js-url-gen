import TextLayer from './textlayer.js';

class SubtitlesLayer extends TextLayer {
  /**
   * Represent a subtitles layer
   * @constructor SubtitlesLayer
   * @param {Object} options - layer parameters
   */
  constructor(options: any) {
    super(options);
    this.options.resourceType = "subtitles";
  }

}
export default SubtitlesLayer;
