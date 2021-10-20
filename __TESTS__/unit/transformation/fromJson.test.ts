import {fromJson, Transformation} from "../../../src/index.js";
import {Action} from "../../../src/internal/Action.js";
import {IAction} from "../../../src/internal/models/IAction.js";
import {UnsupportedError} from "../../../src/internal/utils/unsupportedError.js";

/**
 * Returns new Transformation filled with given actions
 * @param actions
 */
function actionsToTransformation(actions: IAction[]){
  const transformation = new Transformation();
  actions.forEach((action)=>transformation.addAction(action as Action));

  return transformation;
}

describe('fromJson', ()=>{
  it('should generate a url with scale actions from array of models', function () {
    const actions = fromJson([
      {actionType: 'scale', dimensions: {width: 100}},
      {actionType: 'scale', dimensions: {height: 200}, relative: true}
    ]);

    const transformation = actionsToTransformation(actions);
    expect(transformation.toString()).toStrictEqual('c_scale,w_100/c_scale,fl_relative,h_200');
  });
  it('should generate an error for unsupported actions', function () {
    const actions = fromJson([
      {actionType: 'unsupported', dimensions: {width: 100}},
      {actionType: 'scale', dimensions: {height: 200}, relative: true}
    ]);
    expect(actions).toHaveLength(2);
    expect(actions[0]).toMatchObject({error: new UnsupportedError('unsupported action unsupported')});
    expect(actions[1].toString()).toStrictEqual('c_scale,fl_relative,h_200');
  });
});