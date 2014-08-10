/*jshint camelcase: false*/

module.exports = function (grunt) {
    grunt.initConfig({
        nodewebkit: {
            options: {
                version: '0.10.1',
                credits: './app/Credits.html',
//                macIcns: './icon.icns',
//                winIco: 'of.ico',
                platforms: ['osx', 'win'],
                buildDir: './dist', // Where the build version of my node-webkit app is saved
            },
            src: ['./app/**/*'] // Your node-webkit app
        },
    });
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('default', ['nodewebkit']);
};
