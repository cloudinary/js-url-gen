module.exports = function (grunt) {

  var path = require("path");

  /**
   * Used to process the handlebar template names when compiling them to the "tmpl" namespace.
   * @example
   * processTemplateName( "src/tmpl/template.hbs" ) => "template" => tmpl["template"]
   * processTemplateName( "src/tmpl/_partial.hbs" ) => "partial" => tmpl["partial"]
   * processTemplateName( "src/tmpl/group/template.hbs" ) => "group/template" => tmpl["group/template"]
   * processTemplateName( "src/tmpl/group/_partial.hbs" ) => "group/partial" => tmpl["group/partial"]
   */
  var processTemplateName = function (filePath) {
    return filePath.replace(/^.*?\/tmpl\/(.*)?\.hbs/, '$1').replace(/(\/|^)_/, '$1');
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),
    clean: {
      test: ['.test/'],
      examples: ['examples/'],
      template: ['template/']
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'tmpl',
          node: true,
          partialsUseNamespace: true,
          processName: processTemplateName,
          processPartialName: processTemplateName
        },
        files: {
          "template/tmpl.js": ["src/tmpl/**/*.hbs"]
        }
      }
    },
    copy: {
      template: {
        files: [
          {expand: true, flatten: true, src: ['src/conf.json'], dest: 'template/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['src/publish.js'], dest: 'template/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['src/utils/template.js'], dest: 'template/utils/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['src/utils/postProcessor.js'], dest: 'template/utils/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['src/utils/docletHelper.js'], dest: 'template/utils/', filter: 'isFile'},
          {
            expand: true,
            flatten: true,
            src: ['src/utils/handlebarsHelper.js'],
            dest: 'template/utils/',
            filter: 'isFile'
          },
          {expand: true, flatten: true, src: ['src/utils/lunrHelper.js'], dest: 'template/utils/', filter: 'isFile'}
        ]
      },
      bootstrap: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
            dest: 'template/static/js/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'template/static/css/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['node_modules/bootstrap/dist/fonts/*'],
            dest: 'template/static/fonts/',
            filter: 'isFile'
          }
        ]
      },
      jquery: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/jquery/dist/jquery.min.js'],
            dest: 'template/static/js/',
            filter: 'isFile'
          }
        ]
      },
      clipboard: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/clipboard/dist/clipboard.min.js'],
            dest: 'template/static/js/',
            filter: 'isFile'
          }
        ]
      },
      prism: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/prismjs/prism.js'],
            dest: 'template/static/js/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['node_modules/prismjs/themes/prism.css'],
            dest: 'template/static/css/',
            filter: 'isFile'
          }
        ]
      },
      lunr: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/lunr/lunr.min.js'],
            dest: 'template/static/js/',
            filter: 'isFile'
          }
        ]
      }
    },
    uglify: {
      prism: { // prism requires it's own build as I've modified some plugins and use some default ones to.
        files: {
          'template/static/js/prism.min.js': [
            'node_modules/prismjs/prism.js',
            'node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js',
            'src/static/js/prism-line-numbers.js',
            'src/static/js/prism-toolbar.js',
            'src/static/js/prism-copy-to-clipboard.js',
          ]
        }
      },
      template: {
        files: {
          'template/static/js/template.min.js': [
            'src/static/js/markdown-helpers.js',
            'src/static/js/symbols.js',
            'src/static/js/table-of-contents.js',
            'src/static/js/access-filter.js',
            'src/static/js/lunr-search.js',
            'src/static/js/example-run.js',
            'src/static/js/google-analytics.js'
          ]
        }
      }
    },
    cssmin: {
      prism: {
        files: {
          'template/static/css/prism.min.css': [
            'node_modules/prismjs/themes/prism.css',
            'src/static/css/prism-theme-overrides.css',
            'src/static/css/prism-line-numbers.css',
            'src/static/css/prism-toolbar.css'
          ]
        }
      },
      template: {
        files: {
          'template/static/css/template.min.css': [
            'src/static/css/site.css',
            'src/static/css/callout.css',
            'src/static/css/page-header.css',
            'src/static/css/symbols.css',
            'src/static/css/tags.css',
            'src/static/css/anchor-link.css',
            'src/static/css/breadcrumbs.css',
            'src/static/css/dummy-console.css',
            'src/static/css/lunr-search.css',
            'src/static/css/related-tutorials.css',
            'src/static/css/toc.css',
            'src/static/css/access-filter.css'
          ]
        }
      }
    },
    jsdoc: {
      namespaced: {
        src: ["README.md", "test-src/namespaced/**/*.js"],
        options: {
          destination: './.test',
          template: './template',
          configure: './test-src/default.conf.json',
          tutorials: './test-src/fixtures/tutorials/',
          private: true
        }
      },
      default: {
        src: ["README.md", "test-src/fixtures/**/*.js"],
        options: {
          destination: './examples/default',
          template: './template',
          configure: './test-src/default.conf.json',
          tutorials: './test-src/fixtures/tutorials/',
          private: true
        }
      },
      inline: {
        src: ["README.md", "test-src/fixtures/**/*.js"],
        options: {
          destination: './examples/inline',
          template: './template',
          configure: './test-src/inline.conf.json',
          tutorials: './test-src/fixtures/tutorials/',
          private: true
        }
      },
      "logo-color": {
        src: ["README.md", "test-src/fixtures/**/*.js"],
        options: {
          destination: './examples/logo-color',
          template: './template',
          configure: './test-src/logo-color.conf.json',
          tutorials: './test-src/fixtures/tutorials/',
          private: true
        }
      },
      collapse: {
        src: ["README.md", "test-src/fixtures/**/*.js"],
        options: {
          destination: './examples/collapse',
          template: './template',
          configure: './test-src/collapse.conf.json',
          tutorials: './test-src/fixtures/tutorials/',
          private: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('template', ['clean:template', 'handlebars', 'copy', 'uglify', 'cssmin']);

  grunt.registerTask('all', ['template', 'clean:examples', 'jsdoc:default', 'jsdoc:inline', 'jsdoc:logo-color', 'jsdoc:collapse', 'jsdoc:namespaced']);

  grunt.registerTask('default', ['template', 'jsdoc:default']);

  grunt.registerTask('inline', ['template', 'jsdoc:inline']);

  grunt.registerTask('logo-color', ['template', 'jsdoc:logo-color']);

  grunt.registerTask('collapse', ['template', 'jsdoc:collapse']);

  grunt.registerTask('namespaced', ['template', 'jsdoc:namespaced']);

};
