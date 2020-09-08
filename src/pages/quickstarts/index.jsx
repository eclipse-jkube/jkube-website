import React from 'react'
import Quickstarts from '../../templates/quickstarts';
import {graphql} from "gatsby";

const Index = ({data: {allQuickstart: {nodes}}}) => (
  <Quickstarts
    title='Quickstarts'
    description='Eclipse JKube Quickstarts and examples'
    langKey='en'
    nodes={nodes}
  />
);

export const pageQuery = graphql`
  query {
    allQuickstart {
      nodes {
        id
        artifactId
        name
        description
        technologies
        url
      }
    }
  }
`;

export default Index;
