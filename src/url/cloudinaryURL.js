import Transformation from '../transformation/Transformation';

/**
 *
 * @param {string} publicID
 * @param {Transformation} transformation
 */
function cloudinaryURL(publicID, transformation) {
    console.log('Cloudinary URL!', transformation);
    return publicID;
}

export default cloudinaryURL;
