import {createTestURL} from "./utils/createTestURL";

describe("radius", function () {
  it('should support radius', function () {
    expect(createTestURL('test', {

      radius: 10
    })).toBe('http://res.cloudinary.com/demo/image/upload/r_10/test');
  });

  it('should support radius paramas', function () {
    expect(createTestURL('test', {

      radius: [10, 20, 30]
    })).toBe('http://res.cloudinary.com/demo/image/upload/r_10:20:30/test');
  });

  it('should support radius variable string', function () {
    expect(createTestURL('test', {

      radius: "$v"
    })).toBe('http://res.cloudinary.com/demo/image/upload/r_$v/test');
  });

  it('should support radius paramas', function () {
    expect(createTestURL('test', {

      radius: [10, 20, 30]
    })).toBe('http://res.cloudinary.com/demo/image/upload/r_10:20:30/test');
  });

  it('should support radius paramas with variable', function () {
    expect(createTestURL('test', {

      radius: [10, 20, "$v"]
    })).toBe('http://res.cloudinary.com/demo/image/upload/r_10:20:$v/test');

    expect(createTestURL('test', {

      radius: [10, 20, "$v", 40]
    })).toBe('http://res.cloudinary.com/demo/image/upload/r_10:20:$v:40/test');
  });
});
