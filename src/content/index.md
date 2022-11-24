---
path: "/"
date: "2020-01-02"
title: "Eclipse JKube - Build and Deploy java applications on Kubernetes"
description: "Eclipse JKube - Build and Deploy java applications on Kubernetes"
---
import {Hero} from '../components'

<Hero>
<div className="getting-involved">
[![Twitter](https://img.shields.io/twitter/follow/jkubeio?label=Follow)](https://twitter.com/jkubeio)
[![Twitter](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCpU2tjgpfkTVgeDq-DBSV7A)
[![Gitter](https://badges.gitter.im/eclipse/jkube.svg)](https://gitter.im/eclipse/jkube?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Eclipse JKube Dev Mailing List](https://img.shields.io/badge/Eclipse%20JKube%20-Developer%20Mailing%20List-orange)](https://accounts.eclipse.org/mailing-list/jkube-dev)
[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg?label=license&logo=eclipse)](https://www.eclipse.org/legal/epl-2.0/)
</div>

# Eclipse JKube&trade;

## Cloud-Native Java Applications without a hassle

Eclipse JKube is a collection of plugins and libraries that are used for building container images using Docker, JIB
or S2I build strategies. Eclipse JKube generates and deploys Kubernetes/OpenShift manifests at compile time too.

It brings your Java applications on to Kubernetes and OpenShift by leveraging the tasks required to make your application
cloud-native.

Eclipse JKube also provides a set of tools such as watch, debug, log, etc. to improve your developer experience.
</Hero>

## Build and deploy any Java projects ... for Kubernetes

<div className='diag'>

![JKube - Quarkus, Spring boot, Wildfly, Tomcat, micronaut. openliberty, vertx, thorntail, etc. to Kubernetes](index/java-jkube-kube.svg "Java jkube Kubernetes")

</div>


<div className="tabset">
<div className="ulist tabs">
<ul>
<li id="tabset1_mvn_kubernetes" className='is-active' onClick={(l) => {var elems = document.querySelectorAll('.is-active');[].forEach.call(elems, function(el) { el.classList.remove('is-active');}); l.currentTarget.className += ' is-active'; document.body.querySelector('div[aria-labelledby='+l.currentTarget.id+']').className += ' is-active';}}>
<p>Maven + Kubernetes</p>
</li>
<li id="tabset1_mvn_openshift" onClick={(l) => {var elems = document.querySelectorAll('.is-active');[].forEach.call(elems, function(el) { el.classList.remove('is-active');}); l.currentTarget.className += ' is-active'; document.body.querySelector('div[aria-labelledby='+l.currentTarget.id+']').className += ' is-active';}}>
<p>Maven + Openshift</p>
</li>
<li id="tabset1_gradle_kubernetes" onClick={(l) => {var elems = document.querySelectorAll('.is-active');[].forEach.call(elems, function(el) { el.classList.remove('is-active');}); l.currentTarget.className += ' is-active'; document.body.querySelector('div[aria-labelledby='+l.currentTarget.id+']').className += ' is-active';}}>
<p>Gradle + Kubernetes</p>
</li>
<li id="tabset1_gradle_openshift" onClick={(l) => {var elems = document.querySelectorAll('.is-active');[].forEach.call(elems, function(el) { el.classList.remove('is-active');}); l.currentTarget.className += ' is-active'; document.body.querySelector('div[aria-labelledby='+l.currentTarget.id+']').className += ' is-active';}}>
<p>Gradle + Openshift</p>
</li>
</ul>
</div>



<div className="content">

<div className="tab-pane is-active" aria-labelledby="tabset1_mvn_kubernetes">

<iframe src="https://www.youtube.com/embed/FHz5q8ERtPk" className="youtube-video " width="515" height="290" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>

[![Getting started](https://img.shields.io/badge/%F0%9F%9A%80%20Getting%20started-brightgreen)](https://www.eclipse.org/jkube/docs/kubernetes-maven-plugin/#getting-started)
[![Documentation](https://img.shields.io/badge/-%F0%9F%93%96%20%20Documentation-blue)](https://www.eclipse.org/jkube/docs/kubernetes-maven-plugin/)


1. Add to the `pom.xml`:
   ```xml
   <build>
     <plugins>
       <plugin>
         <groupId>org.eclipse.jkube</groupId>
         <artifactId>kubernetes-maven-plugin</artifactId>
         <version>1.10.1</version>
       </plugin>
     </plugins>
   </build>
   ```

2. Execute these command to build and deploy:
   ```
   $ mvn package k8s:build \
                 k8s:push \
                 k8s:resource \
                 k8s:apply
   ```
</div>




<div className="tab-pane" aria-labelledby="tabset1_mvn_openshift">

<iframe src="https://www.youtube.com/embed/ZJzfD-bDxpc" className="youtube-video " width="515" height="290" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>

[![Getting started](https://img.shields.io/badge/%F0%9F%9A%80%20Getting%20started-brightgreen)](https://www.eclipse.org/jkube/docs/openshift-maven-plugin/#getting-started)
[![Documentation](https://img.shields.io/badge/-%F0%9F%93%96%20%20Documentation-blue)](https://www.eclipse.org/jkube/docs/openshift-maven-plugin/)

1. Add to the `pom.xml`:
   ```xml
   <build>
     <plugins>
       <plugin>
         <groupId>org.eclipse.jkube</groupId>
         <artifactId>openshift-maven-plugin</artifactId>
         <version>1.10.1</version>
       </plugin>
     </plugins>
   </build>
   ```

2. Execute these commands to build and deploy:
   ```
   $ mvn package oc:build \
                 oc:resource \
                 oc:apply
   ```

</div>




<div className="tab-pane" aria-labelledby="tabset1_gradle_kubernetes">

<iframe src="https://www.youtube.com/embed/TUYl2Vw8bnQ" className="youtube-video " width="515" height="290" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>

[![Getting started](https://img.shields.io/badge/%F0%9F%9A%80%20Getting%20started-brightgreen)](https://www.eclipse.org/jkube/docs/kubernetes-gradle-plugin/#getting-started)
[![Documentation](https://img.shields.io/badge/-%F0%9F%93%96%20%20Documentation-blue)](https://www.eclipse.org/jkube/docs/kubernetes-gradle-plugin/)

1. Add to the `build.gradle`:
   ```
   plugins {
     id 'org.eclipse.jkubekubernetes' version '1.10.1'
   }
    ```

2. Execute these commands to build and deploy:
   ```
   $ gradle build k8sBuild \
                  k8sPush \
                  k8sResource \
                  k8sApply
   ```

</div>



<div className="tab-pane" aria-labelledby="tabset1_gradle_openshift">

<iframe src="https://www.youtube.com/embed/uMxEzLdqcik" className="youtube-video " width="515" height="290" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>

[![Getting started](https://img.shields.io/badge/%F0%9F%9A%80%20Getting%20started-brightgreen)](https://www.eclipse.org/jkube/docs/openshift-gradle-plugin/#getting-started)
[![Documentation](https://img.shields.io/badge/-%F0%9F%93%96%20%20Documentation-blue)](https://www.eclipse.org/jkube/docs/openshift-gradle-plugin/)

1. Add to the `build.gradle`:
   ```
   plugins {
     id 'org.eclipse.jkube.openshift' version '1.10.1'
   }
   ```

2. Execute these command to build and deploy:
   ```
   $ gradle build ocBuild \
                  ocResource \
                  ocApply
   ```

</div>

</div>
</div>





## Features

### Kubernetes Maven Plugin

<div className="highlight">

![JKube - Kubernetes Maven Plugin](index/kubernetes-logo.svg "Kubernetes logo")

* Generates container images with flexible and powerful configuration (Integrates with Docker Daemon or JIB).
* Generates vanilla Kubernetes descriptors (YAML files).
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

</div>

### OpenShift Maven Plugin

<div className="highlight">

* Built on top of **Kubernetes Maven Plugin** provides OpenShift specific features.
* Dealing with S2I images and hence inherits its flexible and powerful configuration.
* Generates OpenShift specific descriptors (YAML files).
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

![JKube - OpenShift Maven Plugin](index/openshift-logo.svg "OpenShift logo")

</div>


### JKube Kit

<div className="highlight">

![JKube Kit](index/briefcase-icon.svg "Briefcase icon")

* Core
* **Generator** framework for automatically generating Docker images by examining project information.
* **Enricher** framework for creating and enhancing Kubernetes/OpenShift resource descriptors.
* **Profile** combining configuration for generators and enrichers.
* **Resource Configuration** model objects for a simplified configuration of Kubernetes/OpenShift resource.
* **Image Configuration** model objects for modeling Docker image configuration.

</div>


<div className="section-dark">

## Downloads

You can get Eclipse JKube from these platforms:

<span>
[![Maven Central](https://img.shields.io/maven-central/v/org.eclipse.jkube/jkube.svg?label=Maven%20Central)
](https://search.maven.org/search?q=g:%22org.eclipse.jkube%22)
[![Eclipse Download Repository](https://img.shields.io/badge/eclipse%20downloads-downloads.eclipse.org-red)
](https://download.eclipse.org/jkube/)
</span>

</div>
