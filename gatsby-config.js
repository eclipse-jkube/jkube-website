const {defaultLangKey} = require('./src/i18n');

const config = {
  siteMetadata: {
    title: 'Eclipse JKube',
    author: 'JKube Development Team',
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
        patterns: [
          'kubernetes-maven-plugin/doc/**/index.adoc',
          'openshift-maven-plugin/doc/**/index.adoc'
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        safe: 'unsafe'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: 'transparent',
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
