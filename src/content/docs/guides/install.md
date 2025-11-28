---
title: Installation Guide
description: A guide for installing Otterscale.
---

# OtterScale Installation Guide

## System Requirements

### Operating System

- **Ubuntu 24.04 LTS** (Required)

### Hardware Requirements

- **Memory:** Minimum 8 GB RAM
- **Disk Space:** Minimum 100 GB available storage

### Network Requirements

- At least one network interface with external internet connectivity
- The installation script will check for network bridge `br-otters`:
  - If the bridge exists, it will be used
  - If the bridge does not exist, the script will prompt to select an existing bridge or create a new one automatically

## Firewall Configuration

The installation process requires access to various external services. Please ensure the following domains and ports are accessible through your firewall:

### Canonical Services

**TCP Port 443 (HTTPS):**

- api.charmhub.io
- api.jujucharms.com
- changelogs.ubuntu.com
- charmhub.io
- cloud-images.ubuntu.com
- maas.ubuntu.com
- images.maas.io
- juju.is
- jaas.ai
- streams.canonical.com
- objects.githubusercontent.com
- contracts.canonical.com

**TCP Port 80 (HTTP):**

- images.maas.io

### Snap Package Management

**TCP Port 443 (HTTPS):**

- snapcraft.io
- api.snapcraft.io
- storage.snapcraftcontent.com
- canonical-lgw01.cdn.snapcraftcontent.com
- canonical-lcy01.cdn.snapcraftcontent.com
- canonical-lcy02.cdn.snapcraftcontent.com
- canonical-bos01.cdn.snapcraftcontent.com

### Ubuntu Package Repositories

**TCP Ports 443 and 80 (HTTPS/HTTP):**

- tw.archive.ubuntu.com
- archive.ubuntu.com
- ports.ubuntu.com
- security.ubuntu.com
- esm.ubuntu.com

### GitHub and OtterScale

**TCP Ports 443 and 80 (HTTPS/HTTP):**

- otterscale.github.io
- otterscale.com
- raw.githubusercontent.com
- github.com

### Istio Service Mesh

**TCP Port 443 (HTTPS):**

- istio.io

### Kubernetes and Container Registries

**TCP Port 443 (HTTPS):**

- registry.k8s.io
- k8s.gcr.io
- ghcr.io
- d39mqg4b1dx9z1.cloudfront.net (registry.k8s.io CDN)
- storage.googleapis.com

### Docker Registry

**TCP Port 443 (HTTPS):**

- auth.docker.io
- auth.docker.com
- login.docker.com
- cdn.auth0.com
- docker.io
- hub.docker.com
- registry-1.docker.io
- index.docker.io
- production.cloudflare.docker.com
- docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com

### NVIDIA Container Registry

**TCP Port 443 (HTTPS):**

- nvcr.io

### Alternative Container Registries

**TCP Port 443 (HTTPS):**

- registry.cn-hangzhou.aliyuncs.com

### HuggingFace Model Repository

**TCP Port 443 (HTTPS):**

- huggingface.co
- cdn-lfs.huggingface.co
- cdn.huggingface.co

### Red Hat Registries

**TCP Port 443 (HTTPS):**

- registry.redhat.io
- quay.io
- registry.access.redhat.com

### Helm Chart Repositories

**TCP Port 443 (HTTPS):**

- charts.jetstack.io (Cert-manager)
- charts.bitnami.com (Bitnami charts)
- open-feature.github.io (OpenFeature operator)
- prometheus-community.github.io (Prometheus)
- project-hami.github.io (HAMi GPU device plugin)
- helm.ngc.nvidia.com (NVIDIA Helm charts)
- llm-d.ai (LLM-D charts)
