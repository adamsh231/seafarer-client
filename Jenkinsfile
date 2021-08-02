pipeline{
    agent any

    triggers {
        githubPush()
    }

    stages{
        stage("build"){
            steps{
                echo "========executing build========"
            }
        }
        stage("build-2"){
            steps{
                echo "========executing build========"
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