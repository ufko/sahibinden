#!/usr/bin/env bash
set -x

sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce
sudo docker pull codeception/codeceptjs
curl -sL https://deb.nodesource.com/setup_11.x | sudo bash -
sudo apt install -y nodejs git
git clone https://github.com/ufko/sahibinden.git
