pipeline{
    agent any

    triggers {
        githubPush()
    }

    stages{
        stage("build"){
            steps{
                echo "========executing kimochi========"
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