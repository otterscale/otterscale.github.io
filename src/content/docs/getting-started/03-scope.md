---
title: Scope
description: Manage scopes in OtterScale.
---

Scopes allow you to organize your resources and control access.

## Selecting a Scope

You can select a scope from the dropdown menu in the navigation bar. This will filter the resources you see to only those within the selected scope.

## Creating a Scope

To create a new scope, navigate to the Scope management area and click on "Create Scope". A side panel will appear with the creation form.

### 1. Plan Selection

At the top of the form, you will see the details of the plan associated with the scope you are creating. Different plans support different features:

| Feature    | Standard    | Advanced   | Enterprise |
| :--------- | :---------- | :--------- | :--------- |
| Ceph       | ✅          | ✅         | ✅         |
| Kubernetes | ✅          | ✅         | ✅         |
| Cluster    | ❌          | ✅         | ✅         |
| Node       | Single-Node | Multi-Node | Multi-Node |

### 2. Scope Details

Fill in the following information to configure your new scope:

#### Scope Name

- **Label**: Scope Name <span style="color: #eab308">●</span>
- **Description**: Enter a unique name for your scope.
- **Input**: Text field (Required).

#### Machine Selection

- **Label**: Machine <span style="color: #eab308">●</span>
- **Description**: Select the physical machine to assign to this scope.
- **Input**: Dropdown menu.
  - The dropdown lists available machines that are in the `Ready` status.
  - Hovering over the info icon <span class="iconify" data-icon="ph:info"></span> next to a machine name displays detailed hardware specifications (CPU, Memory, Storage, System info, etc.).

#### Storage Devices

- **Label**: Storage Devices <span style="color: #eab308">●</span>
- **Description**: Select the block devices to be used by the scope.
- **Input**: Checkboxes.
  - This section appears after you select a machine.
  - It lists available non-boot block devices.
  - Hovering over a device shows its model and capacity.

#### Network Configuration

- **Calico CIDR** (Optional):
  - **Description**: The CIDR block for Calico networking.
  - **Input**: Text field (e.g., `192.168.0.0/16`).
- **Virtual IP** (Optional):
  - **Description**: The virtual IP address for the scope.
  - **Input**: Text field (e.g., `192.168.1.1`).

### 3. Creation Process

Once you have filled in the details, click the **Create** button. The system will perform the following steps automatically:

1.  **Create Scope**: Initializes the scope record.
2.  **Add Machine Tags**: Tags the selected machine.
3.  **Commission Machine**: Configures the machine (SSH, networking, storage).
4.  **Wait for Ready**: Waits for the machine to report a `Ready` status.
5.  **Create Machine**: Associates the machine with the scope.
6.  **Wait for Agent**: Waits for the agent to start on the machine.
7.  **Create Node**: Finalizes the node creation with network and storage settings.

You will see a loading indicator and status messages during this process. Once complete, a success message will appear.
