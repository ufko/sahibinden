#!/usr/bin/env bash

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null
brew install docker
brew install docker-machine
sudo docker pull codeception/codeceptjs
brew install git
brew install node
npm install codeceptjs puppeteer
git clone https://github.com/ufko/sahibinden.git
