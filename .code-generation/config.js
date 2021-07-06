module.exports = {
  "specVersion": "master",
  "langConfig": {
    newInstanceSyntax: 'new #name(#req)#optional',
    lang: 'Javascript',
    methodDelimiter: '.',
    groupDelimiter: '.',
    openQualifiersChar: '',
    closeQualifiersChar: '',
    closeTransformationChar: '',
    hideActionGroups: true,
    openSyntaxString: "new CloudinaryImage('sample')",
    openActionChar: '(',
    closeActionChar: ')',
    overwritePreset: 'javascript',
    closeSyntaxString: ';',
    arraySeparator: ', ',
    arrayOpen: '[',
    arrayClose: ']',
    prettier: {
      parser: 'babel'
    },
    formats: {
      formatClassOrEnum: 'PascalCase',
      formatMethod: 'camelCase',
      formatFloat: (f) => {
        if (!f.toString().includes('.')) {
          return `'${f}.0'` // In JS world, 1.0 is 1, so we make sure 1.0 stays 1.0
        } else {
          return f;
        }
      }
    },
    childTransformations: {
      image: {
        open: "new ImageTransformation()",
        close: '',
      },
      video: {
        open: "new VideoTransformation()",
        close: '',
      },
      media: {
        open: "new MediaTransformation()",
        close: '',
      }
    }
  },
  "overwrites": {
    qualifiers: {
      color_override: (payload) => {
        const {qualifierDTO} = payload;
        const colorName = qualifierDTO.qualifiers[0].name;

        // TODO this should be streamlined with how we deal with color.
        return `.colorOverride("${colorName}")`
      },
      color: (payload) => {
        const {qualifierDTO} = payload;
        // This case supports three types of qualifiers
        // TODO this DTO structure needs to be aligned
        // {name:color, is_required:true qualifiers: [{group:'color', name: 'red', is_required:true}]}
        // {group:'color', name: 'red', is_required:true}
        // {group:'color', name: 'rgb', qualifiers: [{ "name": "color", "value": "#d5d2ca", "is_required": true, "value_type": "string" }]}

        let colorName;
        if (qualifierDTO.qualifiers && qualifierDTO.name === 'rgb') {
          colorName = qualifierDTO.qualifiers[0].value;
        } else {
          colorName = qualifierDTO.qualifiers ? qualifierDTO.qualifiers[0].name : qualifierDTO.name;
        }

        return `'${colorName}'`;
      }
    }
  }
}
