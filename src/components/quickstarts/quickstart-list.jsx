import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {QuickStartCard} from "./quickstart-card";

export const QuickStartList = () => {
  const {allQuickstart: {nodes}} = useStaticQuery(graphql`
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
  `);
  return (
    <ul
      className='eclipse-jkube__quickstarts'
      itemScope itemType='https://schema.org/SoftwareApplication'
    >
      <meta itemProp='name' content='Eclipse JKube' />
      <meta itemProp='applicationCategory' content='Developer Tools' />
      <meta itemProp='operatingSystem' content='Linux,Windows,OSX,Mac' />
      <meta itemProp='downloadUrl' content='https://github.com/eclipse-jkube/jkube' />
      {nodes.map(node => (
        <li key={node.artifactId} className='eclipse-jkube__quickstarts-item'>
          <QuickStartCard
            title={node.name}
            description={node.description}
            technologies={node.technologies}
            url={node.url}
          />
        </li>
      ))}
    </ul>
  );
};
