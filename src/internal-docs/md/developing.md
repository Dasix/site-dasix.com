Developing
==========

### Travis-CI

#### Master

Any pushes to the `master` branch of this repository will trigger a [Travis-CI](http://travis-ci.org)
build, which will automatically publish to AWS S3.

This means that the site can be easily edited here in GitHub.

See results at [dasix.com](http://dasix.com)

#### Staging

Any pushes to the `master` branch of this repository will trigger a [Travis-CI](http://travis-ci.org)
build, which will automatically publish to AWS S3.

This means that the site can be easily edited for testing here in GitHub.

See results at [staging.dasix.com](http://staging.dasix.com)

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

Now, in case you missed it, you can navigate to [http://localhost:3570](http://localhost:3570)
and view live reloads of any changes you make to the `src` directory.  Oh yeah, and 
all of your changes will automatically deploy on 'push'.  This, folks, is _The Dasix Way_.  
Have fun!

### Running Scripts

See the [Scripts](scripts.md) documentation for more info.
