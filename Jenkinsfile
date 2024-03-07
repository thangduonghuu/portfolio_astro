pipeline {
    agent any

    tools {nodejs 'node'}

    stages {
        stage('Clone') {
            steps {
                echo "hello"
                git branch: 'main', url: 'https://github.com/thangduonghuu/portfolio_astro.git'
            }
        }

            stage('Build') { 
                steps {
                    bat 'pnpm install'
                }
            }

    }
}