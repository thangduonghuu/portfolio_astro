pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/thangduonghuu/portfolio_astro.git'
            }
        }
        stage('Build') { 
            steps {
                sh 'cd portfolio_astro'
                sh 'git pull'
                sh 'pnpm install'
                sh 'npm run build'
                sh 'mv dist/* /var/www/portfolio/html'
                sh 'systemctl restart nginx'
            }
        }
    }
}