pipeline{
    agent any

    triggers {
        githubPush()
    }

    stages{
        stage("build-1"){
            steps{
                echo "========executing build-1========"
            }
        }
        stage("build-2"){
            steps{
                echo "========executing build-2========"
            }
        }
        stage("deploy"){
            steps{
                echo "========executing deploy========"
            }
        }
        stage("prune"){
            steps{
                echo "========executing prune========"
            }
        }
    }
}