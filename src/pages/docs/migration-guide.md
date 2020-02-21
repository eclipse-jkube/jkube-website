---
path: "/docs/migration-guide"
date: "2020-02-24"
title: "Eclipse JKube Migration Guide"
description: "Eclipse JKube migration guide from Fabric8 Maven Plugin (FMP)"
---
<div class="hero">
<div class="hero-content">

# Documentation

</div>
</div>

## Migration Guide for projects using Fabric8 Maven Plugin to Eclipse JKube

For any project currently using [Fabric8 Maven Plugin (FMP)](https://github.com/fabric8io/fabric8-maven-plugin),
migrating to Eclipse JKube should not be that hard.

FMP used to handle both Kubernetes and Openshift clusters but Eclipse JKube has separate plugins for these two different
environments.

### Projects targeting Kubernetes Clusters

#### Zero Configuration

For any project deploying their applications onto Kubernetes we need proceed
[Fabric8 Maven Plugin](https://github.com/fabric8io/fabric8-maven-plugin) with Eclipse JKube 
just replacing `groupId` and `artifactId` like this:

##### FMP zero configuration mode
```xml
<plugin>
    <groupId>io.fabric8</groupId>
    <artifactId>fabric8-maven-plugin</artifactId>
    <version>4.4.0</version>
</plugin>
```

##### Eclipse JKube zero configuration mode
```xml
<plugin>
    <groupId>org.eclipse.jkube</groupId>
    <artifactId>k8s-maven-plugin</artifactId>
    <version>0.1.1</version>
</plugin>
```

#### XML Configuration

In cases where XML configuration is used for enrichers and generators. All the enrichers with prefixes `fmp` or `f8`
are replaced with `jkube`. Let's have a look at this example:

##### FMP configuration for enrichers, generators and resources
```xml
<plugin>
    <groupId>io.fabric8</groupId>
    <artifactId>fabric8-maven-plugin</artifactId>
    <version>4.4.0</version>
    <configuration>
        <resources>
            <labels>
                <all>
                    <testProject>spring-boot-sample</testProject>
                </all>
            </labels>
        </resources>

        <generator>
            <includes>
                <include>spring-boot</include>
            </includes>
            <config>
                <spring-boot>
                    <color>always</color>
                </spring-boot>
            </config>
        </generator>
        <enricher>
            <excludes>
                <exclude>f8-expose</exclude>
            </excludes>
            <config>
                <fmp-service>
                    <type>NodePort</type>
                </fmp-service>
            </config>
        </enricher>
    </configuration>

    <executions>
        <execution>
            <goals>
                <goal>resource</goal>
                <goal>build</goal>
                <goal>helm</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

##### Eclipse JKube configuration for enrichers, generators and resources

```xml
<plugin>
    <groupId>org.eclipse.jkube</groupId>
    <artifactId>k8s-maven-plugin</artifactId>
    <version>0.1.1</version>

    <configuration>
        <resources>
            <labels>
                <all>
                    <testProject>spring-boot-sample</testProject>
                </all>
            </labels>
        </resources>
        <generator>
            <includes>
                <include>spring-boot</include>
            </includes>
            <config>
                <spring-boot>
                    <color>always</color>
                </spring-boot>
            </config>
        </generator>
        <enricher>
            <excludes>
                <exclude>jkube-expose</exclude>
            </excludes>
            <config>
                <jkube-service>
                    <type>NodePort</type>
                </jkube-service>
            </config>
        </enricher>
    </configuration>

    <executions>
        <execution>
            <goals>
                <goal>resource</goal>
                <goal>build</goal>
                <goal>helm</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

#### Resource Fragment configuration

If you want to customize Kubernetes manifests added by FMP by means other than XML configuration,
you usually add your resources to `src/main/fabric8` directory and FMP picks these up during enrichment process and
merges them along with the default generated resources.

For Eclipse JKube it's the same, only the `src/main/fabric8` directory is replaced with`src/main/jkube` directory:

##### FMP fragment configuration

```bash
[~/work/repos/fabric8-maven-plugin/samples/external-resources]$ ls src/main/fabric8/
deployment.yml  sa.yml  service.yml
```

##### Eclipse JKube fragment configuration

```bash
[~/work/repos/jkube/quickstarts/maven/external-resources]$ ls src/main/jkube/
deployment.yml  sa.yml  service.yml
```
#### Image Configuration for Docker builds

Projects relying on FMP's `ImageConfiguration` model for building docker images don't need any change in
Eclipse JKube's XML configuration.

For example, let's consider this simple project's plugin configuration:

##### FMP Image Configuration
```xml
<plugin>
  <groupId>io.fabric8</groupId>
  <artifactId>fabric8-maven-plugin</artifactId>
  <version>4.4.0</version>
  <configuration>
    <images>
      <image>
        <name>rohankanojia/helloworld-java:${project.version}</name>
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
  <artifactId>k8s-maven-plugin</artifactId>
  <version>0.1.1</version>
  <configuration>
    <images>
      <image>
        <name>rohankanojia/helloworld-java:${project.version}</name>
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

### Projects targeting OpenShift Clusters

#### Zero Configuration

For any project deploying their applications onto Kubernetes we need proceed
[Fabric8 Maven Plugin](https://github.com/fabric8io/fabric8-maven-plugin) with Eclipse JKube 
just replacing `groupId` and `artifactId` like this:

##### FMP zero configuration mode
```xml
<plugin>
    <groupId>io.fabric8</groupId>
    <artifactId>fabric8-maven-plugin</artifactId>
    <version>4.4.0</version>
</plugin>
```

##### Eclipse JKube zero configuration mode
```xml
<plugin>
    <groupId>org.eclipse.jkube</groupId>
    <artifactId>oc-maven-plugin</artifactId>
    <version>0.1.1</version>
</plugin>
```

#### XML and Resource Fragment configuration

For [XML](#xml-configuration) and [Resource Fragment](#resource-fragment-configuration) configurations,
sames rules as for Kubernetes Maven Plugin apply.