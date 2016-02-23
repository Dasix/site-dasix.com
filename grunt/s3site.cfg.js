/**
 * Grunt configuration for `grunt-s3-site`
 *
 * @author Luke Chavers <luke@chavers.io>
 * @created 2016-02-23
 */

var path 		= require("path");
var s3config 	= require( path.join( __dirname, "../conf/s3.json") );

module.exports 	= {
	options: {
		s3config: {
			accessKeyId: s3config.key,
			secretAccessKey: s3config.secret
		},
		name: s3config.bucket
	},
	siteContent: {
		options: {
			srcPath: "dist"
		}
	}
};
