import React from 'react';
import {graphql} from 'gatsby';
import Footer from '../components/footer'
import Header from '../components/header';
import Seo from '../components/seo';
import '../styles/main.scss';

const Main = ({
  data: {
    markdownRemark: {
      frontmatter: {title, description},
      html: __html
    }
  },
  pageContext: {langKey}
}) => {
  return (
    <div className='eclipse-jkube'>
      <Seo title={title} description={description} lang={langKey}/>
      <Header lang={langKey}/>
      <div className='eclipse-jkube__main'>
        <div
          className='eclipse-jkube__content'
          dangerouslySetInnerHTML={{__html}}
        />
      </div>
      <Footer/>
    </div>
  );
};

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
