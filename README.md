# sahibinden.com
End to end testing for sahibinden.com with CodeceptJS. This project provides tests to make sure home page 
contains certain elements, and search and detailed search features work.

## Getting Started

Get a copy of the project

```
git clone https://github.com/ufko/sahibinden.git
```
Change directory to project folder

```
cd <path-to-project-folder>
```


Execute CodeceptJS run command

```
<path-to-codeceptjs> run --steps
```

### Prerequisites

In order to run the tests the following are required:

* Node.js version 8.9 or higher (To install https://nodejs.org/en/download/package-manager/)
* CodeceptJS with Puppeteer as helper (To install https://codecept.io/installation/)

### Installing

To install Node.js on Ubuntu

```
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash - && sudo apt-get install -y nodejs
```

To install CodeceptJS with Puppeteer:
```
npm install codeceptjs puppeteer --save-dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
