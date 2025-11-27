---
title: Installation
description: Step-by-step guide to installing OtterScale.
---

Follow the steps below to install and configure OtterScale.

## Installation Process

### 1. Start Services

Run the following command to start the necessary services using Docker Compose:

```bash
docker-compose up -d
```

### 2. Configure Installation

Create an `install.cfg` file with the required configuration. You can use the following template:

```bash title="install.cfg"
## MAAS DHCP Range IP
MAAS_DHCP_START_IP="192.168.197.216"
MAAS_DHCP_END_IP="192.168.197.219"

## OtterScale Web IP
OTTERSCALE_WEB_IP="192.168.197.220"
```

Ensure that the IP addresses are correctly configured for your network environment.

### 3. Run Installation Script

Execute the installation script through the User Interface:

1.  Access the OtterScale UI.
2.  Execute the `install.sh` script.
