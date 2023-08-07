import React from 'react';
import {graphql} from 'gatsby';
import {MainLayout, Seo} from '../components';

import '../styles/main.scss';

const Main = ({
  children,
  pageContext: {locale}
}) => {
  return (
    <MainLayout locale={locale}>
      <div className='eclipse-jkube__content'>
        {children}
      </div>
    </MainLayout>
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
