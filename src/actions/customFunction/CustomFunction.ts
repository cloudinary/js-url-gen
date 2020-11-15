/**
 * Calls a custom function. </br>
 * Learn more: {@link https://cloudinary.com/documentation/custom_functions | Custom functions}
 * @memberOf Actions
 * @namespace CustomFunction
 */


import CustomFunctionAction from "./CustomFunctionAction";
import RemoteAction from "./RemoteAction";

/**
 *
 * @description - Calls a custom function. </br>
 * For more information about remote custom functions see {@link https://cloudinary.com/documentation/custom_functions#remote_functions | the documentation}
 * @param {string} path - Specifies the URL of the remote custom function.
 * @memberOf Actions.CustomFunction
 * @return {CustomFunctionAction}
 */
function remote(path:string): RemoteAction {
  return new RemoteAction(path)
    .asRemote();
}

/**
 *
 * @description - Calls a custom function.  </br>
 * For more information about wasm custom functions see {@link https://cloudinary.com/documentation/custom_functions#webassembly_functions | the documentation}
 * @param {string} publicID - Specifies the publicID of the custom function stored in Cloudinary
 * @memberOf Actions.CustomFunction
 * @return {CustomFunctionAction}
 */
function wasm(publicID:string): CustomFunctionAction {
  return new CustomFunctionAction(publicID)
    .asWasm();
}


export {remote, wasm};
