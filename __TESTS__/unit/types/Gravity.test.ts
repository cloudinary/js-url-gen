import * as Gravity from "../../../src/values/gravity/Gravity";
import * as GravityObjects from "../../../src/values/gravityObjects/GravityObjects";
import {AutoGravity} from "../../../src/values/gravityObjects/GravityObjects";



describe('Gravity Qualifier', () => {
  it('Tests simple gravitation', () => {
    expect(Gravity.auto().toString()).toBe('g_auto');
    expect(Gravity.center().toString()).toBe('g_center');
    expect(Gravity.face().toString()).toBe('g_face');
    expect(Gravity.faces().toString()).toBe('g_faces');
    expect(Gravity.east().toString()).toBe('g_east');
    expect(Gravity.west().toString()).toBe('g_west');
    expect(Gravity.north().toString()).toBe('g_north');
    expect(Gravity.south().toString()).toBe('g_south');
    expect(Gravity.advancedFace().toString()).toBe('g_adv_face');
    expect(Gravity.advancedFaces().toString()).toBe('g_adv_faces');
    expect(Gravity.advancedEyes().toString()).toBe('g_adv_eyes');
    expect(Gravity.northWest().toString()).toBe('g_north_west');
    expect(Gravity.southEast().toString()).toBe('g_south_east');
    expect(Gravity.ocrText().toString()).toBe('g_ocr_text');
  });

  it('Tests gravity objects - Singular', () => {
    expect(Gravity.object(GravityObjects.cat()).toString()).toBe('g_cat');
  });

  it('Tests gravity objects - Many', () => {
    expect(Gravity.object(GravityObjects.cat(), GravityObjects.dog()).toString()).toBe('g_cat:dog');
  });

  it('Tests Gravity.auto() with objects', () => {
    expect(Gravity.auto(GravityObjects.cat(), GravityObjects.dog()).toString()).toBe('g_auto:cat:dog');
  });

  it('Tests Gravity.auto() with AutoGravity.classic', () => {
    expect(Gravity.auto(AutoGravity.classic()).toString()).toBe('g_auto:classic');
  });

  it('Tests Gravity.auto() with AutoGravity with object', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.cat())).toString()).toBe('g_auto:cat');
  });

  it('Tests Gravity.auto() with AutoGravity with subject', () => {
    expect(Gravity.auto(AutoGravity.subject()).toString()).toBe('g_auto:subject');
  });

  it('Tests Gravity.auto() with AutoGravity with object avoid', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.cat()).avoid()).toString()).toBe('g_auto:cat_avoid');
  });

  it('Tests Gravity.auto() with AutoGravity with object weighed', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.cat(), -100)).toString()).toBe('g_auto:cat_-100');
  });




});
