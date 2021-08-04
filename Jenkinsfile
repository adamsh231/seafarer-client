pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        PROJECT_LOCATION = '/front-end/seafarer-client'
        TELEGRAM_BOT_TOKEN = credentials('telegram-bot-token')
        TELEGRAM_GROUP_CHAT_ID = credentials('telegram-group-chat-id')
        SSH_PASS = credentials('qword-development-root-password')
        SSH_COMMAND = 'ssh root@103.102.153.44'
        AUTHOR_NAME = sh (
            script: "git show -s --pretty=%an",
            returnStdout: true
        ).trim()
    }

    stages{

        // -------------------------------- Master ----------------------------------- //
        stage("build-master"){
            when {
                branch 'master'
            }
            environment{
                BRANCH_DIR = 'cd /home/production'
            }
            steps{
                sh 'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=html -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="Build started by <b>${AUTHOR_NAME}</b> \'\xF0\x9F\x9A\x80\' %0A%0A<b>${JOB_NAME}</b> - ${BUILD_DISPLAY_NAME} %0A%0A(<a href=\'${BUILD_URL}console\'>Open</a>)"'
                // sh 'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ls -l; git pull origin ${GIT_BRANCH};"'
                // sh 'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ls -l; docker-compose up -d --build;"'
                // sh 'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "docker image prune -f;"'
            }
            post{
                success{
                    sh 'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=html -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="Successfully build %0A%0A<b>${JOB_NAME}</b> - ${BUILD_DISPLAY_NAME} %0A%0A(<a href=\'${BUILD_URL}console\'>Open</a>)"'
                }
                failure{
                    sh 'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=html -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="Failed to build %0A%0A<b>${JOB_NAME}</b> - ${BUILD_DISPLAY_NAME} %0A%0A(<a href=\'${BUILD_URL}console\'>Open</a>)"'
                }
            }
        }
        // --------------------------------------------------------------------------- //

    }

}