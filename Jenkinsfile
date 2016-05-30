properties([
    [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10']],
    [$class: 'ParametersDefinitionProperty', parameterDefinitions: [
      [$class: 'ChoiceParameterDefinition', choices: 'yes\nno', name: 'Checkout_and_Test'],
      [$class: 'ChoiceParameterDefinition', choices: 'yes\nno', name: 'Build_and_Push_Image'],
      [$class: 'ChoiceParameterDefinition', choices: 'yes\nno', name: 'Deploy_Dev'],
      [$class: 'ChoiceParameterDefinition', choices: 'no\nyes', name: 'Deploy_Prod']
      ]
    ]
  ])

node('reportingsrv') {
  ws('testplatform') {

    if ( Checkout_and_Test == "yes" ) {
      stage 'Checkout'
      git url: 'https://github.com/AlfrescoTestAutomation/test-platform.git'
    }
    docker.withRegistry('https://alfness:5000') {

    if ( Build_and_Push_Image == "yes" ) {
      stage 'Build docker Image'
      def newImage = docker.build('test-platform/frontend:latest')

      stage 'Push latest tag'
      newImage.push(['latest'])
    }

    if ( Deploy_Dev == "yes" ) {
      stage 'Deploy Dev'
      sh 'docker ps -f "name=frontend-dev" -q | while read line; do docker stop "$line"; docker rm "$line"; done'
      sh 'docker ps -alf "name=frontend-dev" -q | while read line; do docker stop "$line"; docker rm "$line"; done'
      def devContainer =
          docker.image('alfness:5000/test-platform/frontend:latest')
          .run('-p 8080:8080 \
              --name frontend-dev \
              -e "SERVICE_NAME=Test-Dashboard-DEV" \
              -e "SERVICE_ID=repsrv:frontend-dev:8080" \
              -e "SERVICE_8080_CHECK_HTTP=/" \
              -e "SERVICE_CHECK_INTERVAL=120s" \
              -e \"REPORTING_URL=http://172.29.102.94:9100\"')
      echo devContainer.id
    }

    if ( Deploy_Prod == "yes" ) {
      stage 'Deploy Prod'

      sh 'docker ps -f "name=frontend-prod" -q | while read line; do docker stop "$line"; docker rm "$line"; done'
      sh 'docker ps -alf "name=frontend-prod" -q | while read line; do docker stop "$line"; docker rm "$line"; done'
      def prodContainer =
          docker.image('alfness:5000/test-platform/frontend:latest')
          .run('-p 8000:8080 \
          --name frontend-prod \
          -e "SERVICE_NAME=Test-Dashboard-PROD" \
          -e "SERVICE_ID=repsrv:frontend-prod:8000" \
          -e "SERVICE_8000_CHECK_HTTP=/" \
          -e "SERVICE_CHECK_INTERVAL=120s" \
          -e \"REPORTING_URL=http://172.29.102.94:9000\"')
      echo prodContainer.id
    }
    }
  }
}
