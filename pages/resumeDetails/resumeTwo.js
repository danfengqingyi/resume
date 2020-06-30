// pages/resumeDetails/resumeTwo.js
Component({
  data:{
    skills:[{
      skillName:'Web前端开发',
      skillDetail:'HTML5、CSS3、JS、Vue、Angular、JQuery、JQuery-WeUI、Element-UI、Vant Weapp、Vant'

    },{
      skillName:'移动端前端开发',
      skillDetail:'Android、Java'

    },
    {
      skillName:'后端开发',
      skillDetail:'Java、SpringBoot'

    },
    {
      skillName:'Python开发',
      skillDetail:'Python、Django、Ansible'
    },
    {
      skillName:'项目管理',
      skillDetail:'PMP项目管理'
    },
    {
      skillName:'开发工具',
      skillDetail:'VSCode、Webstorm、eclipse、AndroidStudio、postman、Navicat for MySQL、MindMaster、Beyond Compare、微信开发者工具、Git、SVN、WebPack、NPM、Excel、PowerPoint'
    },
    {
      skillName:'Devops',
      skillDetail:'Jira、Jenkins、Git、禅道、Redmine、Agile'
    }]

  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        var width = wx.getSystemInfoSync().windowWidth
        var height = wx.getSystemInfoSync().windowHeight
        this.setData({
          width: width,
          height: height
        })
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  }

})