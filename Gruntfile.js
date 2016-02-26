module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),
		clean: require("./grunt/clean.cfg.js"),
		copy: require("./grunt/copy.cfg.js"),
		s3site: require("./grunt/s3site.cfg.js"),
		watch: require("./grunt/watch.cfg.js"),
		shell: require("./grunt/shell.cfg.js")

	});

	// Load plugins
	grunt.loadNpmTasks( "grunt-contrib-copy"  );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-s3-site" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );
	grunt.loadNpmTasks( "grunt-shell" );

	// Build the Site
	grunt.registerTask( "build", [ "copy:siteContent" ] );

	// Rebuild (clean + build)
	grunt.registerTask( "rebuild", [ "clean", "build" ] );

	// Publish the Site to S3
	grunt.registerTask( "publish", [ "s3site:siteContent" ] );

	// Rebuild + Publish
	grunt.registerTask( "deploy", [ "rebuild", "publish" ] );

	// Default entry point
	grunt.registerTask( "default", [ "rebuild" ] );

};
