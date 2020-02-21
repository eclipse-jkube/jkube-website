const path = require('path');
const {defaultLangKey} = require('./src/i18n');

const mainTemplate = path.resolve('src', 'templates', 'main.jsx');
const docTemplate = path.resolve('src', 'templates', 'doc.jsx');

const createMarkdownPages = async ({createPage, graphql, reporter}) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              langKey
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query for Markdown pages.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: mainTemplate,
      context: {
        langKey: node.fields.langKey,
        slug: node.fields.slug
      },
    })
  })
};

const createAsciiDocPages = async({createPage, graphql, reporter}) => {
  const result = await graphql(`
    {
      allAsciidoc {
        edges {
          node {
            id
            document {
              title
              subtitle
              main
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query for Asciidoc pages.');
    return;
  }
  result.data.allAsciidoc.edges.forEach(({ node }) => {
    const slug = `/docs/${node.document.title.replace(/(.*\/)?/, '')}`;
    createPage({
      path: slug,
      component: docTemplate,
      context: {
        id: node.id,
        langKey: defaultLangKey,
      },
    })
  })
};

exports.createPages = async ({actions, graphql, reporter}) => {
  const { createPage } = actions;
  await createMarkdownPages({createPage, graphql, reporter});
  await createAsciiDocPages({createPage, graphql, reporter});
};
