import {expression} from "../../src/qualifiers/expression";

const cases: Record<string, [string, string]> = {
  'empty string is not affected': ['', ''],
  'normalize greater than': ['$foo > $bar', '$foo_gt_$bar'],
  'custom tags': ['if_!my_custom_tag! in tags', 'if_!my_custom_tag!_in_tags'],
  'single space is replaced with a single underscore': [' ', '_'],
  'blank string is replaced with a single underscore': ['   ', '___'],
  'underscore is not affected': ['_', '_'],
  'sequence of underscores and spaces is changed to just underscores': [' _ __  _', '________'],
  'arbitrary text is not affected': ['foobar', 'foobar'],
  'duration is recognized as a variable and replaced with du': ['duration', 'du'],
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
  '$__width recognized as user variable and not affected': ['$__width', '$__width'],
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
  '$__height_100 recognized as user variable and not affected': ['$__height_100', '$__height_100']
};

describe('Tests for Transformation Action -- Variable', () => {
  it('tests expressions values', () => {
    Object.keys(cases).forEach(function (testDescription) {
      const [input, expected] = cases[testDescription];
      expect(expression(input).toString()).toBe(expected);
    });
  });
});
