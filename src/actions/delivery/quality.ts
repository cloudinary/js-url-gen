import DeliveryAction from "./DeliveryAction";

/**
 * @description Controls the quality of the delivered image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_optimization#how_to_optimize_image_quality | Image quality}
 *  {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#quality_control | Video quality}
 * @memberOf Actions.Delivery
 * @param {string} qualityType For a list of supported quality types see {@link Values.qualityTypeValues| quality types} for
 * possible values.
 * @return {DeliveryAction}
 */
function quality(qualityType:string) :DeliveryAction {
  return new DeliveryAction('q', qualityType);
}

export default quality;
