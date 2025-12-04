#  DevOps Automation Pipeline

> A hands-on DevOps project demonstrating end-to-end CI/CD automation, Infrastructure as Code, and cloud deployment.

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/SaraElAmrani/devops-automation-project/actions/runs/19913939797)
[![Infrastructure](https://img.shields.io/badge/IaC-Terraform-7B42BC?logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Cloud](https://img.shields.io/badge/Cloud-AWS-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Container](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

---

##  About This Project

This is a **learning project** I built to master DevOps fundamentals and understand how modern deployment workflows work in real-world scenarios. 

**What I learned:**
- How to automate everything from code to production
- Infrastructure as Code with Terraform
- CI/CD pipelines with GitHub Actions
- Container orchestration with Docker
- Cloud deployment on AWS

---

##  What It Does

This project automatically:
1.  **Tests** the code when I push changes
2.  **Builds** a Docker image
3.  **Pushes** the image to Docker Hub
4.  **Deploys** to AWS EC2 automatically

**Result:** From `git push` to production in ~3 minutes! 

---

##  Architecture

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐      ┌──────────┐
│   GitHub    │──▶   │ GitHub       │──▶   │ Docker Hub  │──▶   │   AWS    │
│   (Code)    │      │ Actions      │      │  (Image)    │      │   EC2    │
│             │      │ (CI/CD)      │      │             │      │          │
└─────────────┘      └──────────────┘      └─────────────┘      └──────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Terraform  │
                     │ (AWS Infra)  │
                     └──────────────┘
```

---

##  Tech Stack

| Category | Technologies |
|----------|-------------|
| **Application** | Node.js, Express |
| **Testing** | Jest, Supertest |
| **Containerization** | Docker |
| **CI/CD** | GitHub Actions |
| **Infrastructure** | Terraform |
| **Cloud** | AWS (EC2, Security Groups) |
| **Version Control** | Git, GitHub |

---

##  Key Features

###  Automated CI/CD Pipeline
- Automatic testing on every commit
- Docker image build and push
- Zero-downtime deployment to AWS

###  Infrastructure as Code
- AWS infrastructure defined in Terraform
- Reproducible in minutes
- Version controlled

###  Containerized Deployment
- Consistent environments (dev = prod)
- Easy scaling and portability
- Isolated dependencies

###  Security Best Practices
- Secrets management with GitHub Secrets
- SSH key authentication
- Security groups for network isolation

---

##  Project Structure

```
devops-automation-pipeline/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # CI/CD pipeline configuration
├── terraform/
│   ├── main.tf                # AWS infrastructure definition
│   ├── variables.tf           # Configurable parameters
│   └── outputs.tf             # Infrastructure outputs
├── app.js                     # Node.js application
├── app.test.js                # Automated tests
├── Dockerfile                 # Container configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

---

##  CI/CD Pipeline Flow

```yaml
Push to GitHub
    ↓
┌─────────────────────────────────────────┐
│  Stage 1: TEST                          │
│  • Run automated tests                  │
│  • Validate code quality                │
└─────────────────┬───────────────────────┘
                  ↓ (if tests pass)
┌─────────────────────────────────────────┐
│  Stage 2: BUILD                         │
│  • Build Docker image                   │
│  • Push to Docker Hub                   │
└─────────────────┬───────────────────────┘
                  ↓ (if build succeeds)
┌─────────────────────────────────────────┐
│  Stage 3: DEPLOY                        │
│  • SSH to AWS EC2                       │
│  • Pull new Docker image                │
│  • Deploy with zero downtime            │
└─────────────────────────────────────────┘
```

---

##  Local Development

### Prerequisites
- Node.js 18+
- Docker
- Terraform
- AWS CLI

### Quick Start

```bash
# Clone the repository
git clone https://github.com/SaraElAmrani/devops-automation-pipeline.git
cd devops-automation-pipeline

# Install dependencies
npm install

# Run tests
npm test

# Run locally
npm start
# Visit http://localhost:3000
```

### Docker

```bash
# Build the image
docker build -t devops-app .

# Run the container
docker run -p 3000:3000 devops-app

# Visit http://localhost:3000
```

---

##  AWS Deployment

### Infrastructure Setup

```bash
cd terraform

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Deploy infrastructure
terraform apply

# Note the public IP from outputs
```

### Manual Deployment

```bash
# SSH to EC2 instance
ssh -i ~/.ssh/id_rsa ubuntu@<EC2_PUBLIC_IP>

# Pull and run the Docker image
docker pull saraelamrani/devops-app:latest
docker run -d -p 3000:3000 --name devops-app saraelamrani/devops-app:latest
```

---

##  What I Learned

### Technical Skills
✅ Setting up automated CI/CD pipelines  
✅ Writing Infrastructure as Code with Terraform  
✅ Containerizing applications with Docker  
✅ Deploying to cloud platforms (AWS)  
✅ Managing secrets and security  
✅ Writing automated tests  
✅ Linux server management  

### DevOps Principles
✅ Automation over manual processes  
✅ Infrastructure as Code  
✅ Continuous Integration/Deployment  
✅ Security-first approach  
✅ Monitoring and health checks  

---

##  Future Improvements

If I were to expand this project, I would add:

- [ ] **Monitoring**: Prometheus + Grafana dashboards
- [ ] **Logging**: Centralized logging with ELK Stack
- [ ] **Kubernetes**: Container orchestration at scale
- [ ] **Multi-environment**: Dev, Staging, Production
- [ ] **Blue-Green Deployment**: Zero-downtime updates
- [ ] **Automated Rollback**: On deployment failure

---

##  Learning Resources

Resources that helped me build this project:

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Getting Started](https://docs.docker.com/get-started/)
- [AWS Free Tier](https://aws.amazon.com/free/)

---


## 👤 Author

**Sara EL AMRANI**

- GitHub: [@SaraElAmrani]([https://github.com/SaraElAmrani])
- Email: saraelamrani269@gmail.com
- LinkedIn: [Sara EL AMRANI](https://www.linkedin.com/in/sara-el-amrani-4619041a6/)


---

##  Acknowledgments

This project was built as part of my DevOps learning journey. 

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Built with ❤️ by Sara EL AMRANI**

</div>




