import {createTestURL} from "./transformationLegacyTests/utils/createTestURL";
import Transformation from "../../src/backwards/transformation";
import {createCloudinaryLegacyURL} from "../../src/backwards/createCloudinaryLegacyURL";

describe('Create legacy urls', () => {
  it('Should throw without cloudName', () => {
    expect(() => {
      createCloudinaryLegacyURL('sample', {});
    }).toThrow();
  });

  it("should use format from options", function () {
    const options = {

      format: "jpg"
    };
    const result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/test.jpg");
  });

  it("should support preloaded identifier format", function () {
    let result = createTestURL("raw/private/v123456/document.docx", {
      cloud_name: 'demo'
    });

    expect(result).toBe("http://res.cloudinary.com/demo/raw/private/v123456/document.docx");
    result = createTestURL("image/private/v123456/img.jpg", {

      crop: "scale",
      width: "1.0"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/private/c_scale,w_1.0/v123456/img.jpg");
  });

  it("should use default secure distribution if secure=true", function () {
    const result = createTestURL("test", {
      secure: true,
      cloud_name: 'demo'
    });
    expect(result).toBe("https://res.cloudinary.com/demo/image/upload/test");
  });

  it("should default to akamai if secure is given with private_cdn and no secure_distribution", function () {
    const result = createTestURL("test", {
      secure: true,
      private_cdn: true,
      cloud_name: 'demo'
    });
    expect(result).toBe("https://demo-res.cloudinary.com/image/upload/test");
  });

  it("should not add cloud_name if secure private_cdn and secure non akamai secure_distribution", function () {
    const result = createTestURL("test", {
      secure: true,
      private_cdn: true,
      secure_distribution: "something.cloudfront.net",
      cloud_name: 'demo'
    });
    expect(result).toBe("https://something.cloudfront.net/image/upload/test");
  });

  it("should not add cloud_name if private_cdn and not secure", function () {
    const result = createTestURL("test", {
      private_cdn: true,
      cloud_name: 'demo'
    });
    expect(result).toBe("http://demo-res.cloudinary.com/image/upload/test");
  });


  it('works', () => {
    const url = createTestURL('sample', {

      width: 100
    });

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/w_100/sample');
  });

  it('Sets resource_type and type', () => {
    const url = createTestURL('sample', {

      resource_type: 'video',
      type: 'fetch',
      width: 100
    });

    expect(url).toBe('http://res.cloudinary.com/demo/video/fetch/w_100/sample');
  });

  it('Sets resource_type and type', () => {
    const url = createTestURL('sample', {

      resource_type: 'video',
      type: 'fetch',
      width: 100
    });

    expect(url).toBe('http://res.cloudinary.com/demo/video/fetch/w_100/sample');
  });

  it("should include conditional transformation", function () {
    let url = createTestURL("test", {

      resource_type: 'video',
      if: "duration > 30",
      width: 100
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/video/upload/if_du_gt_30,w_100/test");
    url = createTestURL("test", {

      resource_type: 'video',
      if: "initialDuration > 30",
      width: 100
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/video/upload/if_idu_gt_30,w_100/test");
    url = createTestURL("test", {

      resource_type: 'video',
      if: "initial_duration > 30",
      width: 100
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/video/upload/if_idu_gt_30,w_100/test");
  });

  it("should allow multiple conditions when chaining transformations ", function () {
    const url = createTestURL("sample", {

      transformation: [
        {
          if: "w_lt_200",
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "w_gt_400",
          crop: "fit",
          width: 150,
          height: 150
        },
        {
          effect: "sepia"
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/if_w_gt_400,c_fit,h_150,w_150/e_sepia/sample");
  });

  it("should translate operators", function () {
    const url = createTestURL("sample", {

      if: "w < 200",
      crop: "fill",
      height: 120,
      width: 80
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/sample");
  });

  it("should allow multiple tags condition", function () {
    const url = createTestURL("sample", {

      transformation: [
        {
          if: "!tag1:tag2:tag3!_in_tags",
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "else",
          crop: "fit",
          width: 150,
          height: 150
        },
        {
          effect: "sepia"
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_!tag1:tag2:tag3!_in_tags,c_fill,h_120,w_80/if_else,c_fit,h_150,w_150/e_sepia/sample");
  });

  it("should include the if_end as the last parameter in its component", function () {
    const url = createTestURL("sample", {

      transformation: [
        {
          if: "w_lt_200"
        },
        {
          crop: "fill",
          height: 120,
          width: 80,
          effect: "sharpen"
        },
        {
          effect: "brightness:50"
        },
        {
          effect: "shadow",
          color: "red"
        },
        {
          if: "end"
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200/c_fill,e_sharpen,h_120,w_80/e_brightness:50/co_red,e_shadow/if_end/sample");
  });

  it("should support if_else with transformation parameters", function () {
    const url = createTestURL("sample", {

      transformation: [
        {
          if: "w_lt_200",
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "else",
          crop: "fill",
          height: 90,
          width: 100
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/if_else,c_fill,h_90,w_100/sample");
  });

  it("if_else should be without any transformation parameters", function () {
    const url = createTestURL("sample", {

      transformation: [
        {
          if: "aspect_ratio_lt_0.7"
        },
        {
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "else"
        },
        {
          crop: "fill",
          height: 90,
          width: 100
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_lt_0.7/c_fill,h_120,w_80/if_else/c_fill,h_90,w_100/sample");
  });

  it("should support and translate operators:  '=', '!=', '<', '>', '<=', '>=', '&&', '||'", function () {
    const allOperators = 'if_' + 'w_eq_0_and' + '_h_ne_0_or' + '_ar_lt_0_and' + '_pc_gt_0_and' + '_fc_lte_0_and' + '_w_gte_0' + ',e_grayscale';

    expect(createTestURL("sample", {

      "if": "w = 0 && height != 0 || aspectRatio < 0 and pageCount > 0 and faceCount <= 0 and width >= 0",
      "effect": "grayscale"
    })).toMatch(new RegExp(allOperators));
  });

  it("should support text values", function () {
    const url = createTestURL("sample", {

      effect: "$efname:100",
      $efname: "!blur!"
    });
    expect(url).toBe(`http://res.cloudinary.com/demo/image/upload/$efname_!blur!,e_$efname:100/sample`);
  });

  it("should support string interpolation", function () {
    const url = createTestURL("sample", {

      crop: "scale",
      overlay: {
        text: "$(start)Hello $(name)$(ext), $(no ) $( no)$(end)",
        font_family: "Arial",
        font_size: "18"
      }
    });

    expect(url).toContain(`l_text:Arial_18:$(start)Hello%20$(name)$(ext)%252C%20%24%28no%20%29%20%24%28%20no%29$(end)/sample`);
  });

  it("should escape public_ids", function () {
    const expressions = [
      // [source, target]
      ["a b", "a%20b"],
      ["a+b", "a%2Bb"],
      ["a%20b", "a%20b"],
      ["a-b", "a-b"],
      ["a??b", "a%3F%3Fb"],
      ["parentheses(interject)", "parentheses(interject)"],
      ["abcαβγאבג", "abc%CE%B1%CE%B2%CE%B3%D7%90%D7%91%D7%92"]
    ];
    expressions.forEach(([source, target]) => {
      expect(createTestURL(source, {cloud_name: 'demo'})).toEqual(`http://res.cloudinary.com/demo/image/upload/${target}`);
    });
  });

  it("Should generate transformation with border objects", function () {
    const url = createTestURL("sample", {

      border: {
        width: 5,
        color: '#ffaabbdd'
      }
    });

    expect(url).toContain(`image/upload/bo_5px_solid_rgb:ffaabbdd/sample`);
  });

  it("Should generate transformation with border string", function () {
    const url = createTestURL("sample", {

      border: '4px_solid_white'
    });

    expect(url).toContain(`image/upload/bo_4px_solid_white/sample`);
  });

  it("radius as an array is parsed", function () {
    const options = {

      transformation: [
        {
          radius: [10, 20, 30, 40]
        }
      ]
    };
    const t = createTestURL('sample', options);
    expect(t).toContain("r_10:20:30:40");
  });

  it("radius accepts a string value", function () {
    const options = {

      transformation: [
        {
          radius: 'max'
        }
      ]
    };
    const t = createTestURL('sample', options);
    expect(t).toContain("r_max");
  });

  it("Should support width and height (previously called :should use width and height from options only if crop is given)", function () {
    let options, result;
    options = {

      width: 100,
      height: 100
    };
    result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/h_100,w_100/test");


    options = {

      width: 100,
      height: 100,
      crop: "crop"
    };
    result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,h_100,w_100/test");
  });

  it("Should support c_limit and c_fit (previously called: should not pass width and height to html in case of fit or limit crop)", function () {
    let options, result;
    options = {

      width: 100,
      height: 100,
      crop: "limit"
    };
    result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_limit,h_100,w_100/test");


    options = {

      width: 100,
      height: 100,
      crop: "fit"
    };
    result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_fit,h_100,w_100/test");
  });

  it("should not pass width and height to html in case angle was used", function () {
    const result = createTestURL("test", {

      width: 100,
      height: 100,
      crop: "scale",
      angle: "auto"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/a_auto,c_scale,h_100,w_100/test");
  });

  it("should use x, y, radius, opacity, prefix, gravity and quality from options", function () {
    const result = createTestURL("test", {

      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: 0.4,
      prefix: "a",
      opacity: 20
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/g_center,o_20,p_a,q_0.4,r_3,x_1,y_2/test");
  });

  it("should support 'ocr_text' as a value for gravity parameter", function () {
    const options = {

      gravity: "ocr_text",
      crop: "crop",
      width: 0.5
    };
    const result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_ocr_text,w_0.5/test");
  });

  it("should support 'auto:ocr_text' as a value for gravity parameter", function () {
    const options = {

      gravity: "auto:ocr_text",
      crop: "crop",
      width: 0.5
    };
    const result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_auto:ocr_text,w_0.5/test");
  });

  it("support a percent value", function () {
    expect(createTestURL("test", {

      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: 80,
      prefix: "a"
    })).toContain(`/g_center,p_a,q_80,r_3,x_1,y_2/test`);

    expect(createTestURL("test", {

      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: "80:444",
      prefix: "a"
    })).toContain(`/g_center,p_a,q_80:444,r_3,x_1,y_2/test`);
  });

  it("should support auto value", function () {
    expect(createTestURL("test", {

      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: "auto",
      prefix: "a"
    })).toContain(`/g_center,p_a,q_auto,r_3,x_1,y_2/test`);

    expect(createTestURL("test", {

      x: 1,
      y: 2,
      radius: 3,
      gravity: "center",
      quality: "auto:good",
      prefix: "a"
    })).toContain(`/g_center,p_a,q_auto:good,r_3,x_1,y_2/test`);
  });

  it("should support a single value", function () {
    expect(createTestURL("test", {

      radius: 10
    })).toContain(`/r_10/test`);

    expect(createTestURL("test", {

      radius: '10'
    })).toContain(`/r_10/test`);

    expect(createTestURL("test", {

      variables: [['$v', 10]],
      radius: '$v'
    })).toContain(`/$v_10,r_$v/test`);
  });

  it("should support an array of values", function () {
    expect(createTestURL("test", {

      radius: [10, 20, 30]
    })).toContain(`/r_10:20:30/test`);
    expect(createTestURL("test", {

      variables: [['$v', 10]],
      radius: [10, 20, '$v']
    })).toContain(`/$v_10,r_10:20:$v/test`);
    expect(createTestURL("test", {

      variables: [['$v', 10]],
      radius: [10, 20, '$v', 40]
    })).toContain(`/$v_10,r_10:20:$v:40/test`);
  });

  it("should support colon separated values", function () {
    expect(createTestURL("test", {

      radius: "10:20"
    })).toContain(`/r_10:20/test`);
    expect(createTestURL("test", {

      variables: [['$v', 10]],
      radius: "10:20:$v:40"
    })).toContain(`/$v_10,r_10:20:$v:40/test`);
  });

  it("should support named transformation", function () {
    const result = createTestURL("test", {

      transformation: "blip"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/t_blip/test");
  });

  it("should support array of named transformations", function () {
    const result = createTestURL("test", {

      transformation: ["blip", "blop"]
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/t_blip.blop/test");
  });

  it("should support base transformation", function () {
    const result = createTestURL("test", {

      transformation: {
        x: 100,
        y: 100,
        crop: "fill"
      },
      crop: "crop",
      width: 100
    });

    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_fill,x_100,y_100/c_crop,w_100/test");
  });

  it("should support array of base transformations", function () {
    const result = createTestURL("test", {


      transformation: [
        {
          x: 100,
          y: 100,
          width: 200,
          crop: "fill"
        },
        {
          radius: 10
        }
      ],
      crop: "crop",
      width: 100
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_fill,w_200,x_100,y_100/r_10/c_crop,w_100/test");
  });

  it("should not include empty transformations", function () {
    const result = createTestURL("test", {

      transformation: [
        {},
        {
          x: 100,
          y: 100,
          crop: "fill"
        },
        {}
      ]
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_fill,x_100,y_100/test");
  });

  it("should support size", function () {
    const result = createTestURL("test", {

      size: "10x10",
      crop: "crop"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,h_10,w_10/test");
  });

  it("should use type from options", function () {
    const result = createTestURL("test", {


      type: "facebook"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/facebook/test");
  });

  it("should use resource_type from options", function () {
    const result = createTestURL("test", {

      resource_type: "raw"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/raw/upload/test");
  });

  it("should ignore http links only if type is not given ", function () {
    let options, result;
    options = {

      type: null
    };
    result = createTestURL("http://example.com/", options);
    expect(result).toBe("http://example.com/");

    options = {

      type: "fetch"
    };
    result = createTestURL("http://example.com/", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/fetch/http://example.com/");
  });

  it("should escape fetch urls", function () {
    const result = createTestURL("http://blah.com/hello?a=b", {


      type: "fetch"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/fetch/http://blah.com/hello%3Fa%3Db");
  });
  it("should escape http urls", function () {
    const result = createTestURL("http://www.youtube.com/watch?v=d9NF2edxy-M", {

      type: "youtube"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/youtube/http://www.youtube.com/watch%3Fv%3Dd9NF2edxy-M");
  });
  it("should support background", function () {
    let options, result;
    options = {

      background: "red"
    };
    result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/b_red/test");

    options = {


      background: "#112233"
    };
    result = createTestURL("test", options);
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/b_rgb:112233/test");
  });

  it("should support default_image", function () {
    const result = createTestURL("test", {


      default_image: "default"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/d_default/test");
  });
  it("should support angle", function () {
    const result = createTestURL("test", {

      angle: 12
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/a_12/test");
  });

  it("should support format for fetch urls", function () {
    const result = createTestURL("http://cloudinary.com/images/logo.png", {

      format: "jpg",
      type: "fetch"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/fetch/f_jpg/http://cloudinary.com/images/logo.png");
  });

  it("should support effect", function () {
    const result = createTestURL("test", {


      effect: "sepia"
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/e_sepia/test");
  });

  it("should support effect with param", function () {
    const result = createTestURL("test", {


      effect: ["sepia", 10]
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/e_sepia:10/test");
  });

  [
    ["overlay", "l"],
    ["underlay", "u"]
  ].forEach(([layer, short]) => {
    it(`should support ${layer}`, function () {
      const result = createTestURL("test", {

        [layer]: "text:hello"
      });
      expect(result).toBe(`http://res.cloudinary.com/demo/image/upload/${short}_text:hello/test`);
    });

    it(`should not pass width/height to html for ${layer}`, function () {
      const result = createTestURL("test", {

        [layer]: "text:hello",
        height: 100,
        width: 100
      });
      expect(result).toBe(`http://res.cloudinary.com/demo/image/upload/h_100,${short}_text:hello,w_100/test`);
    });
  });


  it('should support custom function of type wasm with a source', function () {
    const result = createTestURL("test", {

      custom_function: {function_type: 'wasm', source: 'blur.wasm'}
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_wasm:blur.wasm/test");
  });

  it('should support arbitrary custom function types', function () {
    const result = createTestURL("test", {

      custom_function: {function_type: 'amazing', source: 'awesome'}
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_amazing:awesome/test");
  });

  it('should support custom function with no source', function () {
    const result = createTestURL("test", {

      custom_function: {function_type: 'wasm'}
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_wasm:/test");
  });

  it('should support custom function with no function_type', function () {
    const result = createTestURL("test", {

      custom_function: {source: 'blur.wasm'}
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_:blur.wasm/test");
  });

  it('should support custom function that is not an object', function () {
    const result = createTestURL("test", {

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      custom_function: []
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_:/test");
  });

  it('should support custom function with no function_type or source', function () {
    const result = createTestURL("test", {

      custom_function: {}
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_:/test");
  });

  it('should support custom function of type remote', function () {
    const result = createTestURL("test", {

      custom_function: {
        function_type: 'remote',
        source:
          'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
      }
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_remote:aHR0cHM6Ly9kZjM0cmE0YS5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2Nsb3VkaW5hcnlGdW5jdGlvbg/test");
  });

  it('should not include custom function with undefined value', function () {
    const result = createTestURL("test", {

      custom_function: undefined
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/test");
  });

  it('should support custom pre function', function () {
    const result = createTestURL("test", {

      custom_pre_function: {
        function_type: 'remote',
        source:
          'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
      }
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_pre:remote:aHR0cHM6Ly9kZjM0cmE0YS5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2Nsb3VkaW5hcnlGdW5jdGlvbg/test");
  });

  it('should generate url safe base64 in remote custom pre function', function () {
    const result = createTestURL("test", {

      custom_pre_function: {
        function_type: 'remote',
        source:
          "https://opengraphimg.com/.netlify/functions/generate-opengraph?author=opengraphimg&title=Hey%20Chris%20this%20is%20working"
      }
    });
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_pre:remote:aHR0cHM6Ly9vcGVuZ3JhcGhpbWcuY29tLy5uZXRsaWZ5L2Z1bmN0aW9ucy9nZW5lcmF0ZS1vcGVuZ3JhcGg_YXV0aG9yPW9wZW5ncmFwaGltZyZ0aXRsZT1IZXklMjBDaHJpcyUyMHRoaXMlMjBpcyUyMHdvcmtpbmc/test");
  });

  it('should support custom pre function with no function_type or source', function () {
    const result = createTestURL("test", {

      custom_pre_function: {}
    });

    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fn_pre::/test");
  });

  it("should support density", function () {
    const result = createTestURL("test", {

      density: 150
    });

    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/dn_150/test");
  });
  it("should support page", function () {
    const result = createTestURL("test", {

      page: 5
    });

    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/pg_5/test");
  });

  it("should support external cname", function () {
    const result = createTestURL("test", {

      secure: false,
      cname: "hello.com"
    });

    expect(result).toBe("http://hello.com/demo/image/upload/test");
  });

  it("should support border", function () {
    const result1 = createTestURL("test", {


      border: {
        width: 5
      }
    });
    expect(result1).toBe("http://res.cloudinary.com/demo/image/upload/bo_5px_solid_black/test");

    const result2 = createTestURL("test", {


      border: {
        width: 5,
        color: "#ffaabbdd"
      }
    });

    expect(result2).toBe("http://res.cloudinary.com/demo/image/upload/bo_5px_solid_rgb:ffaabbdd/test");

    const result3 = createTestURL("test", {

      border: "1px_solid_blue"
    });

    expect(result3).toBe("http://res.cloudinary.com/demo/image/upload/bo_1px_solid_blue/test");
  });
  it("should support flags", function () {
    let options, result;
    options = {

      flags: "abc"
    };
    result = createTestURL("test", options);

    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fl_abc/test");
    options = {


      flags: ["abc", "def"]
    };
    result = createTestURL("test", options);

    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/fl_abc.def/test");
  });
  it("should add version if public_id contains /", function () {
    const result = createTestURL("folder/test", {cloud_name: 'demo'});
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/v1/folder/test");

    const result1 = createTestURL("folder/test", {

      version: 123
    });
    expect(result1).toBe("http://res.cloudinary.com/demo/image/upload/v123/folder/test");
  });

  it("should not add version if public_id contains version already", function () {
    const result = createTestURL("v1234/test", {cloud_name: 'demo'});
    expect(result).toBe("http://res.cloudinary.com/demo/image/upload/v1234/test");
  });

  it("should allow to shorted image/upload urls", function () {
    const result = createTestURL("test", {

      shorten: true
    });
    expect(result).toBe("http://res.cloudinary.com/demo/iu/test");
  });

  it("should escape public_ids", function () {
    const tests = [
      // [source, target]
      ["a b", "a%20b"],
      ["a+b", "a%2Bb"],
      ["a%20b", "a%20b"],
      ["a-b", "a-b"],
      ["a??b", "a%3F%3Fb"]
    ];
    tests.forEach(([source, target]) => {
      const result = createTestURL(source, {
        cloud_name: 'demo'
      });
      expect(result).toBe(`http://res.cloudinary.com/demo/image/upload/${target}`);
    });
  });

  it("Should support border!", function () {
    const result = createTestURL("sample.jpg", {

      border: {
        width: 5,
        color: '#ffaabbdd'
      }
    });
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/bo_5px_solid_rgb:ffaabbdd/sample.jpg');
  });

  it("should not modify options objects when chaining transformations ", function () {
    const optionObj = {
      cloud_name: 'test123',
      transformation: [{
        overlay: 'somepid',
        crop: "fill",
        height: 120,
        width: 80
      }]
    };
    const urlFirstRun = createTestURL("sample", optionObj);
    const urlSecondRun = createTestURL("sample", optionObj);

    expect(urlFirstRun).toEqual("http://res.cloudinary.com/test123/image/upload/c_fill,h_120,l_somepid,w_80/sample");
    expect(urlFirstRun).toEqual(urlSecondRun);
  });
  it("Transformation object: User Define Variables", function () {
    const options = {
      if: "face_count > 2",
      variables: [["$z", 5], ["$foo", "$z * 2"]],
      crop: "scale",
      width: "$foo * 200"
    };
    const result = createTestURL("sample",
      {
        transformation:  new Transformation(options)
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/if_fc_gt_2,$z_5,$foo_$z_mul_2,c_scale,w_$foo_mul_200/sample');
  });

  it("Transformation object: should sort variables", function () {
    const result = createTestURL("sample",
      {
        transformation:  new Transformation({
          $second: 1,
          $first: 2
        })
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/$first_2,$second_1/sample');
  });

  it("Transformation object: string overlay", function () {
    const result = createTestURL("sample",
      {
        transformation:  new Transformation().overlay("text:hello").width(100).height(100)
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/h_100,l_text:hello,w_100/sample');
  });

  it("Transformation object: object overlay", function () {
    const options = {
      text: "Cloudinary for the win!",
      fontFamily: "Arial",
      fontSize: 18,
      fontAntialiasing: "fast"
    };
    const result = createTestURL("sample",
      {
        transformation:  new Transformation().overlay(options).width(100).height(100)
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/h_100,l_text:Arial_18_antialias_fast:Cloudinary%20for%20the%20win%21,w_100/sample');
  });

  it("Transformation object: should support fetch:URL literal", function () {
    const result = createTestURL("sample",
      {
        transformation:  new Transformation().overlay("fetch:http://cloudinary.com/images/old_logo.png")
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9vbGRfbG9nby5wbmc=/sample');
  });

  it("Transformation object: should support chained transformation", function () {
    const result = createTestURL("sample",
      {
        transformation:  new Transformation().width(100).crop("scale").chain().crop("crop").width(200)
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/c_scale,w_100/c_crop,w_200/sample');
  });
});
