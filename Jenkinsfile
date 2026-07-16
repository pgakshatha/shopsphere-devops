pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        AWS_ACCOUNT_ID = '051495878977'
        ECR_REPOSITORY = 'shopsphere'

        IMAGE_TAG = "${BUILD_NUMBER}"

        ECR_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}"
    }

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Verify Tools') {
            steps {
                sh 'docker --version'
                sh 'aws --version'
                sh 'git --version'
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login --username AWS --password-stdin \
                $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
                '''
            }
        }

        stage('Build Backend Image') {
            steps {
                sh '''
                docker build \
                -t backend:${IMAGE_TAG} \
                -t backend:latest \
                ./backend
                '''
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh '''
                docker build \
                -t frontend:${IMAGE_TAG} \
                -t frontend:latest \
                ./frontend
                '''
            }
        }

        stage('Tag Images for Amazon ECR') {
            steps {
                sh '''
                docker tag backend:${IMAGE_TAG} ${ECR_URI}:backend-${IMAGE_TAG}
                docker tag backend:latest ${ECR_URI}:backend-latest

                docker tag frontend:${IMAGE_TAG} ${ECR_URI}:frontend-${IMAGE_TAG}
                docker tag frontend:latest ${ECR_URI}:frontend-latest
                '''
            }
        }

        stage('Push Backend Image') {
            steps {
                sh '''
                docker push ${ECR_URI}:backend-${IMAGE_TAG}
                docker push ${ECR_URI}:backend-latest
                '''
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh '''
                docker push ${ECR_URI}:frontend-${IMAGE_TAG}
                docker push ${ECR_URI}:frontend-latest
                '''
            }
        }

    }

    post {
        success {
            echo 'Images successfully pushed to Amazon ECR.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}