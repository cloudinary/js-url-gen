import {Transformation} from '../../../src';
import {Resize} from "../../../src/actions";
import {UnsupportedError} from "../../../src/internal/utils/unsupportedError";
import {Action} from "../../../src/internal/Action";

describe('Transformation.toJson()', ()=>{
  it('scale', ()=>{
    const transformation = new Transformation();
    transformation.addAction(Resize.scale(200));
    expect(transformation.toJson()).toStrictEqual([{"actionType": "scale", "dimensions": {"width": 200}}]);
  });

  it('2 scale actions', ()=>{
    const transformation = new Transformation();
    transformation.addAction(Resize.scale(200)).addAction(Resize.scale(100, 200));
    expect(transformation.toJson()).toStrictEqual([{"actionType": "scale", "dimensions": {"width": 200}}, {"actionType": "scale", "dimensions": {"height": 200, "width": 100}}]);
  });

  it('unsupported actions', ()=>{
    const unsupported = {error: new UnsupportedError('unsupported action Action')};
    const transformation = new Transformation().addAction(new Action()).addAction(new Action());
    expect(transformation.toJson()).toStrictEqual([unsupported, unsupported]);
  });
});