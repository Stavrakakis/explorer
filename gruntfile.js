module.exports = function(grunt) {

    var js = ['gruntfile.js', '*.js', 'app/**/*.js'];
    var html = ['**/*.html'];

    grunt.initConfig({
        jshint: {
            files: js,
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        "jsbeautifier": {
            'html': {
                files: '**/*.html',
                options: {
                    html: {
                        indentChar: " ",
                        indentScripts: "keep",
                        indentSize: 4,
                        maxPreserveNewlines: 10,
                        preserveNewlines: true,
                        unformatted: ["a", "sub", "sup", "b", "i", "u"],
                        wrapLineLength: 0
                    }
                }
            },
            'js': {
                src: js,
                options: {
                    js: {
                        braceStyle: "collapse",
                        evalCode: false,
                        indentChar: " ",
                        indentLevel: 0,
                        indentSize: 4,
                        spaceBeforeConditional: true,
                        spaceInParen: false
                    }
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            'js': {
                files: js,
                tasks: ['jshint', 'jsbeautifier']
            },
            'html': {
                files: html,
                tasks: ['jsbeautifier']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('beautify', ['jsbeautifier:js', 'jsbeautifier:html']);
    grunt.registerTask('build', ['jsbeautifier:js', 'jsbeautifier:html'], 'sass');
    grunt.registerTask('default', ['build', 'watch']);

};
