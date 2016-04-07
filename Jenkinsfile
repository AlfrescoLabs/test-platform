node('reportingsrv') {
  ws('testplatform') {
    stage 'Checkout'
    git url: 'https://github.com/AlfrescoTestAutomation/test-platform.git'

    stage 'Install'
    sh 'npm install'

    docker.withRegistry('https://alfness:5000') {
      stage 'Build docker Image'
      def newImage = docker.build('test-platform/frontend:latest')

      stage 'Push latest tag'
      newImage.push(['latest'])

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
              -e "SERVICE_CHECK_INTERVAL=15s" \
              -e \"REPORTING_URL=http://172.29.102.94:9100\"')
      echo devContainer.id

      stage 'Promote to Prod?'
      input 'Do you want to deploy on prod?'

      sh 'docker ps -f "name=frontend-prod" -q | while read line; do docker stop "$line"; docker rm "$line"; done'
      sh 'docker ps -alf "name=frontend-prod" -q | while read line; do docker stop "$line"; docker rm "$line"; done'
      def prodContainer =
          docker.image('alfness:5000/test-platform/frontend:latest')
          .run('-p 80:8080 \
          --name frontend-prod \
          -e "SERVICE_NAME=Test-Dashboard-PROD" \
          -e "SERVICE_ID=repsrv:frontend-prod:80" \
          -e "SERVICE_CHECK_HTTP=/" \
          -e "SERVICE_CHECK_INTERVAL=15s" \
          -e \"REPORTING_URL=http://172.29.102.94:9000\"')
      echo prodContainer.id

    }
  }
}
