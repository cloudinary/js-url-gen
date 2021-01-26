/**
 * @summary This is the test summary for the `MyApi` namespace.
 * @namespace MyApi
 * @description This is the longer description for the namespace giving a better idea about the code contained within it.
 */
window.MyApi = {
	/**
	 * @summary This is a static member of the namespace.
	 * @memberof MyApi.
	 * @name staticMember
	 * @type {string}
	 * @default I'm a member of the MyApi namespace.
	 */
	staticMember: "I'm a member of the MyApi namespace."
};

/**
 * @summary This is a test type definition on the MyApi namespace.
 * @memberof MyApi~
 * @typedef {Object} Object
 * @prop {string} name - This is the name of the test object.
 * @prop {boolean} [enabled=false] - This is whether or not the test object is enabled. Defaults to `false`.
 */

/**
 * @summary This is the summary of the MyApi test class, test `markdown`.
 * @memberof MyApi
 * @constructor Class
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
MyApi.Class = function(arg1, arg2){
	/**
	 * @summary I'm a member of the class.
	 * @memberof MyApi.Class#
	 * @name publicMember
	 * @type {string}
	 * @default "I'm an instance member."
	 */
	this.publicMember = "I'm an instance member.";
	/**
	 * @summary I'm a protected member of the class.
	 * @memberof MyApi.Class#
	 * @name protectedMember
	 * @type {string}
	 * @default "I'm a protected member."
	 * @protected
	 */
	this.protectedMember = "I'm a protected member.";
	/**
	 * @summary I'm a private member of the class.
	 * @memberof MyApi.Class#
	 * @name _privateMember
	 * @type {string}
	 * @default "I'm a private member."
	 * @private
	 */
	this._privateMember = "I'm a private member.";
};

/**
 * @summary This is a test instance method of the MyApi test class, test `markdown`.
 * @memberof MyApi.Class#
 * @function testMethod
 * @param {*} value - Any value, test `markdown`
 * @param {Object} obj - The first object of what could be many, test `markdown`
 * @param {...Object} [objN] - Any additional objects, test `markdown`
 * @returns {Object} The combination of all the objects, test `markdown`.
 * @description This method is not overridden in the {@link MyApi.Child} class but is simply inherited.
 * @fires MyApi.Class~"test.my-api"
 * @throws {CustomError} This is thrown when some condition fails within this method.
 */
MyApi.Class.prototype.testMethod = function(value, obj, objN){
	/**
	 * @summary This is an event raised by this class, it's documentation appears on this page as the event is specified as an inner member the class by using the tilde (~) scope.
	 * @memberof MyApi.Class~
	 * @event "test.my-api"
	 * @param {Event} e - The event object.
	 * @param {*} custom - Some custom parameter passed to any listeners.
	 */
	throw new CustomError("Some custom error.");
};

/**
 * @summary This is a another test instance method of the MyApi test class, test `markdown`.
 * @memberof MyApi.Class#
 * @function anotherMethod
 * @param {*} value - Any value, test `markdown`
 * @param {Object} obj - The first object of what could be many, test `markdown`
 * @param {...Object} [objN] - Any additional objects, test `markdown`
 * @returns {Object} The combination of all the objects, test `markdown`.
 * @description This method is overridden in the {@link MyApi.Child} class and should remove the exception documentation as it no longer applies.
 * @fires MyApi.Class~"another.my-api"
 * @throws {CustomError} This is thrown when some condition fails within this method.
 */
MyApi.Class.prototype.anotherMethod = function(value, obj, objN){
	/**
	 * @summary This is an event raised by this class, it's documentation appears on this page as the event is specified as an inner member the class by using the tilde (~) scope.
	 * @memberof MyApi.Class~
	 * @event "another.my-api"
	 * @param {Event} e - The event object.
	 * @param {*} custom - Some custom parameter passed to any listeners.
	 */
};

/**
 * @summary This is a test type definition on the MyApi.Class class.
 * @memberof MyApi.Class~
 * @typedef {Object} Object
 * @prop {string} name - The name of the test object.
 * @prop {boolean} [enabled=false] - Whether or not the test object is enabled. Defaults to `false`.
 * @prop {Object} sub - An object containing a subset of properties.
 * @prop {number} sub.id - The subset id.
 * @prop {boolean} [sub.name="Sub Options"] - The name of the sub object. Defaults to `"Sub Options"`.
 */

/**
 * @summary This is the summary of the MyApi child class, test `markdown`.
 * @memberof MyApi
 * @constructor Child
 * @extends MyApi.Class
 */
MyApi.Child = function(){
	/**
	 * @summary I'm a protected member of the class.
	 * @memberof MyApi.Child#
	 * @name protectedMember
	 * @type {string}
	 * @default "I'm a protected member."
	 * @protected
	 */
	this.protectedMember = "I'm a protected member.";
};

/**
 * @summary This is a another test instance method of the MyApi child class, test `markdown`.
 * @memberof MyApi.Child#
 * @function anotherMethod
 * @param {*} value - Any value, test `markdown`
 * @param {Object} obj - The first object of what could be many, test `markdown`
 * @param {...Object} [objN] - Any additional objects, test `markdown`
 * @returns {Object} The combination of all the objects, test `markdown`.
 * @description This method overrides the {@link MyApi.Class#anotherMethod} and should remove the exception documentation as it no longer applies. The event should also be updated to reflect it is raised by this class and not the inherited one.
 * @fires MyApi.Child~"another.my-api"
 */
MyApi.Child.prototype.anotherMethod = function(value, obj, objN){
	/**
	 * @summary This is an event raised by this class, it's documentation appears on this page as the event is specified as an inner member the class by using the tilde (~) scope.
	 * @memberof MyApi.Child~
	 * @event "another.my-api"
	 * @param {Event} e - The event object.
	 * @param {*} custom - Some custom parameter passed to any listeners.
	 */
};