module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build',['less:production','replace:dist','uglify'])

}