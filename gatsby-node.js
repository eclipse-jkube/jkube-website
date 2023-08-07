const path = require('path');
const {defaultLocale} = require('./src/i18n');

const mainTemplate = path.resolve('src', 'templates', 'main.jsx');
const docTemplate = path.resolve('src', 'templates', 'doc.jsx');

/**
 * Checks if the node should be created or not for the given content / plugin type
 */
// TODO - Find a better way to align the content and the plugins
const isValidNode = node => {
  if (node.document.title.endsWith('maven-plugin') && node.author.fullName && node.author.fullName.startsWith('Roland')) {
    return true;
  } else if (node.document.title.endsWith('gradle-plugin') && !node.author.fullName) {
    return true;
  }
  return false;
}

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
  if (node.internal.type === 'Asciidoc' && isValidNode(node)) {
    const duplicateAsciiNode = {...node,
      id: createNodeId(`${node.id}-${node.document.title}`),
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
  const {errors, data} = await graphql(`
    {
      allMdx(sort: {frontmatter: {date: DESC}}, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              path
            }
            fields {
              locale
              path
              pathPrefix
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('Error while running GraphQL query for Markdown pages.');
    return;
  }

  data.allMdx.edges.forEach(({node: {id, frontmatter: {path}, fields: {locale, pathPrefix}, internal: {contentFilePath}}}) => {
    createPage({
      path: `${pathPrefix}${path}`,
      component: `${mainTemplate}?__contentFilePath=${contentFilePath}`,
      context: {
        id,
        locale,
      },
    });
  });
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
        locale: defaultLocale,
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
