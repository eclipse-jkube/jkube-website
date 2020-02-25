#!/bin/bash

trap 'error' ERR

GERRIT_REPO="git://git.eclipse.org/gitroot/www.eclipse.org/jkube"

BASEDIR=$(dirname "$BASH_SOURCE")
TEMP_DIR=$(realpath "$BASEDIR/../temp")
WEB_DIR=$(realpath "$BASEDIR/..")
ECLIPSE_REPO_DIR="$TEMP_DIR/jkube"

function initEnvironment() {
  mkdir -p "$TEMP_DIR"
}

function cleanUp() {
  rm -rf "$TEMP_DIR"
}

function cloneAndPrepareEclipseRepo() {
  git clone "$GERRIT_REPO" "$ECLIPSE_REPO_DIR"
  find "$ECLIPSE_REPO_DIR" -maxdepth 1 ! -path "$ECLIPSE_REPO_DIR" ! -name '.git' -exec rm -rf {} +
}

function build() {
  npm install --prefix "$WEB_DIR" "$WEB_DIR"
  npm run  --prefix "$WEB_DIR" build
}

function deploy() {
  cp -avr "$WEB_DIR/public/"* "$ECLIPSE_REPO_DIR"
  git --git-dir "$ECLIPSE_REPO_DIR/.git" add .
  git --git-dir "$ECLIPSE_REPO_DIR/.git" commit -m "CI: Website updated"
  git --git-dir "$ECLIPSE_REPO_DIR/.git" push origin master
}

function error() {
  echo 'Error while deploying JKube website - Cleaning Up temporary files'
  cleanUp
  exit 1
}

cleanUp
initEnvironment
cloneAndPrepareEclipseRepo
build
deploy
cleanUp
