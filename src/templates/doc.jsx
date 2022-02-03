import React, {useEffect} from 'react';
import {graphql} from 'gatsby';
import Header from '../components/header';
import Seo from '../components/seo';
import 'prismjs/prism';
import 'prismjs/components/prism-java.min'
import 'prismjs/components/prism-markup.min'
import 'prismjs/components/prism-yaml.min'
import 'prismjs/themes/prism-solarizedlight.css'
import '../styles/main.scss';
import Footer from '../components/footer';

const componentDidMount = () => {
  window.Prism.highlightAll()
};

const Doc = ({
  data: {
    asciidocCopy: {
      document: {
        title,
        subtitle
      },
      html: __html
    }
  },
  pageContext: {langKey}
}) => {
  useEffect(componentDidMount, []);
  return (
    <div className='eclipse-jkube'>
      <Seo title={title} description={subtitle} lang={langKey}/>
      <Header lang={langKey}/>
      <div className='eclipse-jkube__documentation book toc2 toc-left'>
        <div
          className='eclipse-jkube__documentation-content'
          dangerouslySetInnerHTML={{__html}}
        />
        <Footer lang={langKey}/>
      </div>
    </div>
  );
};


export const pageQuery = graphql`
  query($id: String!) {
    asciidocCopy(id: { eq: $id }) {
      html
      document {
        title
        subtitle
      }
    }
  }
`;

export default Doc;
