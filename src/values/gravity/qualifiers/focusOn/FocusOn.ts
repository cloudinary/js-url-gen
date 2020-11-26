import QualifierValue from "../../../../qualifier/QualifierValue";


/**
 * @@doc
 * @memberOf Values
 * @namespace FocusOn
 */
class FocusOn extends QualifierValue {
  readonly name: string;

  constructor(name?: string) {
    super();
    this.name = name;
  }

  toString(): string {
    return this.name;
  }

  /**
   * @memberOf Values.FocusOns
   */
  static bird(): FocusOn {
    return new FocusOn('bird');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static dog(): FocusOn {
    return new FocusOn('dog');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static cat(): FocusOn {
    return new FocusOn('cat');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static microwave(): FocusOn {
    return new FocusOn('microwave');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static refrigerator(): FocusOn {
    return new FocusOn('refrigerator');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static bottle(): FocusOn {
    return new FocusOn('bottle');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static sink(): FocusOn {
    return new FocusOn('sink');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static skateboard(): FocusOn {
    return new FocusOn('skateboard');
  }

  /**
   * @memberOf Values.FocusOns
   */
  static person(): FocusOn {
    return new FocusOn('person');
  }


  /**
   * @memberOf Values.FocusOn
   * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
   * @return {FocusOn} FocusOn
   */
  static advancedFace(): FocusOn {
    return new FocusOn('adv_face');
  }

  /**
   * @memberOf Values.FocusOn
   * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
   * @return {FocusOn} FocusOn
   */
  static advancedFaces(): FocusOn {
    return new FocusOn('adv_faces');
  }

  /**
   * @memberOf Values.FocusOn
   * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
   * @return {FocusOn} FocusOn
   */
  static advancedEyes(): FocusOn {
    return new FocusOn('adv_eyes');
  }

  /**
   * @memberOf Values.FocusOn
   * @description Detects the largest face in the asset and makes it the focus of the transformation.
   * @return {FocusOn} FocusOn
   */
  static face(): FocusOn {
    return new FocusOn('face');
  }

  /**
   * @memberOf Values.FocusOn
   * @description Detects all the faces in the asset and makes them the focus of the transformation.
   * @return {FocusOn} FocusOn
   */
  static faces(): FocusOn {
    return new FocusOn('faces');
  }

  /**
   * @memberOf Values.FocusOn
   * @description Detects all the faces in the asset and makes them the focus of the transformation.
   * @return {FocusOn} FocusOn
   */
  static background(): FocusOn {
    return new FocusOn('background');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects aeroplane
   * @return {FocusOn} FocusOn
   */
  static aeroplane(): FocusOn {
    return new FocusOn('aeroplane');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects bicycle
   * @return {FocusOn} FocusOn
   */
  static bicycle(): FocusOn {
    return new FocusOn('bicycle');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects boat
   * @return {FocusOn} FocusOn
   */
  static boat(): FocusOn {
    return new FocusOn('boat');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects bus
   * @return {FocusOn} FocusOn
   */
  static bus(): FocusOn {
    return new FocusOn('bus');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects car
   * @return {FocusOn} FocusOn
   */
  static car(): FocusOn {
    return new FocusOn('car');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects chair
   * @return {FocusOn} FocusOn
   */
  static chair(): FocusOn {
    return new FocusOn('chair');
  }


  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects cow
   * @return {FocusOn} FocusOn
   */
  static cow(): FocusOn {
    return new FocusOn('cow');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects diningtable
   * @return {FocusOn} FocusOn
   */
  static diningtable(): FocusOn {
    return new FocusOn('diningtable');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects horse
   * @return {FocusOn} FocusOn
   */
  static horse(): FocusOn {
    return new FocusOn('horse');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects motorbike
   * @return {FocusOn} FocusOn
   */
  static motorbike(): FocusOn {
    return new FocusOn('motorbike');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects pottedplant
   * @return {FocusOn} FocusOn
   */
  static pottedplant(): FocusOn {
    return new FocusOn('pottedplant');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects sheep
   * @return {FocusOn} FocusOn
   */
  static sheep(): FocusOn {
    return new FocusOn('sheep');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects sofa
   * @return {FocusOn} FocusOn
   */
  static sofa(): FocusOn {
    return new FocusOn('sofa');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects train
   * @return {FocusOn} FocusOn
   */
  static train(): FocusOn {
    return new FocusOn('train');
  }

  /**
   * @memberOf Values.FocusOn
   * @doc
   * @description Detects tvmonitor
   * @return {FocusOn} FocusOn
   */
  static tvmonitor() :FocusOn {
    return new FocusOn('tvmonitor');
  }
}

const {
  person,
  cat,
  microwave,
  refrigerator,
  skateboard,
  bird,
  bottle,
  dog,
  sink
} = FocusOn;

export {
  FocusOn,
  person,
  cat,
  microwave,
  refrigerator,
  skateboard,
  bird,
  bottle,
  dog,
  sink
};
