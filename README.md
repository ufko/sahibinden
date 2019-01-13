# sahibinden.com
End to end testing for sahibinden.com with CodeceptJS. This project provides tests to make sure home page 
contains certain elements, and search and detailed search features work.

## Getting Started

#### On Ubuntu

To run without docker

```
wget https://raw.githubusercontent.com/ufko/sahibinden/master/setup_ubuntu.sh && chmod +x setup_ubuntu.sh && ./setup_ubuntu.sh
```

The setup_ubuntu.sh will install nodejs, npm, git, codeceptjs, puppeteer and clone the repo.

Then

```
cd sahibinden && npm start
```
##

To run with docker

```
wget https://raw.githubusercontent.com/ufko/sahibinden/master/setup_ubuntu_docker.sh && chmod +x setup_ubuntu_docker.sh && ./setup_ubuntu_docker.sh
```

The setup_ubuntu_docker.sh will install nodejs, npm, git, docker community edition, codeceptjs docker image and clone the repo.

After setup script finishes execution

```
sudo docker run --net=host -v <path-to-codecept.conf.js>:/tests codeception/codeceptjs codeceptjs run
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
