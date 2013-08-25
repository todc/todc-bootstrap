/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/**\n' +
              '* TODC Bootstrap v<%= pkg.version %> by todc\n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>.\n' +
              '*/\n',
    jqueryCheck: 'if (!jQuery) { throw new Error(\"Bootstrap requires jQuery\") }\n\n',

    // Bootstrap variables
    bootstrapDir: 'bootstrap',
    bootstrapGit: 'https://github.com/twbs/bootstrap.git',
    bootstrapVersion: 'v3.0.0',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    // jshint: {
    //   options: {
    //     jshintrc: 'js/.jshintrc'
    //   },
    //   gruntfile: {
    //     src: 'Gruntfile.js'
    //   },
    //   src: {
    //     src: ['js/*.js']
    //   },
    //   test: {
    //     src: ['js/tests/unit/*.js']
    //   }
    // },

    // concat: {
    //   options: {
    //     banner: '<%= banner %><%= jqueryCheck %>',
    //     stripBanners: false
    //   },
    //   bootstrap: {
    //     src: [
    //       'js/transition.js',
    //       'js/alert.js',
    //       'js/button.js',
    //       'js/carousel.js',
    //       'js/collapse.js',
    //       'js/dropdown.js',
    //       'js/modal.js',
    //       'js/tooltip.js',
    //       'js/popover.js',
    //       'js/scrollspy.js',
    //       'js/tab.js',
    //       'js/affix.js'
    //     ],
    //     dest: 'dist/js/<%= pkg.name %>.js'
    //   }
    // },

    // uglify: {
    //   options: {
    //     banner: '<%= banner %>'
    //   },
    //   bootstrap: {
    //     src: ['<%= concat.bootstrap.dest %>'],
    //     dest: 'dist/js/<%= pkg.name %>.min.js'
    //   }
    // },

    recess: {
      options: {
        compile: true
      },
      todc_bootstrap: {
        src: ['less/todc-bootstrap.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['less/todc-bootstrap.less'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    // TODO: Need to either copy the select2.min.js or the jshint and concat tasks. Need to account for select2.css
    copy: {
      images: {
        expand: true,
        src: ["img/*"],
        dest: 'dist/'
      },
      bootstrap: {
        expand: true,
        flatten: false,
        cwd: '<%= bootstrapDir %>/dist',
        src: '**',
        dest: 'dist/'
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
        dest: 'dist/'
      }
    },

    jekyll: {
      docs: {}
    },

    validation: {
      options: {
        reset: true
      },
      files: {
        src: ["_gh_pages/**/*.html"]
      }
    },

    watch: {
      // src: {
      //   files: '<%= jshint.src.src %>',
      //   tasks: ['jshint:src', 'qunit']
      // },
      // test: {
      //   files: '<%= jshint.test.src %>',
      //   tasks: ['jshint:test', 'qunit']
      // },
      recess: {
        files: 'less/*.less',
        tasks: ['recess']
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
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-shell');

  // Clone bootstrap and checkout the appropriate tag task.
  grunt.registerTask('checkout-bootstrap', ['shell']);

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

  // // JS distribution task.
  // grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // // Fonts distribution task.
  // grunt.registerTask('dist-fonts', ['copy']);

  // // Full distribution task.
  // grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts', 'dist-js']);
  grunt.registerTask('dist', ['clean', 'dist-css', 'copy', 'compress']);

  // // Default task.
  // grunt.registerTask('default', ['test', 'dist', 'build-customizer']);
};
