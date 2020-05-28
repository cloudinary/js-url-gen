var Transformation = /** @class */ (function () {
    function Transformation() {
        this.actions = [];
    }
    /**
     *
     * @param {IAction} action
     */
    Transformation.prototype.addAction = function (action) {
        this.actions.push(action);
        return this;
    };
    /**
     * @return {string}
     */
    Transformation.prototype.toString = function () {
        var str = '';
        this.actions.forEach(function (action) {
            str += action.toString();
        });
        return str;
    };
    return Transformation;
}());

/**
 *
 * @description Creates a fully qualified CloudinaryURL
 * @param {Object} config
 * @param {Object} descriptor
 * @param {Transformation} transformation
 */
function createCloudinaryURL(config, descriptor, transformation) {
    // Currently not implemented
    return '';
}

/**
 * @implements IAction
 */
var Radius = /** @class */ (function () {
    /**
     * @param {number} num
     */
    function Radius(num) {
    }
    return Radius;
}());
/**
 * @param {number} num;
 * @return {Radius}
 */
function radius(num) {
    return new Radius(num);
}

/**
 * @implements IAction
 */
var Max = /** @class */ (function () {
    function Max() {
    }
    return Max;
}());
/**
 * @return {Max}
 */
function max() {
    return new Max();
}

var RoundCorners = {
    radius: radius,
    max: max
};

/**
 * @implements IAction
 */
var Crop = /** @class */ (function () {
    function Crop() {
    }
    return Crop;
}());
/**
 * @return {Crop}
 */
function crop() {
    return new Crop();
}

/**
 * @implements IAction
 */
var MinimumPad = /** @class */ (function () {
    /**
     *
     * @param {number} padWidth
     * @param {number} padHeight
     */
    function MinimumPad(padWidth, padHeight) {
    }
    return MinimumPad;
}());
/**
 * @param {number} padWidth
 * @param {number} padHeight
 * @return {MinimumPad}
 */
function minimumPad(padWidth, padHeight) {
    return new MinimumPad(padWidth, padHeight);
}

var Resize = { crop: crop, minimumPad: minimumPad };

var Solid = /** @class */ (function () {
    function Solid() {
    }
    /**
     *
     * @param {number} num
     */
    Solid.prototype.width = function (num) {
        return this;
    };
    /**
     *
     * @param {string} color
     */
    Solid.prototype.color = function (color) {
        return this;
    };
    return Solid;
}());
/**
 * @return {Solid}
 */
function solid() {
    return new Solid();
}

var Border = { solid: solid };

var Actions = { Resize: Resize, Border: Border, RoundCorners: RoundCorners };

// Transformations
/**
 * @description a class
 */
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
var index = { cloudinaryURL: createCloudinaryURL, Transformation: Transformation, Base: Base, Actions: Actions };

export default index;
export { Actions, Base, Transformation, createCloudinaryURL as cloudinaryURL };
