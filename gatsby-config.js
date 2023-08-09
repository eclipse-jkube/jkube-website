const {defaultLocale} = require('./src/i18n');
const {readLatestVersion} = require('./src/jkube-utils');

const latestJKubeVersion = readLatestVersion();
const siteUrl = 'https://eclipse.dev/jkube';

const config = {
  siteMetadata: {
    title: 'Eclipse JKube',
    author: 'Eclipse JKube Development Team',
    siteUrl
  },
  pathPrefix: '/jkube',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      // For gatsby-transformer-asciidoc (get docs for latest published version)
      resolve: 'gatsby-source-git',
      options: {
        name: 'jkube',
        remote: 'https://github.com/eclipse/jkube.git',
        branch: `v${latestJKubeVersion}`,
        patterns: [
          'kubernetes-maven-plugin/doc/**/index.adoc',
          'gradle-plugin/doc/**/index.adoc'
        ]
      }
    },
    {
      // For jkube-quickstart-source (retrieve latest quickstarts)
      resolve: 'gatsby-source-git',
      options: {
        name: 'jkube-master',
        remote: 'https://github.com/eclipse/jkube.git',
        branch: `master`,
        patterns: [
          '!*'
        ]
      }
    },
    'jkube-quickstart-source',
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
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        safe: 'unsafe',
        attributes: {
          plugin: 'kubernetes-gradle-plugin',
          version: latestJKubeVersion,
          'task-prefix': 'k8s',
          'cluster': 'Kubernetes',
          'pluginExtension': 'kubernetes'
        }
      }
    },
    {
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        safe: 'unsafe',
        attributes: {
          plugin: 'openshift-gradle-plugin',
          version: latestJKubeVersion,
          'task-prefix': 'oc',
          'cluster': 'OpenShift',
          'pluginExtension': 'openshift'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              // ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `svg`],
              ignoreFileExtensions: []
            },
          },
          {
            resolve: 'gatsby-plugin-i18n-l10n',
            options: {
              siteUrl, defaultLocale,
              locales: [
                {locale: 'en-US', prefix: 'en', slugs: {}, messages: {}},
                {locale: 'es-ES', prefix: 'es', slugs: {}, messages: {}},
              ]
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          }
        ],
      }
    },
  ]
};

module.exports = config;
