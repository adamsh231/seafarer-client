pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        GO_TO_DIR = 'cd /home/production/front-end/seafarer-client; ls -l;'
        SERVER_CREDENTIAL = credentials('qword-development-root-password')
    }

    stages{
        stage("prepare"){
            steps{
                sh 'apt-get update'
                sh 'apt install sshpass'
            }
        }
        stage("build-master"){
            when {
                branch 'master'
            }
            steps{
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "${GO_TO_DIR} git pull origin master; exit;"'
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "${GO_TO_DIR} docker-compose up -d --build; exit;"'
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "docker image prune -f; exit;"'
            }
        }
    }

}