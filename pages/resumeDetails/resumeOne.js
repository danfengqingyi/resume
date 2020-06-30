// pages/resumeDetails/resumeOne.js
Component({
  data: {
    name: '卢浩然',
    sex: '男',
    position: '前端工程师',
    telephone: '13545357660',
    mail: 'haoran6lu@163.com',
    width: 0,
    height: 0,
    workinfos: [{
      id: 1,
      company: 'IBM',
      time: '2015.07 至今',
      curposition: 'Application Consultant',
      responsibility: '给客户提供软件服务;包括不限于提供解决方案、软件实施管理、软件开发'

    }, {
      id: 2,
      company: 'TCL',
      time: '2011.10 至 2015.06',
      curposition: '开发小组长',
      responsibility: "2011-10至2014-06 期间主要是负责公司的智能平板电视上的Androidapp开发;      2014-07至2015-07 期间主要是负责应用所下主界面开发组中6人左右的小组的开发管理工作"

    }],
    educations: [{
      id: 1,
      school: '华中农业大学',
      degree: '本科',
      time: '2007.09-2011.06',
      major: '信息与计算科学'

    }],
    certificates:[
      {
        name:'全日制学士学位',
        time:'2011.06 至 永久有效'

      },
      {
        name:'全国英语四级证书',
        time:'2009.06 至 永久有效'

      },
      {
        name:'PMP项目管理资格认证',
        time:'2017.09 至 2020.08'

      },   
      {
        name:'TCL研发中心优秀员工',
        time:'2013.01 至 2013.12'

      }
    ],
    evaluate: '持有PMP项目管理资格认证证书，并具有实际的项目管理经验。良好的协调沟通能力，适应性强，抗压力强。具有丰富的web、app项目开发经验，所涉及的技术领域包括不限于前端vue、Angular、HTML、CSS、后端Springboot、python端Django、手机端Android、数据库(mysql、oracle) 使用、Linux系统(Ubuntu18.04) 操作、Devops实战。对产品创新以及web、app的体验有一定的认识，思维活跃，奇思妙想。'
  },
  methods: {
    upper(e) {

    },

    lower(e) {

    },

    scroll(e) {
  
    },

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
          selected: 0
        })
      }
    }
  }
})