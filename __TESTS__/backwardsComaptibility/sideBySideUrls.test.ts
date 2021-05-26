import {
  createTestURL,
  createTestURLUsingRealV1
} from "./transformationV1Tests/utils/createTestURL";

describe("Create exact v1 urls", () => {
  const testCases = [
    // Borders
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
    // Width & height
    {
      name: "Width & height ignores empty",
      options: { width: 0, height: 0, crop: "scale" }
    },
    {
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
    // Aspect Ratio
    {
      name: "Aspect ratio",
      options: { aspect_ratio: "3:2" }
    },
    // Radius
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
    // Gravity
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
    // Combinations
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
    }
  ];

  testCases.forEach((testCase) => {
    const useIt = testCase.skip ? it.skip : it;
    useIt(testCase.name, function () {
      expect(createTestURL("sample.jpg", testCase.options)).toBe(
        createTestURLUsingRealV1("sample.jpg", testCase.options)
      );
    });
  });
});
