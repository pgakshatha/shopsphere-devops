pipeline {
    agent any

    environment {

        AWS_REGION = "ap-south-1"

        AWS_ACCOUNT_ID = "051495878977"

        ECR_REPOSITORY = "shopsphere"

        IMAGE_TAG = "${BUILD_NUMBER}"

        ECR_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}"

    }

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {

                sh 'docker --version'

                sh 'aws --version'

                sh 'git --version'

            }
        }

    }

    post {

        success {
            echo "Environment Verification Successful"
        }

        failure {
            echo "Pipeline Failed"
        }

    }

}