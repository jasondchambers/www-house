# www-house
Website for showcasing before and after for the house remodeling project.   

The website is called [stratfordremodel.com](https://stratfordremodel.com).

Built using [Svelte](https://svelte.dev). To learn how I developed this website and discover why I made the decision to use Svelte, be sure to read this [article](https://circleinaspiral.com/posts/website-building/).

For the best development experience, run as follows:

    $ npm install
    $ npm run dev

Build and run as a container as follows:

    $ docker build -t www-house:latest .
    $ docker scout quickview
    $ docker run -p 8080:80 www-house:latest

To run, you can simply pull down the image from GHCR:

    $ docker login ghcr.io -u yzxbmlf
    $ docker run -p 8080:80 ghcr.io/jasondchambers/www-house:<tag>

Replace tag with the desired number. You can find these on [GitHub](https://github.com/jasondchambers/www-house/pkgs/container/www-house).

The pipeline also publishes to DockerHub. It is published at this [location](https://hub.docker.com/repository/docker/yzxbmlf/www-house/general). Run as follows:

    $ docker run -p 8080:80 yzxbmlf/www-house:<tag>

Replace tag with the desired number. You can find these on [Docker Hub](https://hub.docker.com/repository/docker/yzxbmlf/www-house/general).
