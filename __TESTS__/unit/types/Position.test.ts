import Position from "../../../src/params/position/Position";
import * as PositionESM from "../../../src/params/position/Position";

describe('Position Param', () => {
  it('Ensure ESM and Default export the same thing', () => {
    (Object.keys(PositionESM) as Array<keyof typeof PositionESM>) .forEach((funcName) => {
      if (typeof PositionESM[funcName] === 'function') {
        // Ensure function exists on both objects
        expect(PositionESM[funcName]).toEqual( (Position as any)[funcName]);

        // sanity, ensure the result is a function at all (and not an accidental undefined)
        expect(typeof PositionESM[funcName]).toBe('function');
      }
    });
  });

  it('Tests simple gravitation', () => {
    expect(Position.center().toString()).toBe('g_center');
    expect(Position.face().toString()).toBe('g_face');
    expect(Position.faces().toString()).toBe('g_faces');
    expect(Position.east().toString()).toBe('g_east');
    expect(Position.west().toString()).toBe('g_west');
    expect(Position.north().toString()).toBe('g_north');
    expect(Position.south().toString()).toBe('g_south');
    expect(Position.advancedFace().toString()).toBe('g_adv_face');
    expect(Position.advancedFaces().toString()).toBe('g_adv_faces');
    expect(Position.advancedEyes().toString()).toBe('g_adv_eyes');
    expect(Position.northWest().toString()).toBe('g_north_west');
    expect(Position.southEast().toString()).toBe('g_south_east');
    expect(Position.ocrText().toString()).toBe('g_ocr_text');
  });
});
