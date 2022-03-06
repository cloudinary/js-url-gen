module.exports = {
  "SDKSpecVersion": "master",
  "langConfig": {
    newInstanceSyntax: 'new #name(#req)#optional',
    lang: 'Javascript',
    methodDelimiter: '.',
    groupDelimiter: '.',
    openQualifiersChar: '',
    closeQualifiersChar: '',
    closeTransformationChar: '',
    hideActionGroups: true,
    useSimpleQualifierValuesForGroups: ['Compass','AudioCodec','AnimatedFormat','ArtisticFilter','blendMode','Flag','FontStyle','FontAntialias','FontWeight','FontHinting','textAlignment','textDecoration', 'GradientDirection','ImproveMode','OutlineMode','Progressive','SimulateColorBlind','StreamingProfile'],
    mainTransformationString: {
      openSyntaxString: {
        image: 'new CloudinaryImage(\'#publicID\')',
        video: 'new CloudinaryVideo(\'#publicID\')',
        media: 'new CloudinaryMedia(\'#publicID\')'
      },
      closeSyntaxString: ';'
    },
    openActionChar: '(',
    closeActionChar: ')',
    overwritePreset: 'javascript',
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
    methodNameMap: {
      'delivery_type': 'set_delivery_type',
      'asset_type': 'set_asset_type',
      'deliveryType': 'set_delivery_type',
      'assetType': 'set_asset_type',
      'signature': 'setSignature',
    },
    canGenerateSignature:false,
    classNameMap: {},
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
        open: "new Transformation()",
        close: '',
      }
    },
    unsupportedTxParams: ['fl_waveform', 'fl_animated', 'e_tint', 'e_theme', 'af_'],
    unsupportedSyntaxList: ['.stroke(', '.textFit(', 'Animated.edit', '.RoundCorners(', 'getVideoFrame', '.transcode(']
  },
  "overwrites": {
    qualifiers: {
      // colorOverride is a qualifier of Reshape.trim action.
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
