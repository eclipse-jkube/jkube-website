const path = require('path');

exports.createPages = async ({actions, graphql, reporter}) => {
  const { createPage } = actions;

  const mainTemplate = path.resolve('src', 'templates', 'main.jsx');

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
    reporter.panicOnBuild('Error while running GraphQL query.');
    return
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
