pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'This is a test'
                echo 'But we do not have unit test here'
            }
        }
        stage('Build') {
            steps {
                echo 'This is a build'
                sh 'npm build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'This is a deploy'
            }
        }
    }
}