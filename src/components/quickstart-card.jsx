import React from 'react';

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

const QuickStartCard = ({title, description, technologies, url}) => (
  <div className='quick-start-card'>
    <h3 className='quick-start-card__title'>
      <a href={url}>{title}</a>
    </h3>
    <ul className='quick-start-card__technologies'>
      {technologies.map(tech => (
        <li key={tech} className='quick-start-card__technologies-item'>
          <i className={`quick-start-card__technologies-item-icon ${icons[tech]}`}/>
          {tech}
        </li>
      ))}
    </ul>
    <div className='quick-start-card__description'>
      {description.split(/[\n\r]/).map(l => l.trim()).map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
    <div className='quick-start-card__links'>
      <a href={url}><i className='cib-github' /> GitHub repository</a>
    </div>
  </div>
);

export default QuickStartCard;