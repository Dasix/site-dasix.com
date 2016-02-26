/**
 * Grunt configuration for `grunt-s3-site`
 *
 * @author Luke Chavers <luke@chavers.io>
 * @created 2016-02-23
 */

module.exports 	= {
	options: {
		s3config: {
			accessKeyId: process.env.AWS_ACCESS_KEY,
			secretAccessKey: process.env.AWS_SECRET_KEY
		},
		name: process.env.AWS_S3_DEPLOY_BUCKET
	},
	siteContent: {
		options: {
			srcPath: "dist"
		}
	}
};
