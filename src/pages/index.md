---
path: "/"
date: "2020-01-02"
title: "Eclipse JKube"
description: "Eclipse JKube welcome page"
---
<h1 class="hero">Eclipse JKube</h1>

<div class="section-dark">

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

## Getting started

* Check out our asciicasts for:
  * <a href="https://asciinema.org/a/253747">Kubernetes Maven Plugin</a>
    <img src="https://raw.githubusercontent.com/eclipse/jkube/kubernetes-maven-plugin/master/k8s-maven-plugin-demo.gif" alt="Sample Demo" />
  * <a href="https://asciinema.org/a/253742">Openshift Maven Plugin</a>
    <img src="https://raw.githubusercontent.com/eclipse/jkube/openshift-maven-plugin/master/oc-maven-plugin-demo.gif" alt="Sample Demo" />


* Visit our <a href="https://github.com/eclipse/jkube/quickstarts">quickstarts samples</a> on github.

---

## Documentation

* Check out our documentation for for:
  * <a href="./kubernetes-maven-plugin/doc/index.html">Kubernetes Maven Plugin</a>
  * <a href="./openshift-maven-plugin/doc/index.html">Openshift Maven Plugin</a>


---

## Getting Involved

* Follow us on <a href="https://twitter.com/jkubeio">Twitter</a>
* Contribute via bug fixes or issues on <a href="https://github.com/eclipse/jkube">Github</a>
* Our mailing list: jkube-dev@eclipse.org
* Reach out to us on <a href="https://gitter.im/eclipse/jkube#">Gitter</a>

