---
path: "/docs/migration-guide"
date: "2020-02-24"
title: "Eclipse JKube Migration Guide"
description: "Eclipse JKube migration guide from Fabric8 Maven Plugin (FMP)"
---
import {Hero} from '../../components'

<Hero>
# Documentation
## Migration Guide
</Hero>

## Migration Guide for projects using Fabric8 Maven Plugin to Eclipse JKube

For any project currently using [Fabric8 Maven Plugin (FMP)](https://github.com/fabric8io/fabric8-maven-plugin),
migrating to Eclipse JKube is as simple as running a Maven command.

FMP used to handle both Kubernetes and OpenShift clusters but Eclipse JKube has separate plugins for these two different
environments.

### Projects targeting Kubernetes Clusters

Run the following command in you project's root directory:

```bash
mvn org.eclipse.jkube:kubernetes-maven-plugin:migrate
```

Maven coordinates in your `pom.xml` will change from `io.fabric8:fabric8-maven-plugin` to 
`org.eclipse.jkube:kubernetes-maven-plugin` for every `<plugin>` entry.

### Projects targeting OpenShift Clusters

Run the following command in your project's root directory:

```bash
mvn org.eclipse.jkube:openshift-maven-plugin:migrate
```

Maven coordinates in your `pom.xml` will change from `io.fabric8:fabric8-maven-plugin` to 
`org.eclipse.jkube:openshift-maven-plugin` for every `<plugin>` entry.

### XML configuration and Maven properties

FMP specific Maven properties `<fabric8.*` will be automatically renamed to Eclipse JKube analogous
properties `<jkube.*`.

Mojo XML configuration element tag names will also be automatically renamed to the Eclipse JKube
equivalent.

### Resource Fragments

If you want to customize Kubernetes manifests added by FMP by means other than XML configuration,
you usually add your resources to `src/main/fabric8` directory and FMP picks these up during enrichment
process and merges them along with the default generated resources.

Eclipse JKube's `migrate` Maven goal will also take care of renaming your project's `src/main/fabric8`
fragment directory to `src/main/jkube`

### Image Configuration for Docker builds

Projects relying on FMP's `ImageConfiguration` model for building docker images don't need any change in
Eclipse JKube's XML configuration.

For example, let's consider this simple project's plugin configuration:

##### Fabric8 Maven Plugin Image Configuration
```xml
<plugin>
  <groupId>io.fabric8</groupId>
  <artifactId>fabric8-maven-plugin</artifactId>
  <configuration>
    <images>
      <image>
        <name>%g/helloworld-java:%l</name>
        <alias>hello-world</alias>
        <build>
          <from>openjdk:latest</from>
          <assembly>
            <descriptorRef>artifact</descriptorRef>
          </assembly>
          <cmd>java -jar maven/${project.name}-${project.version}.jar</cmd>
        </build>
        <run>
          <wait>
            <log>Hello World!</log>
          </wait>
        </run>
      </image>
    </images>
  </configuration>
</plugin>
```

##### Eclipse JKube Image Configuration
```xml
<plugin>
  <groupId>org.eclipse.jkube</groupId>
  <artifactId>kubernetes-maven-plugin</artifactId>
  <configuration>
    <images>
      <image>
        <name>%g/helloworld-java:%l</name>
        <alias>hello-world</alias>
        <build>
          <from>openjdk:latest</from>
          <assembly>
            <descriptorRef>artifact</descriptorRef>
          </assembly>
          <cmd>java -jar maven/${project.name}-${project.version}.jar</cmd>
        </build>
        <run>
          <wait>
            <log>Hello World!</log>
          </wait>
        </run>
      </image>
    </images>
  </configuration>
</plugin>
```
