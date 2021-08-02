pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        PROJECT_LOCATION = '/front-end/seafarer-client'
        SSH_PASS = credentials('qword-development-root-password')
        SSH_COMMAND = 'ssh root@103.102.153.44'
        LIST = 'ls -l'
    }

    stages{

        // -------------------------------- Master ----------------------------------- //
        stage("build-master"){
            when {
                branch 'master'
            }
            environment{
                BRANCH = 'master'
                BRANCH_DIR = 'cd /home/production'
            }
            steps{
                sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ${LIST}; git pull origin ${BRANCH};"'
                sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ${LIST}; docker-compose up -d --build;"'
                sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "docker image prune -f;"'
            }
        }
        // --------------------------------------------------------------------------- //

    }

}