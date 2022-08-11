import React from 'react';
import {graphql} from 'gatsby';
import {MainLayout, Seo} from '../components';

import '../styles/main.scss';

const Main = ({
  data: {
    markdownRemark: {
      html: __html
    }
  },
  pageContext: {langKey}
}) => (
  <MainLayout langKey={langKey}>
    <div
      className='eclipse-jkube__content'
      dangerouslySetInnerHTML={{__html}}
    />
  </MainLayout>
);

export const Head = ({
  data: {
    markdownRemark: {
      frontmatter: {title, description},
    }
  }
}) => (
  <Seo title={title} description={description}/>
);

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
