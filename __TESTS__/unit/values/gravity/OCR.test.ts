import {Gravity} from "../../../../src/values/gravity/Gravity";

describe('Gravity Qualifier', () => {
  it ('works', () => {
    expect(Gravity.ocr().toString()).toBe('g_ocr_text');
    expect(Gravity.ocr().avoid().toString()).toBe('g_ocr_text_avoid');
  });
});
