Developing
==========

### Travis-CI

Any pushes to the `master` branch of this repository will trigger a [Travis-CI](http://travis-ci.org)
build, which will automatically publish to AWS S3.

This means that the site can be easily edited here in GitHub.

### Vagrant

This project comes with a `Vagrantfile` capable of producing a full initialized
development environment.  To make use of this, open a console or terminal and
type the following:

```
> cd where_you_put_projects
> git clone https://github.com/Dasix/dasix.com.git
> vagrant up
> vagrant ssh
```

Personally, I use Putty (a SSH client) and not `vagrant ssh`, but it requires
a little more effort and is less suitable for beginners.

### Running Scripts

See the [Scripts](./scripts.md) documentation for more info.
