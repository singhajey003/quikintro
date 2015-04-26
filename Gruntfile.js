var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
          compileCore: {
            options: {
              sourcemap: "none"
            },
            files: [{
              expand: true,
              src: ['./qi_components/**/*.scss','!./qi_components/scss/**'],
              ext: '.css'
            }]
          }
        },

        express: {
          server: {
            options: {
              port: 9000,
              bases: './',
              server: path.resolve('./server'),
              hostname: '0.0.0.0'
            }
          }
        },

        copy: {
          dev: {
            nonull: true,
            src: './qi_components/qi-global/dev.html',
            dest: './qi_components/qi-global/global.html'
          },
          production: {
            nonull: true,
            src: './qi_components/qi-global/production.html',
            dest: './qi_components/qi-global/global.html'
          }
        },

        watch: {
          sass: {
            files: ['./qi_components/**/*.scss'],
            tasks: ['sass'],
            options: {
              // Start a live reload server on the default port 35729
              livereload: true,
            },
          }
        }

    });

    var target = grunt.option('target') || 'dev';


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('server', ['sass','copy:'+target,'express','watch']);
    grunt.registerTask('build', ['sass','copy:'+target]);
};