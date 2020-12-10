import * as BlendMode from "../../../src/values/blendMode";


describe('BlendMode Qualifier', () => {
  it('Tests simple gravitation', () => {
    expect(BlendMode.screen().toString()).toBe('e_screen');
    expect(BlendMode.multiply().toString()).toBe('e_multiply');
    expect(BlendMode.overlay().toString()).toBe('e_overlay');
  });
});
