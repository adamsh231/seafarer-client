pipeline{
    agent any

    triggers {
        githubPush()
    }

    environment{
        PROJECT_NAME = 'seafarer-client'
        PROJECT_LOCATION = '/front-end/seafarer-client'
        TELEGRAM_BOT_TOKEN = credentials('telegram-bot-token')
        TELEGRAM_GROUP_CHAT_ID = credentials('telegram-group-chat-id')
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
                sh  'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=markdown -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="${GIT_AUTHOR_NAME} has started building, *${PROJECT_NAME}* on branch *${GIT_BRANCH}*"'
                // sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ${LIST}; git pull origin ${BRANCH};"'
                // sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "${BRANCH_DIR}${PROJECT_LOCATION}; ${LIST}; docker-compose up -d --build;"'
                // sh  'sshpass -p ${SSH_PASS} ${SSH_COMMAND} "docker image prune -f;"'
            }
            post{
                success{
                    sh  'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=markdown -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="*${PROJECT_NAME}* on branch *${BRANCH}* is up!"'
                }
                failure{
                    sh  'curl -s -X POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=markdown -d chat_id=${TELEGRAM_GROUP_CHAT_ID} -d text="Failed build *${PROJECT_NAME}* on branch *${BRANCH}*"'
                }
            }
        }
        // --------------------------------------------------------------------------- //

    }

}