pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        SSH_PASS = credentials('qword-development-root-password')
        PROJECT_LOCATION = 'front-end/seafarer-client'
        SSH_COMMAND = 'ssh root@103.102.153.44'
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
            when {
                branch 'master'
            }
            environment{
                BRANCH = 'master'
                GO_DIR = 'cd /home/production/${PROJECT_LOCATION}; ls -l;'
            }
            steps{
                sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${GO_DIR} git pull origin ${BRANCH};"'
                sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${GO_DIR} docker-compose up -d --build;"'
                sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "docker image prune -f;"'
            }
        }
        // --------------------------------------------------------------------------- //

    }

}