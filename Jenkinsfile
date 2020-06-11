import java.text.SimpleDateFormat
node {
    try{
        def dockerNamespace='18524637652'
        def dockerName='hello-world'
        //环境配置，没有使用vue自带的环境配置，自定义了一个js存放服务器地址，参考下一节
        def env='test'
        
        def dateFormat = new SimpleDateFormat("yyyyMMddHHmm")
        def dockerTag = dateFormat.format(new Date())
        
        stage('Git pull'){
            sh 'pwd'
            git credentialsId: '00a34c6f-043f-47cc-86ec-64172bdef13c', url: 'https://github.com/Lyh97/hello-word.git'
        }
        stage('Npm run build') {
            docker.image('node:14.4.0').inside {
                sh 'node --version'
                sh 'npm --version'
                //sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Docker build') {
            sh 'pwd'
            sh 'ls'
            def imageUrl = "${dockerNamespace}/${dockerName}:${dockerTag}"
            def customImage = docker.build(imageUrl)
            sh "docker rm -f ${dockerName} | true"
            customImage.run("-it -p 8080:80 --name ${dockerName} -e env=${env}")
            //only retain last 3 images
            sh """docker rmi \$(docker images | grep ${dockerName} | sed -n  '4,\$p' | awk '{print \$3}') || true"""
        }
        currentBuild.result="SUCCESS"
    }catch (e) {
        currentBuild.result="FAILURE"
        throw e
    } finally {
        //发布邮件，请自行配置Jenkins邮件服务，不发送直接删除
        mail to: 'xxx@qq.com',subject: "Jenkins: ${currentBuild.fullDisplayName}，${currentBuild.result}",body:"${currentBuild.result}"
    }
}