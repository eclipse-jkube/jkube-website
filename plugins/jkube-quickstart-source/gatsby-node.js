const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {parseString} = require('xml2js');

const TYPE = 'Quickstart';
const REPO_URL = 'https://github.com/eclipse/jkube/tree/master/quickstarts';
const NAME_PREFIX = 'Eclipse JKube :: Quickstarts :: ';
const PATH_TO_REPO = path.resolve(__dirname, '../../.cache/gatsby-source-git/jkube-master/quickstarts');
const MAX_DIRECTORY_DEPTH = 2;

const checkGitRepoExists = () => {
  if (!fs.existsSync(PATH_TO_REPO)) {
    throw new Error('Eclipse JKube repo not available, make sure gatsby-source-git plugin is defined before jkube-quickstart-source');
  }
}

const getPomFiles = (dir, currentLevel = 0) => {
  if (currentLevel > MAX_DIRECTORY_DEPTH) {
    return [];
  }
  const dirEntries = fs.readdirSync(dir, {withFileTypes: true});
  const files = dirEntries
    .filter(entry => entry.isDirectory() || entry.name === 'pom.xml')
    .map(entry => {
      const resolvedFile = path.resolve(dir, entry.name);
      return entry.isDirectory() ? getPomFiles(resolvedFile, currentLevel + 1) : resolvedFile;
    });
  return Array.prototype.concat(...files);
};

const hasDependency = (parsedPom, groupId) => [
  ..._.get(parsedPom, 'project.dependencies[0].dependency', []),
  ..._.get(parsedPom, 'project.dependencyManagement[0].dependencies[0].dependency', [])
].some(dep => dep.groupId[0].startsWith(groupId));

const hasPlugin = (parsedPom, artifactId) => [
  ..._.get(parsedPom, 'project.build[0].pluginManagement[0].plugins[0].plugin', []),
  ..._.get(parsedPom, 'project.build[0].plugins[0].plugin', []),
  ..._.get(parsedPom, 'project.profiles[0].profile', [])
    .reduce((acc, profile) => {
      acc.push(..._.get(profile, 'build[0].plugins[0].plugin', []));
      return acc;
    }, [])
].some(plugin => plugin.artifactId[0] === artifactId);

const hasKubernetes = parsedPom => hasPlugin(parsedPom, 'kubernetes-maven-plugin');
const hasOpenShift = parsedPom => hasPlugin(parsedPom, 'openshift-maven-plugin');

const hasApacheCamel = parsedPom => hasDependency(parsedPom, 'org.apache.camel');
const hasApacheKaraf = parsedPom => hasDependency(parsedPom, 'org.apache.karaf');
const hasOpenLiberty = parsedPom => hasDependency(parsedPom, 'io.openliberty');
const hasQuarkus = parsedPom => hasDependency(parsedPom, 'io.quarkus');
const hasSpring = parsedPom => hasDependency(parsedPom, 'org.springframework');
const hasThorntail = parsedPom => hasDependency(parsedPom, 'io.thorntail');
const hasVertx = parsedPom => hasDependency(parsedPom, 'io.vertx');

const getTechnologies = parsedPom => {
  const ret = [];
  [
    hasKubernetes, hasOpenShift,
    hasApacheCamel, hasApacheKaraf, hasOpenLiberty, hasQuarkus, hasSpring, hasThorntail, hasVertx
  ].filter(fn => fn.call(null, parsedPom))
    .forEach(fn => {
      ret.push(fn.name.replace(/^has/, ''));
    });
  return ret;
}

const readPomData = pom => {
  // Looks async but its not :O
  let parsedPom;
  parseString(fs.readFileSync(pom, 'utf-8'), (err, result) => {
    parsedPom = result;
  });
  return {
    id: pom,
    file: path.relative(PATH_TO_REPO, pom),
    artifactId: parsedPom.project.artifactId[0],
    name: _.get(parsedPom, 'project.name[0]', '').replace(NAME_PREFIX, ''),
    description: _.get(parsedPom, 'project.description[0]', '').trim(),
    technologies: getTechnologies(parsedPom),
    url: `${REPO_URL}/${path.relative(PATH_TO_REPO, pom)}`.replace(/pom\.xml$/, '')
  }
}

const sourceNodes = ({actions: {createNode}, createContentDigest, createNodeId}) => {
  checkGitRepoExists();
  const quickstartProjects = getPomFiles(PATH_TO_REPO);
  quickstartProjects
    .map(readPomData)
    .forEach(pomData => {
      createNode({
        ...pomData,
        // Required fields
        id: createNodeId( `${TYPE}-${pomData.id}`),
        parent: null,
        children: [],
        internal: {
          type: TYPE,
          contentDigest: createContentDigest(pomData),
        }
      });
    });
};

exports.onPreInit = () => console.log('Loading quickstart data into the graph...');
exports.sourceNodes = sourceNodes;
