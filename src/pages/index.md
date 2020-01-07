---
path: "/"
date: "2020-01-02"
title: "Eclipse JKube"
description: "Eclipse JKube welcome page"
---
<div class="getting-involved">

[![Github](https://img.shields.io/github/stars/eclipse/jkube?style=social)](https://github.com/eclipse/jkube)
[![Twitter](https://img.shields.io/twitter/follow/jkubeio?label=Follow)](https://twitter.com/jkubeio)
[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg?label=license&logo=eclipse)](https://www.eclipse.org/legal/epl-2.0/)
[![Gitter](https://badges.gitter.im/eclipse/jkube.svg)](https://gitter.im/eclipse/jkube?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Eclipse Jkube Dev Mailing List](https://img.shields.io/badge/Eclipse%20Jkube%20-Developer%20Mailing%20List-orange)](mailto:jkube-dev@eclipse.org)

</div>
<div class="hero">

<img src="./index/EF_GRY-OR_png.png" alt="Eclipse Foundation" class="hero__logo"/>

# Eclipse JKube

Eclipse JKube is a collection of plugins and libraries that are used for generating and deploying Kubernetes/Openshift
manifests at compile time. It brings your Java applications on to Kubernetes and OpenShift.
It provides a tight integration into Maven and benefits from the build configuration already provided.
This project focus on two tasks: Building Docker images and creating Kubernetes and OpenShift resource descriptors.

</div>

<div class="section-features">

## Features

### JKube-kit

* **Generator** framework for automatically generating Docker images by examining project information.
* **Enricher** framework for creating and enhancing Kubernetes/Openshift resource descriptors.
* **Profile** combining configuration for generators and enrichers.
* **Resource Configuration** model objects for a simplified configuration of Kubernetes/Openshift resource.
* **Image Configuration** model objects for modeling Docker image configuration.

### Kubernetes Maven Plugin

* Generates docker images with flexible and powerful configuration.
* Supports generating Kubernetes descriptors.
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

### Openshift Maven Plugin

* Dealing with S2I images and hence inherits its flexible and powerful configuration.
* Supports generating Openshift descriptors.
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

</div>

---

## View Demo

### <a href="https://asciinema.org/a/253747">Kubernetes Maven Plugin</a>

<img src="./index/k8s-maven-plugin-demo.gif" alt="Sample Demo"/>

### <a href="https://asciinema.org/a/253742">Openshift Maven Plugin</a>

<img src="./index/oc-maven-plugin-demo.gif" alt="Sample Demo"/>

## Getting Started

* Visit our <a href="https://github.com/eclipse/jkube/tree/master/quickstarts">quickstarts samples</a> on github.

---
## Downloads

You can get Eclipse Jkube from these platforms:

* [![Maven Central](https://img.shields.io/maven-central/v/org.eclipse.jkube/jkube.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22org.eclipse.jkube%22%20AND%20a:%22jkube%22)
* [![Eclipse Download Repository](https://img.shields.io/badge/eclipse%20downloads-downloads.eclipse.org-red)](https://download.eclipse.org/jkube/)

---
## Documentation

Check out our documentation for for:
* **Kubernetes Maven Plugin** [![Documentation](https://img.shields.io/badge/plugin-documentation-lightgrey)](https://htmlpreview.github.io/?https://github.com/eclipse/jkube/blob/master/kubernetes-maven-plugin/doc/index.html)
* **Openshift Maven Plugin** [![Documentation](https://img.shields.io/badge/plugin-documentation-lightgrey)](https://htmlpreview.github.io/?https://github.com/eclipse/jkube/blob/master/openshift-maven-plugin/doc/index.html)
* **Jkube-kit**:
  * **Generator** framework for automatically generating Docker images by examining project information.
   [![Javadocs](http://www.javadoc.io/badge/org.eclipse.jkube/jkube-maven-generator-api.svg?color=blue)](http://www.javadoc.io/doc/org.eclipse.jkube/jkube-maven-generator-api)
  * **Enricher** framework for creating and enhancing Kubernetes and OpenShift resources.
   [![Javadocs](http://www.javadoc.io/badge/org.eclipse.jkube/jkube-maven-enricher-api.svg?color=blue)](http://www.javadoc.io/doc/org.eclipse.jkube/jkube-maven-enricher-api)
  * **Profile** combining the configuration for generators and enrichers.
   [![Javadocs](http://www.javadoc.io/badge/org.eclipse.jkube/jkube-maven-profiles.svg?color=blue)](http://www.javadoc.io/doc/org.eclipse.jkube/jkube-maven-profiles)
  * **Resource configuration** model objects for a simplified configuration of Kubernetes and OpenShift resources.
   [![Javadocs](http://www.javadoc.io/badge/org.eclipse.jkube/jkube-kit-config-resource.svg?color=blue)](http://www.javadoc.io/doc/org.eclipse.jkube/jkube-kit-config-resource)
  * **Image configuration** model objects for modeling Docker image configuration as used in docker-maven-plugin.
  [![Javadocs](http://www.javadoc.io/badge/org.eclipse.jkube/jkube-kit-config-image.svg?color=blue)](http://www.javadoc.io/doc/org.eclipse.jkube/jkube-kit-config-image)

