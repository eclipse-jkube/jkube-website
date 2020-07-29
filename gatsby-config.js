const {defaultLangKey} = require('./src/i18n');
const {readLatestVersion} = require('./src/jkube-utils');

const latestJKubeVersion = readLatestVersion();

const config = {
  siteMetadata: {
    title: 'Eclipse JKube',
    author: 'Eclipse JKube Development Team',
    siteUrl: 'https://eclipse.org/jkube',
  },
  pathPrefix: '/jkube',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-git',
      options: {
        name: 'jkube',
        remote: 'https://github.com/eclipse/jkube.git',
        branch: `v${latestJKubeVersion}`,
        patterns: [
          'kubernetes-maven-plugin/doc/**/index.adoc'
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        safe: 'unsafe',
        attributes: {
          version: latestJKubeVersion
        }
      }
    },
    {
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        safe: 'unsafe',
        attributes: {
          plugin: 'kubernetes-maven-plugin',
          version: latestJKubeVersion,
          'goal-prefix': 'k8s'
        }
      }
    },
    {
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        safe: 'unsafe',
        attributes: {
          plugin: 'openshift-maven-plugin',
          version: latestJKubeVersion,
          'goal-prefix': 'oc'
        }
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              // ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `svg`],
              ignoreFileExtensions: []
            },
          },
          {
            resolve: 'gatsby-plugin-i18n',
            options: {
              langKeyDefault: defaultLangKey,
              useLangKeyLayout: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          }
        ],
      },
    },
  ]
};

module.exports = config;
