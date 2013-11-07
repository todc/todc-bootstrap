/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  RegExp.quote = require('regexp-quote')

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              ' * TODC Bootstrap v<%= pkg.version %> by todc\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under the <%= _.pluck(pkg.licenses, "type").join(", ") %> License\n' +
              ' * <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              ' *\n' +
              ' * This is a Google style theme that is intended to be used on top of Bootstrap.\n' +
              ' *\n' +
              ' * Constructed by Tim O\'Donnell (http://github.com/todc)\n' +
              ' */\n\n',
    jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }\n\n',

    // Bootstrap variables
    bootstrapDir: 'bootstrap',
    bootstrapGit: 'https://github.com/twbs/bootstrap.git',
    bootstrapVersion: 'v3.0.2',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    recess: {
      options: {
        compile: true,
        banner: '<%= banner %>'
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
        dest: 'todc-bootstrap/'
      }
    },

    jekyll: {
      docs: {}
    },

    validation: {
      options: {
        reset: true,
        relaxerror: [
            "Bad value X-UA-Compatible for attribute http-equiv on element meta.",
            "Element img is missing required attribute src."
        ]
      },
      files: {
        src: ["_gh_pages/**/*.html"]
      }
    },

    watch: {
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
    },

    sed: {
      versionNumber: {
        pattern: (function () {
          var old = grunt.option('oldver')
          return old ? RegExp.quote(old) : old
        })(),
        replacement: grunt.option('newver'),
        recursive: true
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-sed');
  grunt.loadNpmTasks('grunt-shell');

  // Clone bootstrap and checkout the appropriate tag task.
  grunt.registerTask('checkout-bootstrap', ['shell']);

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // // Full distribution task.
  // grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts', 'dist-js']);
  grunt.registerTask('dist', ['clean', 'dist-css', 'copy']);

  // // Default task.
  grunt.registerTask('default', ['dist']);

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', ['sed']);
};
