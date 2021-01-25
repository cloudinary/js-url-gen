/**
 * @summary This is to test child namespaces.
 * @memberof MyApi.
 * @namespace utils
 */
MyApi.utils = {};

/**
 * @summary Formats the supplied `str` with the given replacement args and there indexes.
 * @memberof MyApi.utils.
 * @function format
 * @param {string} str - The format string.
 * @param {*} arg - The first of argument to format into the string.
 * @param {...*} [argN] - Any number of additional arguments.
 * @returns {string} The given `str` formatted with the supplied arguments.
 * @example {@caption Basic usage:}
 * var result = MyApi.utils.format( "Hello {0}! My name is {1}.", "Jill", "Jack" ); // => "Hello Jill! My name is Jack."
 */
MyApi.utils.format = function(str, arg, argN){

};