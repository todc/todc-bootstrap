/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var fs = require('fs');
  var path = require('path');
  var BsLessdocParser = require('./grunt/bs-lessdoc-parser.js');
  var getLessVarsData = function () {
    var filePath = path.join(__dirname, 'less/variables.less');
    var fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    var parser = new BsLessdocParser(fileContent);
    return { sections: parser.parseFile() };
  };
  var generateRawFiles = require('./grunt/bs-raw-files-generator.js');

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * TODC Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
    // NOTE: This jqueryCheck code is duplicated in customizer.js; if making changes here, be sure to update the other copy too.
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',

    // Bootstrap variables
    bootstrapDir: 'bootstrap',
    bootstrapGit: 'https://github.com/twbs/bootstrap.git',
    bootstrapVersion: 'v3.1.1',

    // Task configuration.
    clean: {
      dist: ['dist', 'docs/dist']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      grunt: {
        options: {
          jshintrc: 'grunt/.jshintrc'
        },
        src: ['Gruntfile.js', 'grunt/*.js']
      },
      assets: {
        src: ['docs/assets/js/src/*.js', 'docs/assets/js/*.js', '!docs/assets/js/*.min.js']
      }
    },

    jscs: {
      options: {
        config: 'js/.jscsrc'
      },
      grunt: {
        src: '<%= jshint.grunt.src %>'
      },
      assets: {
        options: {
          requireCamelCaseOrUpperCaseIdentifiers: null
        },
        src: '<%= jshint.assets.src %>'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      docsJs: {
        // NOTE: This src list is duplicated in footer.html; if making changes here, be sure to update the other copy too.
        src: [
          'docs/assets/js/vendor/select2.js',
          'docs/assets/js/vendor/holder.js',
          'docs/assets/js/vendor/ZeroClipboard.min.js',
          'docs/assets/js/src/application.js'
        ],
        dest: 'docs/assets/js/docs.min.js'
      }
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        src: 'less/todc-bootstrap.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>.css'
      },
      docs: {
        src: 'docs/assets/css/src/docs.css'
      },
      examples: {
        expand: true,
        cwd: 'docs/examples/',
        src: '**/*.css',
        dest: 'docs/examples/'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      src: [
        'dist/css/todc-bootstrap.css'
      ],
      examples: [
        'docs/examples/**/*.css'
      ],
      docs: {
        options: {
          ids: false,
          'overqualified-elements': false
        },
        src: 'docs/assets/css/src/docs.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true

      },
      minifyCore: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      },
      docs: {
        src: [
          'docs/assets/css/src/docs.css',
          'docs/assets/css/src/pygments-manni.css',
          'docs/assets/css/src/select2.css'
        ],
        dest: 'docs/assets/css/docs.min.css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
      }
    },

    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/'
      },
      examples: {
        expand: true,
        cwd: 'docs/examples/',
        src: '**/*.css',
        dest: 'docs/examples/'
      },
      docs: {
        src: 'docs/assets/css/src/docs.css',
        dest: 'docs/assets/css/src/docs.css'
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        flatten: false,
        cwd: '<%= bootstrapDir %>/dist',
        src: '**',
        dest: 'dist'
      },
      images: {
        expand: true,
        src: 'img/*',
        dest: 'dist'
      },
      docs: {
        expand: true,
        cwd: './dist',
        src: [
          'css/*',
          'js/*',
          'fonts/*',
          'img/*'
        ],
        dest: 'docs/dist'
      }
    },

    compress: {
      main: {
        options: {
          archive: 'dist/<%= pkg.name %>-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          pretty: true
        },
        expand: true,
        cwd: 'dist',
        src: '**',
        dest: 'todc-bootstrap/'
      }
    },

    jekyll: {
      docs: {}
    },

    jade: {
      options: {
        pretty: true,
        data: getLessVarsData
      },
      customizerVars: {
        src: 'docs/_jade/customizer-variables.jade',
        dest: 'docs/_includes/customizer-variables.html'
      },
      customizerNav: {
        src: 'docs/_jade/customizer-nav.jade',
        dest: 'docs/_includes/nav/customize.html'
      }
    },

    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [
          'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
          'Element img is missing required attribute src.',
          'Attribute autocomplete not allowed on element input at this point.',
          'Attribute autocomplete not allowed on element button at this point.'
        ]
      },
      files: {
        src: '_gh_pages/**/*.html'
      }
    },

    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: 'less'
      }
    },

    // checkout-bootstrap task
    shell: {
      gitclone: {
        command: 'git clone <%= bootstrapGit %> <%= bootstrapDir %>'
      },
      gitcheckout: {
        command: 'git checkout tags/<%= bootstrapVersion %>',
        options: {
          execOptions: {
            cwd: '<%= bootstrapDir %>'
          }
        }
      }
    },

    sed: {
      versionNumber: {
        pattern: (function () {
          var old = grunt.option('oldver');
          return old ? RegExp.quote(old) : old;
        })(),
        replacement: grunt.option('newver'),
        recursive: true
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // Clone bootstrap and checkout the appropriate tag task.
  grunt.registerTask('checkout-bootstrap', 'shell');

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

  // Test task.
  // var testSubtasks = ['dist-css', 'csslint', 'jshint', 'jscs', 'validate-html', 'build-customizer-html'];
  var testSubtasks = ['dist-css', 'csslint', 'jshint', 'jscs', 'validate-html'];
  grunt.registerTask('test', testSubtasks);

  // JS distribution task.
  grunt.registerTask('dist-js', 'uglify');

  // CSS distribution task.
  grunt.registerTask('less-compile', ['less:compileCore']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer', 'usebanner', 'csscomb', 'cssmin', 'dist-docs']);

  // Docs distribution task.
  grunt.registerTask('dist-docs', 'copy:docs');

  // Full distribution task.
  // grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts', 'dist-js']);
  grunt.registerTask('dist', ['clean', 'dist-css', 'copy', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['test', 'dist']);

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', 'sed');

  // task for building customizer
  grunt.registerTask('build-customizer', ['build-customizer-html', 'build-raw-files']);
  grunt.registerTask('build-customizer-html', 'jade');
  grunt.registerTask('build-raw-files', 'Add scripts/less files to customizer.', function () {
    var banner = grunt.template.process('<%= banner %>');
    generateRawFiles(grunt, banner);
  });
};
