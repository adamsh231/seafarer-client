pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        SERVER_CREDENTIAL = credentials('qword-development-root-password')
        SSH_COMMAND = 'sshpass -p "${SERVER_CREDENTIAL}" ssh root@103.102.153.44'
    }

    stages{

        stage("prepare"){
            steps{
                sh 'apt-get update'
                sh 'apt install sshpass'
            }
        }

        // -------------------------------- Master ----------------------------------- //
        stage("build-master"){
            environment{
                BRANCH = 'master'
                GO_DIR = 'cd /home/production/front-end/seafarer-client; ls -l;'
            }
            when {
                branch '${BRANCH}'
            }
            steps{
                sh  '${SSH_COMMAND} "${GO_DIR} git pull origin ${BRANCH};"'
                sh  '${SSH_COMMAND} "${GO_DIR} docker-compose up -d --build;"'
                sh  '${SSH_COMMAND} "docker image prune -f;"'
            }
        }
        // --------------------------------------------------------------------------- //

    }

}