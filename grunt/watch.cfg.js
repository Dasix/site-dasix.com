/**
 * Grunt configuration for `grunt-contrib-watch`
 *
 * @author Luke Chavers <luke@c2cschools.com>
 * @created 2016-01-25
 */

//var forkDistProcesses = false;
var nterval = 1000; //ms

module.exports = {

	source: {
		files: [
			"src/static/**/*"
		],
		tasks: [ "build" ],
		options: {
			spawn: true,
			interval: nterval
		}
	}

};
