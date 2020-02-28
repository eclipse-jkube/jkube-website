---
path: "/"
date: "2020-01-02"
title: "Eclipse JKube"
description: "Eclipse JKube welcome page"
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

Eclipse JKube is a collection of plugins and libraries that are used for generating and deploying Kubernetes/Openshift
manifests at compile time. It brings your Java applications on to Kubernetes and OpenShift.

It provides a tight integration into Maven and benefits from the build configuration already provided.

This project focus on two tasks: Building Docker images and creating Kubernetes and OpenShift resource descriptors.

</div>
</div>

## Features

### JKube Kit

<div class="highlight">

![JKube Kit](index/briefcase-icon.svg "JKube Kit")

* **Generator** framework for automatically generating Docker images by examining project information.
* **Enricher** framework for creating and enhancing Kubernetes/Openshift resource descriptors.
* **Profile** combining configuration for generators and enrichers.
* **Resource Configuration** model objects for a simplified configuration of Kubernetes/Openshift resource.
* **Image Configuration** model objects for modeling Docker image configuration.

</div>

### Kubernetes Maven Plugin

<div class="highlight">

* Generates docker images with flexible and powerful configuration.
* Supports generating Kubernetes descriptors.
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

![JKube Kit](index/kubernetes-logo.svg "JKube Kit")

</div>

### Openshift Maven Plugin

<div class="highlight">

![JKube Kit](index/openshift-logo.svg "JKube Kit")

* Dealing with S2I images and hence inherits its flexible and powerful configuration.
* Supports generating Openshift descriptors.
* Provides **Zero Configuration** for a quick ramp-up where opinionated defaults will be pre-selected.
* Provides **Inline Configuration** within the plugin configuration in an XML syntax.
* Provides **External Configuration** templates of real deployment descriptors which are enriched by plugin.

</div>

<div class="section-dark">

## Downloads

You can get Eclipse JKube from these platforms:

[![Maven Central](https://img.shields.io/maven-central/v/org.eclipse.jkube/jkube.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22org.eclipse.jkube%22%20AND%20a:%22jkube%22)
[![Eclipse Download Repository](https://img.shields.io/badge/eclipse%20downloads-downloads.eclipse.org-red)](https://download.eclipse.org/jkube/)

</div>
