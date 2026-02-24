# 🚀 Mini Project – Docker + Ansible + Git

## 🎯 Project Overview

In this mini project you will build a complete DevOps environment that includes:

* 🐳 Docker (image creation & container orchestration)
* ⚙️ Ansible (infrastructure automation)
* 🗂 Git (professional workflow with Pull Requests)
* 🐘 PostgreSQL (database)
* 🐍 Python Backend Application (REST API)

The project is divided into **2 main parts** + **bonus tasks**.

---

# 📦 Part 1 – Custom Docker Images (40 Points)

## 🎯 Objective

Create your own Docker images based on **Ubuntu OS** for the following:

1. **Ansible Master**
2. **Ansible Slave**

## 📌 Requirements

* Base image: Ubuntu
* Install Ansible
* Configure SSH
* Generate SSH keys in advance
* Use Docker volumes to inject SSH keys into the containers
* Push both images to **DockerHub** as **Public repositories**
* Include both Dockerfiles in the project repository

## 📁 Required Files

```
ansible-master/
 └── Dockerfile

ansible-slave/
 └── Dockerfile
```

---

# 🏗 Part 2 – Full Infrastructure Setup (60 Points)

## 🖥 Architecture

You must create **3 servers**:

| Server          | Role                        |
| --------------- | --------------------------- |
| Ansible Master  | Infrastructure & automation |
| Ansible Slave 1 | Application Server          |
| Ansible Slave 2 | Database Server             |

---

## 🐍 Application Server (Ansible Slave 1)

### Requirements

* Python application
* Listens on port `5000`
* Dedicated Dockerfile
* Runs using Docker Compose
* Includes a healthcheck
* Connects to PostgreSQL database
* Uses environment variables for DB credentials (no hardcoded secrets)

### API Endpoints

#### ✅ GET /users

Returns all users in JSON format.

#### ✅ POST /users

Receives:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Password encryption is optional.

### 💡 Important

Use environment variables when running the container to secure database credentials.

---

## 🐘 Database Server (Ansible Slave 2)

### Requirements

* PostgreSQL
* Port `5432`
* Must run using Docker Compose
* Use a Docker volume for persistent data
* Deploy **pgAdmin 4** for database UI (choose any port)
* You may use SQL scripts or Open API to seed initial users

---

## ⚙️ Ansible Master Responsibilities

The Ansible Master is responsible for:

* Installing:

  * Docker
  * Docker Compose
  * Git
* Pulling your private repository via SSH key
* Running Docker Compose on the target servers

### Mandatory Ansible Components

* Inventory file with 2 servers (Application + Database)
* Playbook for installations
* Playbook for Docker Compose deployment – file must include `notify`
* No duplication of logic – use variables (VARS)

---

# 🔐 Git Requirements

* Create a **Private Repository**
* Do NOT work directly on `MAIN`
* Work on a dedicated branch (example):

```
feature/mini-project
```

* Open a Pull Request at the end of the project
* The `MAIN` branch must contain ONLY the README file final mini approval

## 👤 Add Collaborator

You must add:

* Email: [yakirbar7820@gmail.com](mailto:yakirbar7820@gmail.com)
* GitHub: [https://github.com/YakirBar](https://github.com/YakirBar)

Only after PR approval will it be merged into MAIN.

---

# 📁 Recommended Folder Structure

```
mini-project/
│
├── ansible/
│   ├── inventory.ini
│   ├── install.yml
│   └── deploy.yml
│
├── ansible-master/
│   └── Dockerfile
│
├── ansible-slave/
│   └── Dockerfile
│
├── app/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── src/
│
├── database/
│   └── docker-compose.yml
│
└── README.md
```

---

# 🏆 Bonus Tasks

## 🧭 1. Architecture Diagram (10 Points)

Create an architecture diagram using Draw.io (or similar tool).

The diagram must describe:

* Client
* Application Server
* Database Server
* Ansible Master
* Flow between components

This is highly recommended for understanding high-level architecture.

---

## 🎨 2. Frontend (15 Points)

* You may use any language or framework
* UI must:

  * Display all users
  * Allow creating a new user
* Backend must only allow API access from the frontend
* If implemented – include a Dockerfile for the frontend

---

## 🔥 3. Firewall Configuration (25 Points)

Ubuntu includes a built-in firewall (UFW).

You must configure firewall rules for all 3 servers.

### Example Requirements:

* Database server only accepts incoming traffic from the Application server on port 5432
* Restrict unnecessary incoming/outgoing traffic
* Open only required ports

---

# 📋 Mandatory Files for Submission

* Dockerfile – Ansible Master
* Dockerfile – Ansible Slave
* Dockerfile – Application
* Docker Compose – Ansible
* Docker Compose – Application
* Docker Compose – Database (PostgreSQL + pgAdmin)
* Inventory file
* Playbook – Installations
* Playbook – Docker Compose deployment
* README.md

---

# 👤 Mandatory Accounts

* GitHub Account
* DockerHub Account

All Docker images must be **Public**.

---

# 🧮 Grading Breakdown

| Section                 | Points |
| ----------------------- | ------ |
| Part 1 – Docker Images  | 40     |
| Part 2 – Infrastructure | 60     |
| Architecture Diagram    | 10     |
| Frontend                | 15     |
| Firewall                | 25     |

---

# 🚨 Important Guidelines

* No hardcoded credentials
* Use environment variables
* Use volumes for persistence
* Clean folder structure
* Professional README
* Proper Pull Request description
* Follow DevOps best practices

---

# 💡 Expected Skill Level

This project simulates a real-world DevOps workflow including:

* Infrastructure as Code
* Containerization
* Automation
* Secure deployment
* Professional Git workflow

---

# 🌐 Allowed & Forbidden Resources

## ✅ Allowed Resources

You may use the following official documentation and platforms:

* GitHub
  [https://github.com](https://github.com)

* Docker Hub
  [https://hub.docker.com](https://hub.docker.com)

* Ansible Documentation
  [https://docs.ansible.com](https://docs.ansible.com)

* Git SCM
  [https://git-scm.com/install](https://git-scm.com/install)

* Stack Overflow
  [https://stackoverflow.com/questions](https://stackoverflow.com/questions)

* PostgreSQL Documentation
  [https://www.postgresql.org/docs/current/app-psql.html](https://www.postgresql.org/docs/current/app-psql.html)

---

## ❌ Forbidden Resources

* Any AI chat tools
* Any AI code generation platforms
* Any automated DevOps code builders

All work must be done independently using documentation and your own understanding.

Violation of this rule may result in disqualification.
