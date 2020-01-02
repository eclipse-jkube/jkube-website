import React from "react";
import {graphql} from "gatsby"
import Seo from "../components/seo";
import '../styles/main.scss';

const Main = ({data: {
  markdownRemark: {
    frontmatter: {title, description},
    html: __html
  },
  langKey
}}) => {
  return (
    <div className="eclipse-jkube__main">
      <Seo title={title} description={description} lang={langKey}/>
      <div
        className="eclipse-jkube__content"
        dangerouslySetInnerHTML={{__html}}
      />
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
