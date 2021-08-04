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
                sh 'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=html -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="<b>${JOB_NAME}</b> - ${BUILD_DISPLAY_NAME} Started building %0A (<a href=\'${BUILD_URL}console\'>Open</a>)"'
                // sh 'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ls -l; git pull origin ${GIT_BRANCH};"'
                // sh 'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ls -l; docker-compose up -d --build;"'
                // sh 'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "docker image prune -f;"'
            }
            post{
                success{
                    sh 'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=html -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="<b>${JOB_NAME}</b> - ${BUILD_DISPLAY_NAME} Build Success!"'
                }
                failure{
                    sh 'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=html -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="<b>${JOB_NAME}</b> - ${BUILD_DISPLAY_NAME} Build Failure!"'
                }
            }
        }
        // --------------------------------------------------------------------------- //

    }

}