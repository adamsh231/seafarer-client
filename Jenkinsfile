pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        PROJECT_LOCATION = 'front-end/seafarer-client'
        SSH_COMMAND = 'sshpass -p ${credentials("qword-development-root-password")} ssh root@103.102.153.44'
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
                GO_DIR = 'cd /home/production/${PROJECT_NAME}; ls -l;'
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