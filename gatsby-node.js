const path = require('path');
const {defaultLangKey} = require('./src/i18n');

const mainTemplate = path.resolve('src', 'templates', 'main.jsx');
const docTemplate = path.resolve('src', 'templates', 'doc.jsx');

/**
 * Duplicates any node created with Asciidoc transformer plugin
 *
 * We are currently using 2 'gatsby-transformer-asciidoc' plugins with different attributes in order to generate
 * documentation for openshift-maven-plugin and kubernetes-maven-plugin with a single set of asciidocs.
 *
 * As the node.id calculated for both documentation nodes is the same (id: createNodeId(`${node.id} >>> ASCIIDOC`),)
 * the id collides and only the second node created survives.
 *
 * This method will create a copy with unique id per document.title for each Asciidoc node generated.
 * We'll use this instead for documentation generation.
 */
const duplicateAsciiNodes = ({node, actions: {createNode}, createNodeId, createContentDigest}) => {
  if (node.internal.type === 'Asciidoc') {
    const duplicateAsciiNode = {...node,
      id: createNodeId(`${node.id}- ${node.document.title}`),
      parent: null,
      internal: {
        type: 'AsciidocCopy',
        mediaType: 'text/html'
      }
    };
    duplicateAsciiNode.internal.contentDigest = createContentDigest(duplicateAsciiNode);
    createNode(duplicateAsciiNode);
  }
};

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
      allAsciidocCopy {
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
  result.data.allAsciidocCopy.edges.forEach(({ node }) => {
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

exports.onCreateNode = createNodeArgs => {
  duplicateAsciiNodes(createNodeArgs);
};