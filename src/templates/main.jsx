import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {Code, CodeBlock, MainLayout, Seo} from '../components';

import '../styles/main.scss';

const components = pageContext => ({
  pre: ({className = '', ...props}) => {
    if (props?.children?.type?.name === 'code') {
      return <CodeBlock {...props} />;
    }
    return <pre className={className} {...props} />;
  },
  code: props => <Code pageContext={pageContext} {...props} />
});

const Main = ({
  children,
  pageContext
}) => {
  const {locale} = pageContext;
  return (
    <MDXProvider components={components(pageContext)}>
      <MainLayout locale={locale}>
        <div className='eclipse-jkube__content'>
          {children}
        </div>
      </MainLayout>
    </MDXProvider>
  );
};

export const Head = ({
  data: {
    mdx: {
      frontmatter: {title, description},
    }
  }
}) => {
  return (
    <Seo title={title} description={description}/>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;

export default Main;
