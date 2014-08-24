module.exports = function( grunt ) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        
        watch: {
            'test-js': {
                files: [ 'src/*.js', 'spec/*.js' ],
                tasks: [ 'jasmine' ]
            }
        },
        
        jasmine: {
            pivotal: {
                src: 'src/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                }
            }
        }
    });
    
    grunt.registerTask( 'default', [ 'jasmine' ]);
    grunt.registerTask( 'watch-test-js', [ 'watch:test-js' ]);

};