/**
 * Grunt configuration for `grunt-contrib-copy`
 *
 * @author Luke Chavers <luke@c2cschools.com>
 * @created 2015-09-21
 */

module.exports = {

	siteContent: {
		files: [
			{expand: true, flatten: false, cwd: "src", src: ["**"], dest: "dist/"}
		]
	}

};
