pipeline{
    agent any

    triggers {
        githubPush()
    }

    stages{
        stage("prepare"){
            steps{
                sh 'apt-get update'
                sh 'apt install sshpass'
                sh  """
                        sshpass -p dayung231 ssh root@103.102.153.44 
                        '
                            cd /home/production/front-end/seafarer-client \
                            ls -l
                        '
                    """
            }
        }
        stage("build"){
            steps{
                echo "docker-compose up -d --build"
            }
        }
        stage("after"){
            steps{
                echo "docker image prune"
            }
        }
    }
}