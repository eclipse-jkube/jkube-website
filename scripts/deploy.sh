#!/bin/bash

trap 'error' ERR

BASEDIR=$(dirname "$BASH_SOURCE")
WEB_DIR=$(realpath "$BASEDIR/..")
ECLIPSE_REPO_DIR="$WEB_DIR/jkube-website-publish"
GIT_EMAIL=bot@example.com
GIT_NAME=GitHub

function initEnvironment() {
  git config --global user.email "$GIT_EMAIL"
  git config --global user.name "$GIT_NAME"
}

function prepareEclipseRepo() {
  find "$ECLIPSE_REPO_DIR" -maxdepth 1 ! -path "$ECLIPSE_REPO_DIR" ! -name '.git' -exec rm -rf {} +
}

function build() {
  npm install --prefix "$WEB_DIR" "$WEB_DIR"
  npm run  --prefix "$WEB_DIR" build
}

function deploy() {
  cp -avr "$WEB_DIR/public/"* "$ECLIPSE_REPO_DIR"
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" checkout --orphan temp-branch
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" add "$ECLIPSE_REPO_DIR"
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" commit -m "CI: Website updated" --signoff
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" branch -D main
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" branch -m main
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" push -f origin main
}

function error() {
  echo 'Error while deploying JKube website - Cleaning Up temporary files'
  exit 1
}

initEnvironment
prepareEclipseRepo
build
deploy
