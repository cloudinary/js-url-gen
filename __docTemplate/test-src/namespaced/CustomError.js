/**
 * @summary A global custom error.
 * @constructor CustomError
 * @param {string} message - The message for the error.
 * @description As this is just a test file there is no implementation of inheriting the Error.prototype or fixing of the stack trace, this is a dummy dummy object to test the documentation.
 * @extends {Error} The default `Error` object.
 * @example {@caption Use this class like any standard error object.}
 * throw new CustomError("Oh no! It broke :(");
 */
function CustomError(message){
	this.name = "CustomError";
	this.message = message;
}