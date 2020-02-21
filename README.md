# Eclipse JKube Website source

## Developing

### Requirements
* NodeJS

### Environment

Install required dependencies:
```
npm install
```

Run development mode:
```
npm start
```
Point your browser to http://localhost:8000 to see output (will be updated in real time)


Build website:
```
npm run build
```
Website transpiled code will be output to: `./public`.

In order to deploy the site copy this directory contents into an HTTP server.

You can also use the provided `index.js` script to run a static web server and
check that the build is ok.
```
./index.js
xdg-open http://localhost:8000/jkube
```


## Documentation generation

Documentation gets **statically** generated from https://github.com/eclipse/jkube asciidoc.