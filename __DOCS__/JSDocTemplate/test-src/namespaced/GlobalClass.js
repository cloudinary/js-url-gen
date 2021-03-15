/**
 * @summary This is the summary of the global test class, test `markdown`.
 * @constructor GlobalClass
 * @param {string} arg1 - The first test arg, test `markdown`.
 * @param {...string} [arg2=false] - A repeatable, optional argument with a default value of false, test `markdown`.
 * @description This is the description for the class this is meant to be a more in depth explanation of what this class does and it's general use case, test `markdown`
 * @example {@caption You can provide example captions with `markdown` and specify the language to use when rendering the code, defaults to `javascript`.}
 * var gc = new GlobalClass("arg1", "arg2");
 * @example {@lang xml}
 * <head>
 * 	<title>HTML Highlighting</title>
 * 	<script>
 * 	  // supports embedded languages
 * 		var gc = new GlobalClass("arg1", "arg2");
 * 	</script>
 * </head>
 */
function GlobalClass(arg1, arg2){
	/**
	 * @summary The name of the class.
	 * @memberof GlobalClass#
	 * @name name
	 * @type {string}
	 * @default "Test Global"
	 */
	this.name = "Test Global";
	/**
	 * @summary A private member of the class.
	 * @memberof GlobalClass#
	 * @name _privateMember
	 * @type {string}
	 * @private
	 * @default "Test Global"
	 */
	this._privateMember = "Private Member";
}

/**
 * @summary This is a test instance method of the global test class, test `markdown`
 * @memberof GlobalClass#
 * @function testMethod
 * @param {*} value - Any value, test `markdown`
 * @param {Object} obj - The first object of what could be many, test `markdown`
 * @param {...Object} [objN] - Any additional objects, test `markdown`
 * @returns {Object} The combination of all the objects, test `markdown`.
 */
GlobalClass.prototype.testMethod = function(value, obj, objN){

};

/**
 * @summary This is a test instance method of the global test class to check that global type definitions are documented.
 * @memberof GlobalClass#
 * @function testMethod
 * @param {SomeType} type - The parameter which is of type SomeType
 */
GlobalClass.prototype.testTypeDefMethod = function(type){

};

window.GlobalClass = GlobalClass;


/**
 * Some global type.
 * @global
 * @typedef {Object} SomeType
 * @property {string} someProp
 */