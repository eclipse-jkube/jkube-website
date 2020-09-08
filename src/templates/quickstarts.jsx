import React from 'react'
import Seo from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';
import QuickStartCard from "../components/quickstart-card";
import '../styles/main.scss';

const Quickstarts = ({title, description, langKey, nodes}) => (
  <div className='eclipse-jkube'>
    <Seo title={title} description={description} lang={langKey}/>
    <Header lang={langKey}/>
    <div className='eclipse-jkube__main'>
      <div
        className='eclipse-jkube__content'
      >
        <div className='hero'>
          <div className='hero-content'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <ul
          className='eclipse-jkube__quickstarts'
        >
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
      </div>
    </div>
    <Footer lang={langKey}/>
  </div>
);

export default Quickstarts;
