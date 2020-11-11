import {PositionQualifier} from "./PositionQualifier";
/**
 * @description
 * Defines the position of a layer: overlay or underlay.</br>
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_and_text_overlays|Applying overlays to images} | {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_image_overlays|Applying overlays to videos}
 * @namespace Position
 * @memberOf Values
 */




/**
 * @memberOf Values.Position
 * @description South center part (bottom center).
 * @return {PositionQualifier}
 */
function south():PositionQualifier{
  return new PositionQualifier('south');
}

/**
 * @memberOf Values.Position
 * @description North center part (top center).
 * @return {PositionQualifier}
 */
function north():PositionQualifier{
  return new PositionQualifier('north');
}

/**
 * @memberOf Values.Position
 * @description Middle east part (right).
 * @return {PositionQualifier}
 */
function east():PositionQualifier{
  return new PositionQualifier('east');
}

/**
 * @memberOf Values.Position
 * @description Middle west part (left).
 * @return {PositionQualifier}
 */
function west():PositionQualifier{
  return new PositionQualifier('west');
}

/**
 * @memberOf Values.Position
 * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
 * @return {PositionQualifier}
 */
function advancedFace():PositionQualifier{
  return new PositionQualifier('adv_face');
}

/**
 * @memberOf Values.Position
 * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {PositionQualifier}
 */
function advancedFaces():PositionQualifier{
  return new PositionQualifier('adv_faces');
}

/**
 * @memberOf Values.Position
 * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {PositionQualifier}
 */
function advancedEyes():PositionQualifier{
  return new PositionQualifier('adv_eyes');
}

/**
 * @memberOf Values.Position
 * @description North west corner (top left).
 * @return {PositionQualifier}
 */
function northWest():PositionQualifier{
  return new PositionQualifier('north_west');
}

/**
 * @memberOf Values.Position
 * @description North east corner (top right).
 * @return {PositionQualifier}
 */
function northEast():PositionQualifier{
  return new PositionQualifier('north_east');
}

/**
 * @memberOf Values.Position
 * @description South west corner (bottom left).
 * @return {PositionQualifier}
 */
function southWest():PositionQualifier{
  return new PositionQualifier('south_west');
}

/**
 * @memberOf Values.Position
 * @description South east corner (bottom right).
 * @return {PositionQualifier}
 */
function southEast():PositionQualifier{
  return new PositionQualifier('south_east');
}

/**
 * @memberOf Values.Position
 * @description
 * Detects all text elements in an image using the OCR Text Detection and Extraction add-on</br>
 * and uses the detected bounding box coordinates as the focus of the transformation.
 * @return {PositionQualifier}
 */
function ocrText():PositionQualifier{
  return new PositionQualifier('ocr_text');
}

/**
 * @memberOf Values.Position
 * @description Detects the largest face in the asset and makes it the focus of the transformation.
 * @return {PositionQualifier}
 */
function face():PositionQualifier{
  return new PositionQualifier('face');
}

/**
 * @memberOf Values.Position
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {PositionQualifier}
 */
function faces():PositionQualifier{
  return new PositionQualifier('faces');
}

/**
 * @memberOf Values.Position
 * @description The center of the image.
 * @return {PositionQualifier}
 */
function center():PositionQualifier{
  return new PositionQualifier('center');
}

export {
  north,
  west,
  east,
  south,
  advancedEyes,
  advancedFace,
  advancedFaces,
  center,
  face,
  northWest,
  faces,
  ocrText,
  southEast,
  southWest,
  northEast
};

