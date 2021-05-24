import {createTestURL} from "./utils/createTestURL";

describe('Conditional Transformation', function () {
  it("should include the if parameter as the first component in the transformation string", function () {
    let url;

    url = createTestURL("sample", {
      if: "w_lt_200",
      crop: "fill",
      height: 120,
      width: 80
    });

    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/sample");

    url = createTestURL("sample", {
      crop: "fill",
      height: 120,
      if: "w_lt_200",
      width: 80
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/sample");
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

  it("including spaces and operators - should translate operators", function () {
    const url = createTestURL("sample", {
      if: "w < 200",
      crop: "fill",
      height: 120,
      width: 80
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/sample");
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
  //
  // it("Chaining with literal conditions - should add an if parameter", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if("ar_gt_3:4").width(100).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4,c_scale,w_100/sample");
  // });
  //
  //
  // it("should passing an operator and a value adds a condition", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if().aspectRatio("gt", "3:4").then().width(100).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4,c_scale,w_100/sample");
  // });
  // it("should chaining condition with `and`", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if().aspectRatio("gt", "3:4").and().width("gt", 100).then().width(50).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4_and_w_gt_100,c_scale,w_50/sample");
  // });
  // it("should chain conditions with `or`", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if().aspectRatio("gt", "3:4").and().width("gt", 100).or().width("gt", 200).then().width(50).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4_and_w_gt_100_or_w_gt_200,c_scale,w_50/sample");
  // });
  // it("should translate operators", function () {
  //   let url;
  //
  //   url = createURL("sample", cloudinary.Transformation.new().if().aspectRatio(">", "3:4").and().width("<=", 100).or().width("gt", 200).then().width(50).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4_and_w_lte_100_or_w_gt_200,c_scale,w_50/sample");
  //
  //   url = createURL("sample", cloudinary.Transformation.new().if().aspectRatio(">", "3:4").and().width("<=", 100).or().width(">", 200).then().width(50).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4_and_w_lte_100_or_w_gt_200,c_scale,w_50/sample");
  //
  //   url = createURL("sample", cloudinary.Transformation.new().if().aspectRatio(">=", "3:4").and().pageCount(">=", 100).or().pageCount("!=", 0).then().width(50).crop("scale"));
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ar_gte_3:4_and_pc_gte_100_or_pc_ne_0,c_scale,w_50/sample");
  // });

  // it("Chains transformations to an image tag", function () {
  //   const imgTag = this.cl.imageTag("sample");
  //   const imgHtml = imgTag.transformation().crop("fit").width(1000).chain().crop("limit").height(1000).toHtml();
  //   const url = new RegExp("http://res.cloudinary.com/demo/image/upload/c_fit,w_1000/c_limit,h_1000/sample");
  //   expect(imgHtml).toMatch(url);
  // });
  // it("Chains transformations with a private CDN configuration", function () {
  //   const imgTag = this.cl.imageTag("sample", {
  //     private_cdn: true
  //   });
  //   const imgHtml = imgTag.transformation().width(100).crop("scale").chain().crop("crop").width(200).toHtml();
  //   const url = new RegExp("http://sdk-test-res.cloudinary.com/image/upload/c_scale,w_100/c_crop,w_200/sample");
  //   expect(imgHtml).toMatch(url);
  // });
  // it("Chains transformations to a secure configuration", function () {
  //   const imgTag = this.cl.imageTag("sample", {
  //     secure: true
  //   });
  //   const imgHtml = imgTag.transformation().width(100).crop("scale").chain().crop("crop").width(200).toHtml();
  //   const url = new RegExp("http://res.cloudinary.com/demo/image/upload/c_scale,w_100/c_crop,w_200/sample");
  //   expect(imgHtml).toMatch(url);
  // });
  // it("Chains transformations to a secure private CDN configuration", function () {
  //   const imgTag = this.cl.imageTag("sample", {
  //     secure: true,
  //     private_cdn: true
  //   });
  //   const imgHtml = imgTag.transformation().width(100).crop("scale").chain().crop("crop").width(200).toHtml();
  //   const url = new RegExp("http://sdk-test-res.cloudinary.com/image/upload/c_scale,w_100/c_crop,w_200/sample");
  //   expect(imgHtml).toMatch(url);
  // });
  it("should chain if_else conditions disregarding order of transformation parameters in string", function () {
    const url = createTestURL("sample", {
      "transformation": [
        {
          "if": "ils_gt_0.5",
          "width": 120,
          "height": 150,
          "crop": "pad"
        },
        {
          "if": "else",
          "width": 120,
          "height": 150,
          "crop": "fill"
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ils_gt_0.5,c_pad,h_150,w_120/if_else,c_fill,h_150,w_120/sample");

    const paramsOrderUrl = createTestURL("sample", {
      "transformation": [
        {
          "crop": "pad",
          "height": 150,
          "if": "ils_gt_0.5",
          "width": 120
        },
        {
          "crop": "fill",
          "height": 150,
          "if": "else",
          "width": 120
        }
      ]
    });
    expect(paramsOrderUrl).toEqual(url);
  });
  it("should chain if_else conditions when explicitly ending the transformation", function () {
    const url = createTestURL("sample", {
      "transformation": [
        {
          "if": "ils_gt_0.5"
        },
        {
          "width": 120,
          "height": 150,
          "crop": "pad"
        },
        {
          "if": "else"
        },
        {
          "width": 120,
          "height": 150,
          "crop": "fill"
        },
        {
          "if": "end"
        }
      ]
    });
    expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_ils_gt_0.5/c_pad,h_150,w_120/if_else/c_fill,h_150,w_120/if_end/sample");
  });

  // Commented out tests pending decision on how to handle these in V2->backwards compatibility
  // it("should support and translate operators:  '=', '!=', '<', '>', '<=', '>=', '&&', '||'", function () {
  //   const allOperators = 'if_' + 'w_eq_0_and' + '_h_ne_0_or' + '_ar_lt_0_and' + '_pc_gt_0_and' + '_fc_lte_0_and' + '_w_gte_0' + ',e_grayscale';
  //   expect(cloudinary.Transformation.new().if().width("=", 0).and().height("!=", 0).or().aspectRatio("<", 0).and().pageCount(">", 0).and().faceCount("<=", 0).and().width(">=", 0).then().effect("grayscale").serialize()).toEqual(allOperators);
  //   expect(cloudinary.Transformation.new().if("w = 0 && height != 0 || aspectRatio < 0 and pageCount > 0 and faceCount <= 0 and width >= 0").effect("grayscale").serialize()).toEqual(allOperators);
  // });

  // it("should serialize to 'if_end'", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if().width("gt", 100).and().width("lt", 200).then().width(50).crop("scale").endIf());
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_gt_100_and_w_lt_200/c_scale,w_50/if_end/sample");
  // });
  // it("force the if clause to be chained", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if().width("gt", 100).and().width("lt", 200).then().width(50).crop("scale").endIf());
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_gt_100_and_w_lt_200/c_scale,w_50/if_end/sample");
  // });
  //
  // it("force the if_else clause to be chained", function () {
  //   const url = createURL("sample", cloudinary.Transformation.new().if().width("gt", 100).and().width("lt", 200).then().width(50).crop("scale").else().width(100).crop("crop").endIf());
  //   expect(url).toEqual("http://res.cloudinary.com/demo/image/upload/if_w_gt_100_and_w_lt_200/c_scale,w_50/if_else/c_crop,w_100/if_end/sample");
  // });
});
