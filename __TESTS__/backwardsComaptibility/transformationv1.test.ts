import {createCloudinaryV1URL} from "../../src";
import {stringOrNumber} from "../../src/backwards/types";
import {generateTransformationString} from "../../src/backwards/generateTransformationString";
import {v1NormalizeExpression} from "../../src/backwards/utils/v1NormalizeExpression";

describe("Transformation", function () {
  it('should support custom function remote', function () {
    return expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      transformation: [
        {
          custom_function: {
            function_type: 'remote',
            source: 'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
          }
        }
      ]
    })).toBe('https://res.cloudinary.com/demo/image/upload/fn_remote:aHR0cHM6Ly9kZjM0cmE0YS5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2Nsb3VkaW5hcnlGdW5jdGlvbg/test');
  });

  it('should support custom function wasm', function () {
    return expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      transformation: [
        {
          custom_function: {function_type: 'wasm', source: 'blur.wasm'}
        }
      ]
    })).toBe('https://res.cloudinary.com/demo/image/upload/fn_wasm:blur.wasm/test');
  });

  it('should use custom pre function if no custom_function defined', function () {
    return expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      transformation: [
        {
          custom_pre_function: {
            function_type: 'remote',
            source: 'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
          }
        }
      ]
    })).toBe('https://res.cloudinary.com/demo/image/upload/fn_pre:remote:aHR0cHM6Ly9kZjM0cmE0YS5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2Nsb3VkaW5hcnlGdW5jdGlvbg/test');
  });

  it('should ignore custom pre function if custom function exists', function () {
    return expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      transformation: [
        {
          custom_function: {function_type: 'wasm', source: 'blur.wasm'},
          custom_pre_function: {
            function_type: 'remote',
            source: 'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
          }
        }
      ]
    })).toBe('https://res.cloudinary.com/demo/image/upload/fn_wasm:blur.wasm/test');
  });
  it('should ignore empty values', function () {
    expect(createCloudinaryV1URL('test', {
      width: null,
      cloud_name: 'demo',
      crop: 'crop',
      flags: null,
      startOffset: null,
      transformation: null
    })).toBe('https://res.cloudinary.com/demo/image/upload/c_crop/test');

    expect(createCloudinaryV1URL('test', {
      width: '', // regular
      cloud_name: 'demo',
      crop: 'crop',
      flags: [],
      startOffset: [],
      transformation: []
    })).toBe('https://res.cloudinary.com/demo/image/upload/c_crop/test');

    expect(createCloudinaryV1URL('test', {
      width: '', // regular
      cloud_name: 'demo',
      crop: 'crop',
      flags: [],
      startOffset: '', //range
      transformation: '' //transformation
    })).toBe('https://res.cloudinary.com/demo/image/upload/c_crop/test');

    expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      transformation: {}
    })).toBe('https://res.cloudinary.com/demo/image/upload/test');
  });

  it('should not change variable names even if they look like keywords', function () {
    const options = {
      cloud_name: 'demo',
      transformation: [
        {
          $width: 10
        },
        {
          width: '$width + 10 + width',
          crop: 'scale'
        }
      ]
    };
    const t = generateTransformationString(options);
    expect(t.toString()).toEqual('$width_10/c_scale,w_$width_add_10_add_w');
  });

  it("should not affect user variable names containing predefined names", function () {
    const options = {
      cloud_name: 'demo',
      transformation: [
        {
          $mywidth: "100",
          $aheight: 300
        },
        {
          width: "3 + $mywidth * 3 + 4 / 2 * initialWidth * $mywidth",
          height: "3 * initialHeight + $aheight",
          crop: 'scale'
        }
      ]
    };
    const t = generateTransformationString(options);
    expect(t.toString()).toEqual("$aheight_300,$mywidth_100/c_scale,h_3_mul_ih_add_$aheight,w_3_add_$mywidth_mul_3_add_4_div_2_mul_iw_mul_$mywidth");
  });

  describe("Expression normalization", function () {
    const cases: Record<string, [stringOrNumber, string]> = {
      'null is not affected': [null, null],
      'number replaced with a string value': [10, '10'],
      'empty string is not affected': ['', ''],
      'single space is replaced with a single underscore': [' ', '_'],
      'blank string is replaced with a single underscore': ['   ', '_'],
      'underscore is not affected': ['_', '_'],
      'sequence of underscores and spaces is replaced with a single underscore': [' _ __  _', '_'],
      'arbitrary text is not affected': ['foobar', 'foobar'],
      'double ampersand replaced with and operator': ['foo && bar', 'foo_and_bar'],
      'double ampersand with no space at the end is not affected': ['foo&&bar', 'foo&&bar'],
      'width recognized as variable and replaced with w': ['width', 'w'],
      'initial aspect ratio recognized as variable and replaced with iar': ['initial_aspect_ratio', 'iar'],
      '$width recognized as user variable and not affected': ['$width', '$width'],
      '$initial_aspect_ratio recognized as user variable followed by aspect_ratio variable': [
        '$initial_aspect_ratio',
        '$initial_ar'
      ],
      '$mywidth recognized as user variable and not affected': ['$mywidth', '$mywidth'],
      '$widthwidth recognized as user variable and not affected': ['$widthwidth', '$widthwidth'],
      '$_width recognized as user variable and not affected': ['$_width', '$_width'],
      '$__width recognized as user variable and not affected': ['$__width', '$_width'],
      '$$width recognized as user variable and not affected': ['$$width', '$$width'],
      '$height recognized as user variable and not affected': ['$height_100', '$height_100'],
      '$heightt_100 recognized as user variable and not affected': ['$heightt_100', '$heightt_100'],
      '$$height_100 recognized as user variable and not affected': ['$$height_100', '$$height_100'],
      '$heightmy_100 recognized as user variable and not affected': ['$heightmy_100', '$heightmy_100'],
      '$myheight_100 recognized as user variable and not affected': ['$myheight_100', '$myheight_100'],
      '$heightheight_100 recognized as user variable and not affected': [
        '$heightheight_100',
        '$heightheight_100'
      ],
      '$theheight_100 recognized as user variable and not affected': ['$theheight_100', '$theheight_100'],
      '$__height_100 recognized as user variable and not affected': ['$__height_100', '$_height_100']
    };

    Object.keys(cases).forEach(function (testDescription) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const [input, expected] = cases[testDescription];
      // eslint-disable-next-line max-nested-callbacks
      it(testDescription, function () {
        expect(v1NormalizeExpression(input)).toEqual(expected);
      });
    });
  });

  describe("width and height", function () {
    it('should support oh,ow', function () {
      expect(createCloudinaryV1URL("test", {
        cloud_name: 'demo',
        width: "ow",
        height: "oh",
        crop: "crop"
      })).toContain(`c_crop,h_oh,w_ow/test`);
    });

    it('should support ih,iw', function () {
      expect(createCloudinaryV1URL("test", {
        cloud_name: 'demo',
        width: "iw",
        height: "ih",
        crop: "crop"
      })).toContain("c_crop,h_ih,w_iw/test");
    });
  });

  it('should support aspect_ratio', function () {
    expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      aspect_ratio: '1.0'
    })).toBe('https://res.cloudinary.com/demo/image/upload/ar_1.0/test');

    expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      aspect_ratio: '3:2'
    })).toBe('https://res.cloudinary.com/demo/image/upload/ar_3:2/test');
  });

  it('should use x, y, radius, prefix, gravity and quality from options', function () {
    expect(createCloudinaryV1URL('test', {
      cloud_name: 'demo',
      x: 1,
      y: 2,
      radius: 3,
      gravity: 'center',
      quality: 0.4,
      prefix: 'a'
    })).toBe('https://res.cloudinary.com/demo/image/upload/g_center,p_a,q_0.4,r_3,x_1,y_2/test');
  });

  describe("radius", function () {
    it('should support radius', function () {
      expect(createCloudinaryV1URL('test', {
        cloud_name: 'demo',
        radius: 10
      })).toBe('https://res.cloudinary.com/demo/image/upload/r_10/test');
    });

    it('should support radius paramas', function () {
      expect(createCloudinaryV1URL('test', {
        cloud_name: 'demo',
        radius: [10, 20, 30]
      })).toBe('https://res.cloudinary.com/demo/image/upload/r_10:20:30/test');
    });

    it('should support radius variable string', function () {
      expect(createCloudinaryV1URL('test', {
        cloud_name: 'demo',
        radius: "$v"
      })).toBe('https://res.cloudinary.com/demo/image/upload/r_$v/test');
    });

    it('should support radius paramas', function () {
      expect(createCloudinaryV1URL('test', {
        cloud_name: 'demo',
        radius: [10, 20, 30]
      })).toBe('https://res.cloudinary.com/demo/image/upload/r_10:20:30/test');
    });

    it('should support radius paramas with variable', function () {
      expect(createCloudinaryV1URL('test', {
        cloud_name: 'demo',
        radius: [10, 20, "$v"]
      })).toBe('https://res.cloudinary.com/demo/image/upload/r_10:20:$v/test');

      expect(createCloudinaryV1URL('test', {
        cloud_name: 'demo',
        radius: [10, 20, "$v", 40]
      })).toBe('https://res.cloudinary.com/demo/image/upload/r_10:20:$v:40/test');
    });
  });
});

//# sourceMappingURL=transformation-spec.js.map
