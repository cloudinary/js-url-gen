import {fromJson} from "../../../src/internal/fromJson";
import {Transformation} from "../../../src";
import {Resize} from "../../../src/actions/resize";

describe('condition.fromJson', () => {
  it('should generate a transformation string from condition action', function () {
    const widthTx = new Transformation().addAction('w_100');
    const transformation = fromJson({
      actions: [
        {
          actionType: 'ifCondition',
          expression: 'ar >= 1.0',
          transformation: widthTx
        }
      ]
    });

    expect(transformation.toString()).toStrictEqual('if_ar_gte_1.0/w_100/if_end');
  });

  it('should generate a transformation string from condition action with otherwise', function () {
    const widthTx = new Transformation().addAction('w_100');
    const otherwiseTx = new Transformation().resize(Resize.scale(50));
    const transformation = fromJson({
      actions: [
        {
          actionType: 'ifCondition',
          expression: 'ar >= 1.0',
          transformation: widthTx,
          otherwise: otherwiseTx
        }
      ]
    });

    expect(transformation.toString()).toStrictEqual('if_ar_gte_1.0/w_100/if_else/c_scale,w_50/if_end');
  });
});