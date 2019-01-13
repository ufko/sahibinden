#!/usr/bin/env bash
set -x

sudo apt-get update
sudo apt-get install -y curl git
curl -sL https://deb.nodesource.com/setup_11.x | sudo bash -
sudo apt-get install -y nodejs
npm install codeceptjs puppeteer
git clone https://github.com/ufko/sahibinden.git