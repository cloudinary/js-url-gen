import {Qualifier} from "../../internal/qualifier/Qualifier";


/**
 * @doc
 * @description A VideoCodec class
 * @memberOf Values.VideoCodec
 */
class VideoCodecType extends Qualifier {
  constructor(type: string) {
    super('vc');
    this.addValue(type);
  }
}

/**
 * @doc
 * @description An Advanced VideoCodec class
 * @memberOf Values.VideoCodec
 */
class AdvVideoCodecType extends Qualifier{
  private _prof: string;
  private _lvl: number | string
  private readonly _type: string

  constructor(type: string) {
    super('vc');
    this._type = type;
  }

  /**
   * @doc
   * @param {string} profile Sets the profile of the video codec
   */
  profile(profile: string): this {
    this._prof = profile;
    return this;
  }

  /**
   * @doc
   * @description Sets the level of the videoCodec
   * @param {number | string} lvl
   */
  level(lvl: number | string): this {
    this._lvl = lvl;
    return this;
  }

  /**
   * @description returns a toString representation of this qualifier
   */
  toString(): string {
    return `vc_${this._type}:${this._prof}:${this._lvl}`;
  }
}


export {VideoCodecType, AdvVideoCodecType};
