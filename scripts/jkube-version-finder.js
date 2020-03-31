#!/usr/bin/env node
const jkubeUtils = require('../src/jkube-utils');

const handleError = error => {
  console.error(error);
  process.exit(1);
};

jkubeUtils.saveLatestVersion().then(() => process.exit(0)).catch(handleError);
