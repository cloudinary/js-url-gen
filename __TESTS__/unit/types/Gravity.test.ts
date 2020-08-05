import Gravity from "../../../src/params/gravity/Gravity";
import * as GravityESM from "../../../src/params/gravity/Gravity";

import * as GravityObjects from "../../../src/constants/gravityObjects/GravityObjects";
import {AutoGravity} from "../../../src/constants/gravityObjects/GravityObjects";



describe('Gravity Param', () => {
  it('Ensure ESM and Default export the same thing', () => {
    (Object.keys(GravityESM) as Array<keyof typeof GravityESM>) .forEach((funcName) => {
      if (typeof GravityESM[funcName] === 'function') {
        // Ensure function exists on both objects
        expect(GravityESM[funcName]).toEqual( (Gravity as any)[funcName]);

        // sanity, ensure the result is a function at all (and not an accidental undefined)
        expect(typeof GravityESM[funcName]).toBe('function');
      }
    });
  });

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
    expect(Gravity.object(GravityObjects.CAT).toString()).toBe('g_cat');
  });

  it('Tests gravity objects - Many', () => {
    expect(Gravity.object(GravityObjects.CAT, GravityObjects.DOG).toString()).toBe('g_cat:dog');
  });

  it('Tests Gravity.auto() with objects', () => {
    expect(Gravity.auto(GravityObjects.CAT, GravityObjects.DOG).toString()).toBe('g_auto:cat:dog');
  });

  it('Tests Gravity.auto() with AutoGravity.classic', () => {
    expect(Gravity.auto(AutoGravity.classic()).toString()).toBe('g_auto:classic');
  });

  it('Tests Gravity.auto() with AutoGravity with object', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.CAT)).toString()).toBe('g_auto:cat');
  });

  it('Tests Gravity.auto() with AutoGravity with subject', () => {
    expect(Gravity.auto(AutoGravity.subject()).toString()).toBe('g_auto:subject');
  });

  it('Tests Gravity.auto() with AutoGravity with object avoid', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.CAT).avoid()).toString()).toBe('g_auto:cat_avoid');
  });

  it('Tests Gravity.auto() with AutoGravity with object weighed', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.CAT, -100)).toString()).toBe('g_auto:cat_-100');
  });




});
