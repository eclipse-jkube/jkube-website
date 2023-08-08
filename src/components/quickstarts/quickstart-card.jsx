import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  ApacheCamel: 'cib-apache',
  ApacheKaraf: 'cib-apache',
  Kubernetes: 'cib-kubernetes',
  OpenLiberty: 'cib-java',
  OpenShift: 'cib-redhat',
  Quarkus: 'cib-quarkus',
  Spring: 'cib-spring',
  Thorntail: 'cib-java',
  Vertx: 'cib-eclipseide'
};

export const QuickStartCard = ({title, description, technologies, url}) => (
  <div className='quick-start-card' itemScope itemType='https://schema.org/SoftwareSourceCode'>
    <meta itemProp='programmingLanguage' content='Java'/>
    <meta itemProp='codeSampleType' content='full (compile ready) solution'/>
    <meta itemProp='keywords' content={technologies.join(',')} />
    <meta itemProp='name' content={title} />
    <meta itemProp='codeRepository' content={url} />
    <h3 className='quick-start-card__title'>
      <a href={url} itemProp='url'>{title}</a>
    </h3>
    <ul className='quick-start-card__technologies'>
      {technologies.map(tech => (
        <li key={tech} className='quick-start-card__technologies-item'>
          <i className={`quick-start-card__technologies-item-icon ${icons[tech]}`}/>
          {tech}
        </li>
      ))}
    </ul>
    <div className='quick-start-card__description' itemProp='description'>
      {description.split(/[\n\r]/).map(l => l.trim()).map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
    <div className='quick-start-card__links'>
      <a href={url}><i className='cib-github' /> GitHub repository</a>
    </div>
  </div>
);

QuickStartCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired
};
