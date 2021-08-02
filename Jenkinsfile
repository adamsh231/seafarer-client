pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        SERVER_CREDENTIAL = credentials('qword-development-root-password')
    }

    stages{
        stage("prepare"){
            steps{
                sh 'apt-get update'
                sh 'apt install sshpass'
            }
        }
        stage("build"){
            steps{
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "cd /home/production/front-end/seafarer-client; ls -l; git pull origin master; exit;"'
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "cd /home/production/front-end/seafarer-client; ls -l; docker-compose up -d --build; exit;"'
            }
        }
        stage("after"){
            steps{
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "docker image prune -f; exit;"'
            }
        }
    }

}