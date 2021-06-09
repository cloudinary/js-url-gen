import cloneDeep from 'lodash/cloneDeep';
import {
  createTestURL,
  createTestURLUsingRealLegacy
} from "./transformationLegacyTests/utils/createTestURL";

type CompatibilityTestCase = {
  name: string;
  options: Record<string, unknown>,
  skip?: boolean,
  publicId?: string
};

describe("Create exact legacy urls", () => {
  const testCases : CompatibilityTestCase[] = [
    //#region Borders
    {
      name: "Border as string",
      options: { border: "40px_solid_brown" }
    },
    {
      name: "Border no color",
      options: { border: { width: 5 } }
    },
    {
      name: "Border with color",
      options: { border: { width: 5, color: "#ffaabbdd" } }
    },
    //#endregion

    //#region Width & height
    {
      name: "Width & height ignores empty",
      options: { width: 0, height: 0, crop: "scale" }
    },
    {
      // This test fails due to legacy API inconsistency - node.js vs cloudinary-core
      skip: true,
      name: "Width & height ignored when no crop",
      options: { width: 100, height: 100 }
    },
    {
      name: "Width & height integer",
      options: { width: 100, height: 100, crop: "scale" }
    },
    {
      name: "Width & height decimal",
      options: { width: 0.5, crop: "scale" }
    },
    {
      name: "Width & height auto",
      options: { width: "auto:20:350", crop: "fill" }
    },
    {
      name: "Width & height oh,ow",
      options: { width: "ow", height: "oh", crop: "fill" }
    },
    {
      name: "Width & height oh,ow",
      options: { width: "iw", height: "ih", crop: "scale" }
    },
    //#endregion

    //#region Aspect Ratio
    {
      name: "Aspect ratio",
      options: { aspect_ratio: "3:2" }
    },
    //#endregion

    //#region Radius
    {
      name: "Radius simple",
      options: { radius: 10 }
    },
    {
      name: "Radius array of 3",
      options: { radius: [10, 20, 30] }
    },
    {
      name: "Radius array of 3",
      options: { radius: [10, 20, 30, 40] }
    },
    {
      name: "Radius variable",
      options: { radius: "$v" }
    },
    {
      name: "Radius array with variable",
      options: { radius: [10, 20, "$v"] }
    },
    //#endregion

    //#region Gravity
    {
      name: "Gravity auto",
      options: { width: 100, height: 100, crop: "crop", gravity: "auto" }
    },
    {
      name: "Gravity focal",
      options: {
        width: 100,
        height: 100,
        crop: "crop",
        gravity: "auto:adv_face"
      }
    },
    {
      name: "Gravity level",
      options: { width: 100, height: 100, crop: "crop", gravity: "auto:10" }
    },
    {
      name: "Gravity focal-level",
      options: {
        width: 100,
        height: 100,
        crop: "crop",
        gravity: "auto:adv_face:10"
      }
    },
    {
      name: "Gravity ocr_text",
      options: { width: 100, height: 100, crop: "crop", gravity: "ocr_text" }
    },
    {
      name: "Gravity auto ocr_text",
      options: {
        width: 100,
        height: 100,
        crop: "crop",
        gravity: "auto:ocr_text"
      }
    },
    {
      name: "Gravity custom_no_override",
      options: {
        width: 100,
        height: 100,
        crop: "crop",
        gravity: "auto:custom_no_override"
      }
    },
    //#endregion

    //#region Transformations
    {
      name: "Multi layer complex transformation",
      options: {
        transformation: [
          { width: 1000, height: "500", crop: "fill" },
          {
            overlay: "folder:frontpubid",
            width: 1000,
            height: 400,
            crop: "fill"
          },
          { effect: "shadow", x: 0, y: 2 },
          { gravity: "north", flags: "layer_apply" },
          {
            overlay: "folder:backpubid",
            background: "auto",
            width: 100,
            height: 100,
            crop: "pad",
            gravity: "north",
            y: 350,
            border: { width: 4, color: "white" },
            radius: "max",
            flags: "layer_apply"
          }
        ]
      }
    },
    //#endregion

    //#region Various Combinations
    {
      name: "Using x, y, radius, prefix, gravity and quality",
      options: {
        x: 1,
        y: 2,
        radius: 3,
        gravity: "center",
        quality: 0.4,
        prefix: "a"
      }
    },
    {
      name: "Using crop, fetch_format, quality, width",
      options: {
        crop: "limit",
        fetch_format: "auto",
        quality: "auto",
        width: 2000
      }
    },
    {
      name: "Using named transformation and fetch_format",
      options: {
        transformation: "sometrans",
        fetch_format: "auto"
      }
    },
    {
      skip: true,
      name: "Using width, height, crop, format - publicid has extension",
      options: {
        width: 250,
        height: 250,
        crop: "pad",
        format: "jpg"
      }
    },
    {
      name: "Using width, height, crop, format - publicid has no extension",
      publicId: "sample",
      options: {
        width: 250,
        height: 250,
        crop: "pad",
        format: "jpg"
      }
    },
    {
      name: "No options",
      options: undefined
    }
    //#endregion
  ];

  testCases.forEach((testCase) => {
    const useIt = testCase.skip ? it.skip : it;
    useIt(testCase.name, function () {
      const publicId = testCase.publicId || "sample.jpg";
      // Creating a clone since for some transformations the options
      // are consumed and removed from the object.
      const clonedOptions = cloneDeep(testCase.options);
      expect(createTestURL(publicId, testCase.options)).toBe(
        createTestURLUsingRealLegacy(publicId, clonedOptions)
      );
    });
  });
});
