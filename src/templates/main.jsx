import React from 'react';
import {graphql} from 'gatsby';
import {Footer, Header, Seo} from '../components';

import '../styles/main.scss';

const Main = ({
  data: {
    markdownRemark: {
      html: __html
    }
  },
  pageContext: {langKey}
}) => {
  return (
    <div className='eclipse-jkube'>
      <Header lang={langKey}/>
      <div className='eclipse-jkube__main'>
        <div
          className='eclipse-jkube__content'
          dangerouslySetInnerHTML={{__html}}
        />
      </div>
      <Footer lang={langKey}/>
    </div>
  );
};

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
