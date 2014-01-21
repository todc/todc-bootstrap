/* jshint node: true */
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
  var generateGlyphiconsData = require('./docs/grunt/bs-glyphicons-data-generator.js');
  var BsLessdocParser = require('./docs/grunt/bs-lessdoc-parser.js');
  var generateRawFilesJs = require('./docs/grunt/bs-raw-files-generator.js');

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              ' * TODC Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
              ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
              ' */\n',
    bannerDocs: '/*!\n' +
              ' * TODC Bootstrap Docs (<%= pkg.homepage %>)\n' +
              ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n' +
              ' * details, see http://creativecommons.org/licenses/by/3.0/.\n' +
              ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap requires jQuery\') }\n\n',

    // Bootstrap variables
    bootstrapDir: 'bootstrap',
    bootstrapGit: 'https://github.com/twbs/bootstrap.git',
    bootstrapVersion: 'v3.1.0',

    // Task configuration.
    clean: {
      dist: 'dist'
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      assets: {
        src: 'docs/assets/js/application.js'
      },
      docsGrunt: {
        src: 'docs/grunt/*.js'
      }
    },

    jscs: {
      options: {
        config: 'js/.jscs.json',
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      assets: {
        src: 'docs/assets/js/application.js'
       },
      docsGrunt: {
        src: 'docs/grunt/*.js'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      src: [
        'dist/css/todc-bootstrap.css',
        'docs/assets/css/docs.css'
      ]
    },

    uglify: {
      docsJs: {
        options: {
          preserveComments: 'some',
          report: 'min'
        },
        src: [
          'docs/assets/js/vendor/select2.js',
          'docs/assets/js/vendor/holder.js',
          'docs/assets/js/application.js'
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
        files: {
          'dist/css/<%= pkg.name %>.css': 'less/todc-bootstrap.less'
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    cssmin: {
      compress: {
        options: {
          keepSpecialComments: '*',
          noAdvanced: true, // turn advanced optimizations off until the issue is fixed in clean-css
          report: 'min',
          selectorsMergeMode: 'ie8'
        },
        src: [
          'docs/assets/css/docs.css',
          'docs/assets/css/pygments-manni.css',
          'docs/assets/css/select2.css'
        ],
        dest: 'docs/assets/css/pack.min.css'
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'dist/css/<%= pkg.name %>.css',
            'dist/css/<%= pkg.name %>.min.css',
          ]
        }
      }
    },

    csscomb: {
      sort: {
        options: {
          config: 'less/.csscomb.json'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'dist/css/<%= pkg.name %>.css'
        }
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
      docs: {
        expand: true,
        cwd: './dist',
        src: [
          '{css,js}/*.min.*',
          'css/*.map',
          'fonts/*',
          'img/*'
        ],
        dest: 'docs/dist'
      },
      images: {
        expand: true,
        src: 'img/*',
        dest: 'dist'
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
      compile: {
        options: {
          pretty: true,
          data: function () {
            var filePath = path.join(__dirname, 'less/variables.less');
            var fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
            var parser = new BsLessdocParser(fileContent);
            return {sections: parser.parseFile()};
          }
        },
        files: {
          'docs/_includes/customizer-variables.html': 'docs/customizer-variables.jade',
          'docs/_includes/nav-customize.html': 'docs/customizer-nav.jade'
        }
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
          'Element img is missing required attribute src.'
        ]
      },
      files: {
        src: '_gh_pages/**/*.html'
      }
    },

    watch: {
      less: {
        files: 'less/*.less',
        tasks: 'less'
      }
    },

    // checkout-bootstrap task
    shell: {
      gitclone: {
        command: 'git clone <%= bootstrapGit %> <%= bootstrapDir %>',
        options: {
          failOnError: true,
          stderr: true,
          stdout: true
        }
      },
      gitcheckout: {
        command: 'git checkout tags/<%= bootstrapVersion %>',
        options: {
          stderr: true,
          stdout: true,
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
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

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
  grunt.registerTask('dist-css', ['less', 'cssmin', 'csscomb', 'usebanner', 'dist-docs']);

  // Docs distribution task.
  grunt.registerTask('dist-docs', 'copy:docs');

  // Full distribution task.
  // grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts', 'dist-js']);
  grunt.registerTask('dist', ['clean', 'dist-css', 'copy', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['test', 'dist', 'build-glyphicons-data']);

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', 'sed');

  grunt.registerTask('build-glyphicons-data', generateGlyphiconsData);

  // task for building customizer
  grunt.registerTask('build-customizer', ['build-customizer-html', 'build-raw-files']);
  grunt.registerTask('build-customizer-html', 'jade');
  grunt.registerTask('build-raw-files', 'Add scripts/less files to customizer.', function () {
    var banner = grunt.template.process('<%= banner %>');
    generateRawFilesJs(banner);
  });
};
