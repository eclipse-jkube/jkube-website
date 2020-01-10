#!/usr/bin/env node

const express = require('express');
const app = express();

app.use('/jkube', express.static(`${__dirname}/public`));

app.listen(8000);
console.log('Server started, http://localhost:8000/jkube/');
