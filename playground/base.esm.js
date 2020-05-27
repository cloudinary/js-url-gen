function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

console.log('Side effect');

var Transformation = /*#__PURE__*/function () {
  function Transformation() {
    _classCallCheck(this, Transformation);

    console.log('Transformation! - within constructor');
  }
  /**
   * @return {Transformation}
   */


  _createClass(Transformation, [{
    key: "chain",
    value: function chain() {
      return this;
    }
    /**
     * @return {Transformation}
     */

  }, {
    key: "addAction",
    value: function addAction() {
      return this;
    }
  }]);

  return Transformation;
}();

/**
 *
 * @param {string} publicID
 * @param {Transformation} transformation
 */

function cloudinaryURL(publicID, transformation) {
  console.log('Cloudinary URL!', transformation);
  return publicID;
}

/**
 *
 * @param {number} x
 * @return {number}
 */
function resize(x) {
  return x;
}

/**
 * @description a class
 */

var Base = function Base() {
  _classCallCheck(this, Base);

  console.log("TADAAAAA, now you see me now don't");
  console.log('More magic');
};

export { Base, resize as Resize, Transformation, cloudinaryURL };
