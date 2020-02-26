#!/bin/bash

trap 'error' ERR

ECLIPSE_SERVERS[0]="[git.eclipse.org]:29418 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBKPWcmP3foX15NodSZXwPWP/YZUDRSLAGF/1nAVDYuJIPpbhnCrsZ5imxzMyzufEZoQ4IainqYj71MFtTyeSXwc="
ECLIPSE_SERVERS[1]="[git.eclipse.org]:29418 ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzODQAAABhBERdg5QiGIbLMjUSLShomjVOSczU4o24GfbDDzzJJcuVP4xmcXv6JEZdfr7ijjpZtqRH9ZTwRlildVbMlWb8/IJakZzr1zhehsw+sD+EF+gmxWPu71ZvNgRfZPumx8I7sQ=="
ECLIPSE_SERVERS[2]="[git.eclipse.org]:29418 ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1MjEAAACFBACayKawmejZ2qqculp0fBRKrtWgybnDvzCVy0x2E4ayTLlLmWc80ak411bfqH9qmN9O8MmLnS8nMaun7LXzNUG28gGLYLn+IevprUpFK1o256Yute4APJtoHZRNIAgf62BtwuBptudKR7ZLEE/g62R8e9BHpump10duT8RPl9dgOgy7rg=="
ECLIPSE_SERVERS[3]="[git.eclipse.org]:29418 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAn1P3D1rGBOVnj043ArtjaJBILKuQy5LSt9LCJc0a/xLwVvHltiQtXH9fnZ6oKUNr6zacRF0fq2Bid3hdh9fQO94+l4qFOOszfX4662Z3pi3nR4yE/bmCoNswKloUiQHy7BWjM8JTJOStZuQjBI2cTvVWKzUCT8A+iyqrDsNeqKPVXfwoOCUo3+O5Tfvv0h1VrXCmNS31W7srGQRiTUEzeKa3IXuQ85UvozHNMs1vmguCZYpNeoL/3U+dYaR3xba19ijbHrNog3GZ3ku8NiNeGhcCjx/Ar+Fj2bH4X1JIls6lC7NRYZadlifu9BxvqB2tgdcqCEw9OqqzeSKo+715Hw=="
ECLIPSE_SERVERS[4]="[git.eclipse.org]:29418 ssh-dss AAAAB3NzaC1kc3MAAACBAJhl1CSP2rzgPCUPvl+jxdKcD3npSp5MNYdqLL2XoCLw/PHL2JZUN0zVV9/mCT3Im39OvyyPtAQ/KvAlMtJeX+mfHvG/33fub5P/xMJlrJhS+VrVVIZxDBGPbYktO7ySiOs/FWJE1+5pjMpJbqt4a4FhpnsojmKHsY9FEg7mufN7AAAAFQDyJAzuwliAQKXAQzqa2KqmyPFhVQAAAIAVzilOrNogcZuA3y8sUg/wjnQG2rZhyfbMhSpc7NKjkctf3fdIGjQp7HUJlNA29TnMoiThNng3KvuGm4WtOQYi3KxIxAlom+2Rxm1RR5kYyvGK0hDW86ZXnhaCiuGxctS+rNf6QjJ8FVtUEG8v84xiHtOWh5FrlkEB3UcSFFwBAAAAAIBK8vb6wXY9J/KXv7e3X1lyg81EJma/UuFXcizaZrw2bAhiJ/P+AK3TGNcOF7ypTKCoSkRZdEMeYjx9ljCFHkgGuUpO6vyABai9CG9zpyaHAMbcQ3PlBeCws0l2rqRHay0eIACvX2xMhFXxXr8n6zJy0FiVQ2aRAb6/4OFhWR9rMQ=="

GERRIT_REPO="ssh://$SSH_USER@git.eclipse.org:29418/www.eclipse.org/jkube"

BASEDIR=$(dirname "$BASH_SOURCE")
TEMP_DIR=$(realpath "$BASEDIR/../temp")
WEB_DIR=$(realpath "$BASEDIR/..")
ECLIPSE_REPO_DIR="$TEMP_DIR/jkube"

function initEnvironment() {
  mkdir -p "$TEMP_DIR"
  mkdir -p ~/.ssh
  echo "$SSH_KEY" > ~/.ssh/id_rsa
  chmod 600 ~/.ssh/id_rsa
  for _eclipse_server in "${ECLIPSE_SERVERS[@]}" ; do
    grep -qxF "$_eclipse_server" ~/.ssh/known_hosts || echo "$_eclipse_server" >> ~/.ssh/known_hosts
  done
  git config --global user.email "$GIT_EMAIL"
  git config --global user.name "$GIT_NAME"
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
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" add "$ECLIPSE_REPO_DIR"
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" commit -m "CI: Website updated"
  git --git-dir "$ECLIPSE_REPO_DIR/.git" --work-tree "$ECLIPSE_REPO_DIR" push origin master
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
