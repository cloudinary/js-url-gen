import Position from "../../../src/qualifiers/position/Position";
import * as PositionESM from "../../../src/qualifiers/position/Position";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

describe('Position Param', () => {
  it('Ensure ESM and Default export the same thing', () => {
    expectESMToMatchDefault(PositionESM, Position);
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
