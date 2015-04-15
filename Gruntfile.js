module.exports = function(grunt) {
    //less task
    grunt.initConfig({
        less: {
          compileCore: {
            options: {
              strictMath: true
            },
            files: [{
              expand: true,
              src: ['./qi_components/**/*.less','!./qi_components/less/**'], 
              ext: '.css',
              extDot: 'first'
            }]
          }
      }
    });
    
     grunt.loadNpmTasks('grunt-contrib-less');
};