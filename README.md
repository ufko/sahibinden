# sahibinden.com
This project provides tests to make sure home page contains certain elements, and search and detailed search features work.

## Getting Started

### Prerequisites

Requires 
- CodeceptJS v2+
- Node JS v8.9+
- Puppeteer

### Installation

#### To install and run without docker:

First install the setup script and execute it. The setup script will install Node JS, npm, git, CodeceptJS, Puppeteer and clone this repository.

##### On macOS
```
wget https://raw.githubusercontent.com/ufko/sahibinden/master/setup_macos.sh && chmod +x setup_macos.sh && ./setup_macos.sh
```
##### On Ubuntu

```
wget https://raw.githubusercontent.com/ufko/sahibinden/master/setup_ubuntu.sh && chmod +x setup_ubuntu.sh && ./setup_ubuntu.sh
```

Then change the directory and run tests

```
cd sahibinden && npm start
```
##

#### To install and run with docker:

First install the setup script and execute it. The setup script will install Node JS, npm, git, docker community edition, CodeceptJS docker image and clone this repository.

##### On macOS

```
wget https://raw.githubusercontent.com/ufko/sahibinden/master/setup_macos_docker.sh && chmod +x setup_macos_docker.sh && ./setup_macos_docker.sh
```

##### On Ubuntu

```
wget https://raw.githubusercontent.com/ufko/sahibinden/master/setup_ubuntu_docker.sh && chmod +x setup_ubuntu_docker.sh && ./setup_ubuntu_docker.sh
```
Then mount CodeceptJS config directory into the tests directory and run tests

```
sudo docker run --net=host -v <path-to-codecept.conf.js>:/tests codeception/codeceptjs codeceptjs run
```

**Important Note** 

On macOS *codecept.conf.js* path should be shared with docker. On macOS by default, you can share files in /Users/, /Volumes/, /private/, and /tmp directly with docker.   
So when entering *codecept.conf.js* path make sure the path is known to docker and is shared from OS X. 

**Example paths**

/Users/<user-name>/sahibinden

If repository is cloned to home
 
~/sahibinden


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
