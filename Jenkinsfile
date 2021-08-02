pipeline{
    agent any

    triggers {
        githubPush()
    }

    stages{
        stage("prepare"){
            steps{
                sh 'apt install sshpass'
                sh 'sshpass'
                // sh 'ssh -o StrictHostKeyChecking=no root@103.102.153.44'
                echo "git pull origin master"
            }
        }
        stage("build"){
            steps{
                echo "docker-compose up -d --build"
            }
        }
        stage("after"){
            steps{
                echo "docker image prune"
            }
        }
    }
}