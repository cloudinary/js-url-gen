import {fromJson, Transformation} from "../../../src/index.js";
import {Action} from "../../../src/internal/Action.js";
import {IAction} from "../../../src/internal/models/IAction.js";

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
});