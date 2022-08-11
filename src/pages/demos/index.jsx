import React from 'react'
import {Link} from 'gatsby';
import {MainLayout, Seo, YouTube} from '../../components';

import '../../styles/main.scss';

const title = 'Eclipse JKube Demonstrations';
const description='Eclipse JKube plugin demonstrations for Kubernetes and OpenShift';
const langKey='en';

const Demos = () => (
  <MainLayout langKey={langKey}>
    <div className='eclipse-jkube__content'>
      <div className="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <h2><Link to='/docs/kubernetes-maven-plugin'>Kubernetes Maven Plugin</Link></h2>
        <YouTube videoId='FHz5q8ERtPk'/>
      </div>
      <div>
        <h2><Link to='/docs/openshift-maven-plugin'>OpenShift Maven Plugin</Link></h2>
        <YouTube videoId='ZJzfD-bDxpc'/>
      </div>
      <div>
        <h2><Link to='/docs/kubernetes-gradle-plugin'>Kubernetes Gradle Plugin</Link></h2>
        <YouTube videoId='TUYl2Vw8bnQ'/>
      </div>
      <div>
        <h2><Link to='/docs/openshift-gradle-plugin'>OpenShift Gradle Plugin</Link></h2>
        <YouTube videoId='uMxEzLdqcik'/>
      </div>
    </div>
  </MainLayout>
);

export const Head = () => (
  <Seo title={title} description={description} />
);

export default Demos;
