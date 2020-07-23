---
path: "/"
date: "2020-01-02"
title: "Eclipse JKube - Successor of the deprecated Fabric8 Maven Plugin"
description: "Eclipse - Successor of the deprecated Fabric8 Maven Plugin"
---
<div class="hero">
<div class="hero-content">

<div class="getting-involved">

[![Twitter](https://img.shields.io/twitter/follow/jkubeio?label=Follow)](https://twitter.com/jkubeio)
[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg?label=license&logo=eclipse)](https://www.eclipse.org/legal/epl-2.0/)
[![Gitter](https://badges.gitter.im/eclipse/jkube.svg)](https://gitter.im/eclipse/jkube?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Eclipse JKube Dev Mailing List](https://img.shields.io/badge/Eclipse%20JKube%20-Developer%20Mailing%20List-orange)](https://accounts.eclipse.org/mailing-list/jkube-dev)

</div>

# Eclipse JKube

## Cloud-Native Java Applications without a hassle

Eclipse JKube is a collection of plugins and libraries that are used for building container images using Docker, JIB 
or S2I build strategies. Eclipse JKube generates and deploys Kubernetes/OpenShift manifests at compile time too.

It brings your Java applications on to Kubernetes and OpenShift by leveraging the tasks required to make your application
cloud-native.

Eclipse JKube also provides a set of tools such as watch, debug, log, etc. to improve your developer experience.

</div>
</div>

## Features

### Kubernetes Maven Plugin

<div class="highlight">

![JKube - Kubernetes Maven Plugin](index/kubernetes-logo.svg "Kubernetes logo")

* Generates container images with flexible and powerful configuration (Integrates with Docker Daemon or JIB).
* Generates vanilla Kubernetes descriptors (YAML files).
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

</div>

### OpenShift Maven Plugin

<div class="highlight">

* Built on top of **Kubernetes Maven Plugin** provides OpenShift specific features.
* Dealing with S2I images and hence inherits its flexible and powerful configuration.
* Generates OpenShift specific descriptors (YAML files).
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

![JKube - OpenShift Maven Plugin](index/openshift-logo.svg "OpenShift logo")

</div>


### JKube Kit

<div class="highlight">

![JKube Kit](index/briefcase-icon.svg "Briefcase icon")

* Core
* **Generator** framework for automatically generating Docker images by examining project information.
* **Enricher** framework for creating and enhancing Kubernetes/OpenShift resource descriptors.
* **Profile** combining configuration for generators and enrichers.
* **Resource Configuration** model objects for a simplified configuration of Kubernetes/OpenShift resource.
* **Image Configuration** model objects for modeling Docker image configuration.

</div>

<div class="section-dark">

## Downloads

You can get Eclipse JKube from these platforms:

[![Maven Central](https://img.shields.io/maven-central/v/org.eclipse.jkube/jkube.svg?label=Maven%20Central)
](https://search.maven.org/search?q=g:%22org.eclipse.jkube%22)
[![Eclipse Download Repository](https://img.shields.io/badge/eclipse%20downloads-downloads.eclipse.org-red)
](https://download.eclipse.org/jkube/)

</div>
