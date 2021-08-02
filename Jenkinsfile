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

        stage("build-master"){
            when {
                branch 'master'
            }
            environment{
                BRANCH = 'master'
                GO_DIR = 'cd /home/production/front-end/seafarer-client; ls -l;'
                SERVER_CREDENTIAL = credentials('qword-development-root-password')
            }
            steps{
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "${GO_DIR} git pull origin ${BRANCH}; exit;"'
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "${GO_DIR} docker-compose up -d --build; exit;"'
                sh  'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44 "docker image prune -f; exit;"'
            }
        }

    }

}