Scripts
==========

This project uses shell scripts _and_ Grunt to do its task running.  In general,
Grunt is considered as a "helper" for the scripts, which are all executed by
`npm run-script`.  In other words, unless you're creating or editing the task
runners, you do not really even need to know about Grunt.  Just consider the
suite of available npm scripts as your entry point into everything.

### Executing NPM Scripts

After loading the Vagrant box, SSH into it and run the scripts from `/project`,
like so:

```shell
[vagrant@dasix ~] sudo su
[root@dasix vagrant] cd /project
[root@dasix project] npm run-script test
```

### Available NPM Scripts

Command                         | Purpose
------------------------------- | ----------------------------------------------
`npm run-script test`           | Executes the project's unit tests


### Available Grunt Tasks

Coming Soon..
