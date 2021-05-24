import {generateTransformationString} from "../../../src/backwards/generateTransformationString";
import {createTestURL} from "./utils/createTestURL";


describe("Transformation", function () {
  it('should support custom function remote', function () {
    expect(createTestURL('test', {
      transformation: [
        {
          custom_function: {
            function_type: 'remote',
            source: 'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
          }
        }
      ]
    })).toBe('http://res.cloudinary.com/demo/image/upload/fn_remote:aHR0cHM6Ly9kZjM0cmE0YS5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2Nsb3VkaW5hcnlGdW5jdGlvbg/test');
  });

  it('should support custom function wasm', function () {
    expect(createTestURL('test', {
      transformation: [
        {
          custom_function: {function_type: 'wasm', source: 'blur.wasm'}
        }
      ]
    })).toBe('http://res.cloudinary.com/demo/image/upload/fn_wasm:blur.wasm/test');
  });

  it('should use custom pre function if no custom_function defined', function () {
    expect(createTestURL('test', {
      transformation: [
        {
          custom_pre_function: {
            function_type: 'remote',
            source: 'https://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
          }
        }
      ]
    })).toBe('http://res.cloudinary.com/demo/image/upload/fn_pre:remote:aHR0cHM6Ly9kZjM0cmE0YS5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2Nsb3VkaW5hcnlGdW5jdGlvbg/test');
  });

  it('should ignore custom pre function if custom function exists', function () {
    expect(createTestURL('test', {
      transformation: [
        {
          custom_function: {function_type: 'wasm', source: 'blur.wasm'},
          custom_pre_function: {
            function_type: 'remote',
            source: 'http://df34ra4a.execute-api.us-west-2.amazonaws.com/default/cloudinaryFunction'
          }
        }
      ]
    })).toBe('http://res.cloudinary.com/demo/image/upload/fn_wasm:blur.wasm/test');
  });

  it('should ignore empty values', function () {
    expect(createTestURL('test', {
      width: null,
      crop: 'crop',
      flags: null,
      startOffset: null,
      transformation: null
    })).toBe('http://res.cloudinary.com/demo/image/upload/c_crop/test');

    expect(createTestURL('test', {
      width: '', // regular
      crop: 'crop',
      flags: [],
      startOffset: [],
      transformation: []
    })).toBe('http://res.cloudinary.com/demo/image/upload/c_crop/test');

    expect(createTestURL('test', {
      width: '', // regular
      crop: 'crop',
      flags: [],
      startOffset: '', //range
      transformation: '' //transformation
    })).toBe('http://res.cloudinary.com/demo/image/upload/c_crop/test');

    expect(createTestURL('test', {
      transformation: {}
    })).toBe('http://res.cloudinary.com/demo/image/upload/test');
  });

  it('should not change variable names even if they look like keywords', function () {
    const options = {
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

  it('should support oh,ow', function () {
    expect(createTestURL("test", {
      width: "ow",
      height: "oh",
      crop: "crop"
    })).toContain(`c_crop,h_oh,w_ow/test`);
  });

  it('should support ih,iw', function () {
    expect(createTestURL("test", {
      width: "iw",
      height: "ih",
      crop: "crop"
    })).toContain("c_crop,h_ih,w_iw/test");
  });

  it('should support aspect_ratio', function () {
    expect(createTestURL('test', {
      aspect_ratio: '1.0'
    })).toBe('http://res.cloudinary.com/demo/image/upload/ar_1.0/test');

    expect(createTestURL('test', {
      aspect_ratio: '3:2'
    })).toBe('http://res.cloudinary.com/demo/image/upload/ar_3:2/test');
  });

  it('should use x, y, radius, prefix, gravity and quality from options', function () {
    expect(createTestURL('test', {
      x: 1,
      y: 2,
      radius: 3,
      gravity: 'center',
      quality: 0.4,
      prefix: 'a'
    })).toBe('http://res.cloudinary.com/demo/image/upload/g_center,p_a,q_0.4,r_3,x_1,y_2/test');
  });


  it('should support named tranformation', function () {
    expect(createTestURL('test', {
      transformation: 'blip'
    })).toContain('http://res.cloudinary.com/demo/image/upload/t_blip/test');
  });

  it('should support array of named tranformations', function () {
    expect(createTestURL('test', {
      transformation: ['blip', 'blop']
    })).toContain('http://res.cloudinary.com/demo/image/upload/t_blip.blop/test');
  });

  it('should support named transformations with spaces', function () {
    expect(createTestURL('test', {
      transformation: ['blip blop']
    })).toContain('http://res.cloudinary.com/demo/image/upload/t_blip%20blop/test');
  });

  it('should support base tranformation', function () {
    expect(createTestURL('test', {
      transformation: {
        x: 100,
        y: 100,
        crop: 'fill'
      },
      crop: 'crop',
      width: 100
    })).toBe('http://res.cloudinary.com/demo/image/upload/c_fill,x_100,y_100/c_crop,w_100/test');
  });

  it('should support array of base tranformations', function () {
    expect(createTestURL('test', {
      transformation: [
        {
          x: 100,
          y: 100,
          width: 200,
          crop: 'fill'
        },
        {
          radius: 10
        }
      ],
      crop: 'crop',
      width: 100
    })).toBe('http://res.cloudinary.com/demo/image/upload/c_fill,w_200,x_100,y_100/r_10/c_crop,w_100/test');
  });



  it('should not include empty tranformations', function () {
    expect(createTestURL('test', {
      transformation: [
        {},
        {
          x: 100,
          y: 100,
          crop: 'fill'
        },
        {}
      ]
    })).toBe('http://res.cloudinary.com/demo/image/upload/c_fill,x_100,y_100/test');
  });

  it('should support size', function () {
    expect(createTestURL('test', {
      size: '10x10',
      crop: 'crop'
    })).toContain('http://res.cloudinary.com/demo/image/upload/c_crop,h_10,w_10/test');
  });

  it('should support background', function () {
    expect(createTestURL('test', {
      background: 'red'
    })).toContain('http://res.cloudinary.com/demo/image/upload/b_red/test');
    expect(createTestURL('test', {
      background: '#112233'
    })).toContain('http://res.cloudinary.com/demo/image/upload/b_rgb:112233/test');
  });

  it('should support default_image', function () {
    expect(createTestURL('test', {
      default_image: 'default'
    })).toContain('http://res.cloudinary.com/demo/image/upload/d_default/test');
  });

  it('should support angle', function () {
    expect(createTestURL('test', {
      angle: 12
    })).toContain('http://res.cloudinary.com/demo/image/upload/a_12/test');
  });

  it('should support format for fetch urls', function () {
    expect(createTestURL('http://cloudinary.com/images/logo.png', {
      type: 'fetch',
      format: 'jpg'
    })).toContain('http://res.cloudinary.com/demo/image/fetch/f_jpg/http://cloudinary.com/images/logo.png');
  });


  it('should support density', function () {
    expect(createTestURL('test', {
      density: 150
    })).toContain('http://res.cloudinary.com/demo/image/upload/dn_150/test');
  });

  it('should support page', function () {
    expect(createTestURL('test', {
      page: 5
    })).toContain('http://res.cloudinary.com/demo/image/upload/pg_5/test');
  });

  it('should support border', function () {
    expect(createTestURL('test', {
      border: {
        width: 5
      }
    })).toContain('http://res.cloudinary.com/demo/image/upload/bo_5px_solid_black/test');

    expect(createTestURL('test', {
      border: {
        width: 5,
        color: '#ffaabbdd'
      }
    })).toContain('http://res.cloudinary.com/demo/image/upload/bo_5px_solid_rgb:ffaabbdd/test');

    expect(createTestURL('test', {
      border: '1px_solid_blue'
    })).toContain('http://res.cloudinary.com/demo/image/upload/bo_1px_solid_blue/test');
  });

  it('should support flags', function () {
    expect(createTestURL('test', {
      flags: 'abc'
    })).toContain('http://res.cloudinary.com/demo/image/upload/fl_abc/test');

    expect(createTestURL('test', {
      flags: ['abc', 'def']
    })).toContain('http://res.cloudinary.com/demo/image/upload/fl_abc.def/test');
  });

  it('should support opacity', function () {
    expect(createTestURL('test', {
      opacity: 30
    })).toContain('http://res.cloudinary.com/demo/image/upload/o_30/test');
  });

  it('should support dpr', function () {
    // Skipping this expect, mismatched behaviour between Node and Cloudinary-js
    // expect(createURL('test', {
    //   dpr: 1
    // })).toContain('http://res.cloudinary.com/dcemo/image/upload/dpr_1.0/test');

    expect(createTestURL('test', {
      dpr: 'auto'
    })).toContain('http://res.cloudinary.com/demo/image/upload/dpr_auto/test');

    expect(createTestURL('test', {
      dpr: 1.5
    })).toContain('http://res.cloudinary.com/demo/image/upload/dpr_1.5/test');
  });

  it('should support a decimal value in zoom', function () {
    expect(createTestURL('test', {
      zoom: 1.2
    })).toContain('http://res.cloudinary.com/demo/image/upload/z_1.2/test');
  });
});



//
// it('should use context value as user variables', function(){
//   const options = {
//     variables: [["$xpos", "ctx:!x_pos!_to_f"], ["$ypos", "ctx:!y_pos!_to_f"]],
//     crop: "crop",
//     x: "$xpos * w",
//     y: "$ypos * h"
//   };
//   const t = new Transformation(options).toString();
//   expect(t).toEqual('$xpos_ctx:!x_pos!_to_f,$ypos_ctx:!y_pos!_to_f,c_crop,x_$xpos_mul_w,y_$ypos_mul_h')
// });


// describe('User Define Variables', function() {
//   it("array should define a set of variables", function() {
//     var options, t;
//     options = {
//       if: "face_count > 2",
//       variables: [["$z", 5], ["$foo", "$z * 2"]],
//       crop: "scale",
//       width: "$foo * 200"
//     };
//     t = new Transformation(options).toString();
//     expect(t).toEqual("if_fc_gt_2,$z_5,$foo_$z_mul_2,c_scale,w_$foo_mul_200");
//   });
//   it("'$key' should define a variable", function() {
//     var options, t;
//     options = {
//       transformation: [
//         {
//           $foo: 10
//         },
//         {
//           if: "face_count > 2"
//         },
//         {
//           crop: "scale",
//           width: "$foo * 200 / face_count"
//         },
//         {
//           if: "end"
//         }
//       ]
//     };
//     t = new Transformation(options).toString();
//     expect(t).toEqual("$foo_10/if_fc_gt_2/c_scale,w_$foo_mul_200_div_fc/if_end");
//   });
//   it("should support and translate pow operator", function () {
//     expect(createURL("sample", {
//       $small: 150,
//       $big: "$small ^ 1.5",
//     }, `http://res.cloudinary.com/demo/image/upload/$big_$small_pow_1.5,$small_150/sample`, {});
//   });
//   it("should sort variables", function() {
//     var t;
//     t = new Transformation({
//       $second: 1,
//       $first: 2
//     }).toString();
//     expect(t).toEqual("$first_2,$second_1");
//   });
//   it("should place ordered variables after individual variables", function() {
//     var t;
//     t = new Transformation({
//       variables: [["$z", 5], ["$foo", "$z * 2"]],
//       $second: 1,
//       $first: 2
//     }).toString();
//     expect(t).toEqual("$first_2,$second_1,$z_5,$foo_$z_mul_2");
//   });
//   it("should support text values", function() {
//     expect(createURL("sample", {
//       effect: "$efname:100",
//       $efname: "!blur!"
//     }, "http://res.cloudinary.com/demo/image/upload/$efname_!blur!,e_$efname:100/sample", {});
//   });
//   it("should support string interpolation", function() {
//     expect(createURL("sample", {
//       crop: "scale",
//       overlay: {
//         text: "$(start)Hello $(name)$(ext), $(no ) $( no)$(end)",
//         font_family: "Arial",
//         font_size: "18"
//       }
//     }, "http://res.cloudinary.com/demo/image/upload/c_scale,l_text:Arial_18:$(start)Hello%20$(name)$(ext)%252C%20%24%28no%20%29%20%24%28%20no%29$(end)/sample", {});
//   });
// });


describe("Layers", function() {
  // it("should accept a string", function() {
  //   var result, transformation;
  //   transformation = new Transformation().overlay("text:hello");
  //   result = transformation.serialize();
  //   expect(result).toEqual("l_text:hello");
  // });
  //
  // it("should not pass width/height to html if overlay", function() {
  //   var result, transformation;
  //   transformation = new Transformation().overlay("text:hello").width(100).height(100);
  //   result = transformation.serialize();
  //   expect(result).toEqual("h_100,l_text:hello,w_100");
  //   expect(transformation.toHtmlAttributes().height).toBeUndefined();
  //   expect(transformation.toHtmlAttributes().width).toBeUndefined();
  // });
  //
  // it("should support fetch:URL literal", function() {
  //   var result, transformation;
  //   transformation = new Transformation().overlay("fetch:http://cloudinary.com/images/old_logo.png");
  //   result = transformation.serialize();
  //   expect(result).toEqual("l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9vbGRfbG9nby5wbmc=");
  // });
  //
  // it("should support fetch:URL FetchLayer", function() {
  //   const transformation = new Transformation({
  //     overlay: new FetchLayer("http://cloudinary.com/images/old_logo.png")
  //   });
  //   const result = transformation.serialize();
  //   expect(result).toEqual("l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9vbGRfbG9nby5wbmc=");
  // });
  //
  // it("should support fetch:URL Unicode", function() {
  //   const transformation = new Transformation().overlay("fetch:http://upload.wikimedia.org/wikipedia/commons/2/2b/고창갯벌.jpg");
  //   const result = transformation.serialize();
  //   expect(result).toEqual("l_fetch:aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8yLzJiLyVFQSVCMyVBMCVFQyVCMCVCRCVFQSVCMCVBRiVFQiVCMiU4Qy5qcGc=");
  // });


  // describe("chained functions", function() {
  //   it("should produce a layer string", function() {
  //     var tests;
  //     tests = [[new Layer().publicId("logo"), "logo"], [new Layer().publicId("folder/logo"), "folder:logo"], [new Layer().publicId("logo").type("private"), "private:logo"], [new Layer().publicId("logo").format("png"), "logo.png"], [new Layer().resourceType("video").publicId("cat"), "video:cat"], [new TextLayer().text("Hello World, Nice to meet you?").fontFamily("Arial").fontSize(18), "text:Arial_18:Hello%20World%252C%20Nice%20to%20meet%20you%3F"], [new TextLayer().text("Hello World, Nice to meet you?").fontFamily("Arial").fontSize(19).fontWeight("bold").fontStyle("italic").letterSpacing("4"), "text:Arial_19_bold_italic_letter_spacing_4:Hello%20World%252C%20Nice%20to%20meet%20you%3F"], [new SubtitlesLayer().publicId("sample_sub_en.srt"), "subtitles:sample_sub_en.srt"], [new SubtitlesLayer().publicId("sample_sub_he.srt").fontFamily("Arial").fontSize(40), "subtitles:Arial_40:sample_sub_he.srt"]];
  //     return tests.forEach(function(test) {
  //       var expected, layer;
  //       [layer, expected] = test;
  //       expect(layer.toString()).toEqual(expected);
  //     });
  //   });
  //   return describe("TextLayer", function() {
  //     return describe("fontStyle", function() {
  //       it("should throw an exception if fontFamily is not provided", function() {
  //         expect(function() {
  //           return new TextLayer().fontStyle("italic").toString();
  //         }).toThrow();
  //       });
  //     });
  //   });
  // });


  // describe("using options", function() {
  //   var layers, layers_options, text_encoded, text_layer;
  //   text_layer = "Hello World, /Nice to meet you?";
  //   text_encoded = "Hello%20World%252C%20%252FNice%20to%20meet%20you%3F";
  //   layers_options = [
  //     ["string",
  //       "text:test_text:hello",
  //       "text:test_text:hello"],
  //     ["explicit layer parameter",
  //       `text:test_text:${text_encoded}`,
  //       `text:test_text:${text_encoded}`],
  //     [
  //       "text parameter",
  //       {
  //         public_id: "test_text",
  //         text: text_layer
  //       },
  //       `text:test_text:${text_encoded}`
  //     ],
  //     [
  //       "text with font family and size parameters",
  //       {
  //         text: text_layer,
  //         font_family: "Arial",
  //         font_size: "18"
  //       },
  //       `text:Arial_18:${text_encoded}`
  //     ],
  //     [
  //       "text with text style parameter",
  //       {
  //         text: text_layer,
  //         font_family: "Arial",
  //         font_size: "18",
  //         font_weight: "bold",
  //         font_style: "italic",
  //         letter_spacing: 4,
  //         line_spacing: 2
  //       },
  //       `text:Arial_18_bold_italic_letter_spacing_4_line_spacing_2:${text_encoded}`
  //     ],
  //     [
  //       "subtitles",
  //       {
  //         resource_type: "subtitles",
  //         public_id: "subtitles.srt"
  //       },
  //       "subtitles:subtitles.srt"
  //     ],
  //     [
  //       "subtitles with font family and size",
  //       {
  //         resource_type: "subtitles",
  //         public_id: "subtitles.srt",
  //         font_family: "Arial",
  //         font_size: "40"
  //       },
  //       "subtitles:Arial_40:subtitles.srt"
  //     ]
  //   ];
  //   layers = [['overlay', 'l'], ['underlay', 'u']];
  //   return layers.forEach(function(layer) {
  //     var param, short;
  //     [param, short] = layer;
  //     return describe(param, function() {
  //       layers_options.forEach(function(test) {
  //         var name, options, result;
  //         [name, options, result] = test;
  //         it(`should support ${name}`, function() {
  //           var testOptions;
  //           testOptions = {};
  //           testOptions[param] = options;
  //           expect(new cloudinary.Transformation(testOptions).serialize()).toEqual(`${short}_${result}`);
  //         });
  //       });
  //       it('should not pass width/height to html for ' + param, function() {
  //         var testOptions;
  //         testOptions = {
  //           height: 100,
  //           width: 100
  //         };
  //         testOptions[param] = 'text:hello';
  //         expect(createURL('test', testOptions, `${protocol}//res.cloudinary.com/demo/image/upload/h_100,${short}_text:hello,w_100/test`, {});
  //       });
  //     });
  //   });
  // });


  // describe("conditional duration", function () {
  //   const durationValues = [
  //     {key: 'duration', value: 'du'},
  //     {key: 'initialDuration', value: 'idu'},
  //     {key: 'initial_duration', value: 'idu'}
  //   ];
  //
  //   durationValues.forEach(({key, value}) => {
  //     const expected = `if_${value}_gt_30/c_scale,w_200/if_end`;
  //     it(`should generate transformation with ${key}`, function () {
  //       let options = {
  //         transformation: [
  //           {
  //             if: key + " > 30"
  //           },
  //           {
  //             crop: "scale",
  //             width: "200"
  //           },
  //           {
  //             if: "end"
  //           }
  //         ]
  //       };
  //       expect(new Transformation(options).toString()).toEqual(expected);
  //     });
  //   });
  // });
  //
  //
});

//
// IGNORE BELOW THIS LINE
//
//
// describe("keyframe_interval", function() {
//   it('should support keyframe_interval in options', function() {
//     expect(Transformation.new({
//       keyframe_interval: 10
//     }).toString()).toEqual("ki_10");
//   });
//   it('should support keyframeInterval()', function() {
//     expect(Transformation.new().keyframeInterval(10).toString()).toEqual("ki_10");
//   });
// });
//
// describe("streaming_profile", function() {
//   it('should support streaming_profile in options', function() {
//     expect(Transformation.new({
//       streaming_profile: "somë-profilé"
//     }).toString()).toEqual("sp_somë-profilé");
//   });
//   it('should support streamingProfile()', function() {
//     expect(Transformation.new().streamingProfile("somë-profilé").toString()).toEqual("sp_somë-profilé");
//   });
// });
