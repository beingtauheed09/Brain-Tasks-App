# Brain-Tasks-App Deployment on AWS EKS

## Project Overview
Deployment of a React-based task application onto a production-ready AWS EKS cluster using a fully automated CI/CD pipeline.

## Access the Application
**Load Balancer URL:** http://a8a514ac33a1f4dd08f9c6e3018040d5-309477946.us-east-1.elb.amazonaws.com

## Architecture & Pipeline
1. **Version Control:** GitHub serves as the source of truth.
2. **CI/CD Orchestration:** AWS CodePipeline triggers on every push.
3. **Build & Image Management:** AWS CodeBuild dockerizes the app and pushes to Amazon ECR.
4. **Orchestration:** AWS EKS (Kubernetes) manages the containers.
5. **Traffic Management:** An AWS LoadBalancer exposes the app on Port 80 (routing to container port 3000).

## Infrastructure Setup Steps
1. **Cluster Creation:** Used `eksctl` to provision the EKS cluster and NodeGroups.
2. **RBAC Configuration:** Modified `aws-auth` ConfigMap to grant CodeBuild permissions to the cluster.
3. **IAM Permissions:** Attached `AmazonEC2ContainerRegistryReadOnly` to the NodeInstanceRole to allow image pulling.
4. **Deployment:** Applied Kubernetes manifests via `kubectl` within the CodeBuild environment.