pipeline{
    agent any

    triggers {
        githubPush()
    }

    stages{
        stage("prepare"){
            steps{
                echo "git pull origin master"
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