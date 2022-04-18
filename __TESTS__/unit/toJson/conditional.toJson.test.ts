import {Conditional} from "../../../src/actions/conditional";
import {Transformation} from "../../../src";
import {Resize} from "../../../src/actions/resize";


describe('Conditional.toJson', ()=>{
  it('Conditional with transformation', () => {
    const conditionalTx = new Transformation().addAction(
      Conditional.ifCondition('ar >= 1.0', new Transformation().addAction('w_100')));
    const transformation = new Transformation().addAction('w_100');
    expect(conditionalTx.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'ifCondition',
          expression: 'ar >= 1.0',
          transformation: transformation
        }
      ]
    });
  });

  it('Conditional with if/else combination', () => {
    const conditionalTx = new Transformation().addAction(
      Conditional.ifCondition('ar >= 1.0', new Transformation().resize(Resize.scale(50)))
        .otherwise(new Transformation().resize(Resize.scale(200))));
    const transformation = new Transformation().resize(Resize.scale(50));
    const otherwise = new Transformation().resize(Resize.scale(200));

    expect(conditionalTx.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'ifCondition',
          expression: 'ar >= 1.0',
          transformation: transformation,
          otherwise: otherwise
        }
      ]
    });
  });
});