import {Gravity} from "../../../../src/values/gravity";

describe('Gravity Qualifier', () => {
  it ('Expects Gravity to include the four Gravity types', () => {
    expect(Gravity.ocr).toBeInstanceOf(Function);
    expect(Gravity.autoGravity).toBeInstanceOf(Function);
    expect(Gravity.focusOn).toBeInstanceOf(Function);
    expect(Gravity.compass).toBeInstanceOf(Function);
  });
});
