const fs = require('fs');
const axios = require('axios');
const xml2js = require('xml2js');

const VERSION_FILENAME = 'version.txt';
const METADATA_URL = 'https://repo1.maven.org/maven2/org/eclipse/jkube/jkube/maven-metadata.xml';

const getLatestVersion = async () => {
  const {data: xmlMetadata} = await axios.get(METADATA_URL);
  const jsonMetadata = await xml2js.Parser().parseStringPromise(xmlMetadata);
  return jsonMetadata.metadata.versioning[0].latest[0];
};

const saveLatestVersion = async () => {
  const latestVersion = await getLatestVersion();
  console.log(`JKube latest version is: ${latestVersion}`);
  fs.writeFileSync(VERSION_FILENAME, latestVersion);
};

const readLatestVersion = () => {
  return fs.readFileSync(VERSION_FILENAME);
};

module.exports = {
  saveLatestVersion,
  readLatestVersion
};