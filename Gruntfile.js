module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),
		clean: require("./grunt/clean.cfg.js"),
		copy: require("./grunt/copy.cfg.js"),
		watch: require("./grunt/watch.cfg.js"),
		shell: require("./grunt/shell.cfg.js")

	});

	// Load plugins
	grunt.loadNpmTasks( "grunt-contrib-copy"  );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );
	grunt.loadNpmTasks( "grunt-shell" );

	// Build the Site
	grunt.registerTask( "build", [ "copy:siteContent" ] );

	// Rebuild (clean + build)
	grunt.registerTask( "rebuild", [ "clean", "build" ] );

	// Default entry point
	grunt.registerTask( "default", [ "rebuild" ] );

};
