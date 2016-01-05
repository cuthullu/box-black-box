module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Project configuration.
    grunt.initConfig({
      uglify: {
        options: {
          mangle: {
            except: ['jQuery', 'angualar', 'ngMessages', 'ngMaterial']
          }
        },
        my_target: {
          files: {
            'dest/black-box.min.js': [
            'js/vendor/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-aria/angular-aria.min.js',
            'node_modules/angular-material/angular-material.min.js',
            'node_modules/angular-messages/angular-messages.min.js',
            'js/vendor/jquery-ui.min.js','js/app.js','js/services/algorithms.js', 'js/controllers/BoxTestController.js','js/directives/focusMe.js',
            'js/vendor/sortable.js']
          }
        }
      }
    });
    grunt.registerTask("default", "uglify");
};
