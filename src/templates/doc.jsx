import React, {useEffect} from 'react';
import {graphql} from 'gatsby';
import {Footer, Header, Seo} from '../components';
import 'prismjs/prism';
import 'prismjs/components/prism-java.min'
import 'prismjs/components/prism-markup.min'
import 'prismjs/components/prism-yaml.min'
import 'prismjs/themes/prism-solarizedlight.css'
import '../styles/main.scss';

const componentDidMount = () => {
  window.Prism.highlightAll()
};

const Doc = ({
  data: {
    asciidocCopy: {
      html: __html
    }
  },
  pageContext: {locale}
}) => {
  useEffect(componentDidMount, []);
  return (
    <div className='eclipse-jkube'>
      <Header locale={locale}/>
      <div className='eclipse-jkube__documentation book toc2 toc-left'>
        <div
          className='eclipse-jkube__documentation-content'
          dangerouslySetInnerHTML={{__html}}
        />
        <Footer locale={locale}/>
      </div>
    </div>
  );
};

export const Head = ({
  data: {
    asciidocCopy: {
      document: {title, subtitle}
    }
  }
}) => (
  <Seo title={title} description={subtitle} />
);

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
