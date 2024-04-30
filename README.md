# www-house
Website for showcasing before and after for the house remodeling project.

The website is called [stratfordremodel.com](https://stratfordremodel.com).

During development, simply build and run as follows

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

The container is deployed using Google Cloud Run and can be managed in [Google Cloud](https://console.cloud.google.com/home/dashboard?hl=en&project=www-house).

The domain stratfordremodel.com is managed using [SquareSpace](https://account.squarespace.com/domains).
 
The deployed container in Google Cloud Run, is connected to a Firebase Hosting site. This was the simplest way to associate my custom domain with it. [Firebase Console](https://console.firebase.google.com/project/www-house/hosting/sites).
