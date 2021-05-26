import {createTestURL} from "./utils/createTestURL";

describe(":quality", function() {
  it("support a percent value", function() {
    expect(createTestURL("test", {
      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: 80,
      prefix: "a"
    })).toContain('g_center,p_a,q_80,r_3,x_1,y_2/test');

    expect(createTestURL("test", {
      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: "80:444",
      prefix: "a"
    })).toContain('/g_center,p_a,q_80:444,r_3,x_1,y_2/test');
  });

  it("should support auto value", function() {
    expect(createTestURL("test", {
      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: "auto",
      prefix: "a"
    })).toContain('/g_center,p_a,q_auto,r_3,x_1,y_2/test');

    expect(createTestURL("test", {
      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: "auto:good",
      prefix: "a"
    })).toContain('/g_center,p_a,q_auto:good,r_3,x_1,y_2/test');
  });
});
