// pages/resumeDetails/resumeTwo.js
Component({
  data:{
    projects:[{
      projectName:'杨森-前腺关爱家园',
      projectTime:'2020.04 至 2020.06',
      projectDes:'给前列腺患者做一个PEP平台，进行病程管理和当前病情报告分析、及病情相关科普知识推荐阅读、病人的一个跟随治疗提醒',
      projectRole:'Web前端Leader',
      projectResp:'1、 参与业务讨论设计 2、参与UX设计方案讨论 3、参与UI设计方案讨论 4、根据UI图评估前端开发工作量人天 5、按照项目计划制定前端开发计划 6、管理前端开发进度 7、技术指导及组织难点攻克',
      projectSkill:'项目管理、HTML/CSS'

    },{
      projectName:'戴姆勒数字化产品信息平台',
      projectTime:'2020.02 至 2020.06',
      projectDes:'该平台涵盖已上市及新上市车型的信息，如设备列表、设备描述、技术数据、产品亮点、图片等。功能包括对于车型信息的录入，审批，发布，查询，下载，管理。该平台主要面向内部用户，如市场、公关、销售、售后等部门。目前有超过190位内部用户。',
      projectRole:'Web前端开发',
      projectResp:'1、 与业务同事沟通确认需求及UI原型 2、按照需求及UI原型设计进行前端开发 3、依据需求与后端同事讨论接口设计 4、前端页面开发&对接后端接口联调 5、按照需求及UI原型自测',
      projectSkill:'：Vue框架、ElementUI组件、HTML/CSS、Vue调试'

    },
    {
      projectName:'沈阳宝马过程能力工厂APP',
      projectTime:'2019.09 至 2020.01',
      projectDes:'过程能力工厂APP是属于沈阳宝马Joychat APP内部一个子应用，该APP实现人工智能监控、实时大数据分析、不良趋势预警和质量报告自动化输出。',
      projectRole:'项目经理&Leader',
      projectResp:'1、 收集需求 (客户方立项完,需求还不明确,需要收集干系人的需求) 2、 需求讨论 3、方案讨论4、制定项目计划和详细的开发计划 5、深度利用敏捷开发流程执行项目，包括写项目计划引入敏捷场景元素的图片，整个项目的进度管理工具jira的使用、开发运维一体化的自动构建工具Jenkins与Gitlab代码管理工具形成持续集成开发测试环境 6、本地电脑搭建Redmine系统来进行bug追踪',
      projectSkill:'项目管理、Vue、Vant、Springboot、技术Leader、jira、Jenkins、Gitlab、Redmine'

    },
    {
      projectName:'沈阳宝马汽车生产系统自动化运维平台',
      projectTime:'2019.05 至 2019.09',
      projectDes:'此平台主要分单个系统执行和多个系统流执行，可以一次维护单个系统或多个系统同时维护，进行远程系统检测或相关程序安装等等远程自动化操作。',
      projectRole:'Python开发/Java开发',
      projectResp:'1、 使用Django框架及ansible库开发Python接口供Java端调用，在远程服务器上执行脚本 2、 使用Springboot开发java接口供Vue前端调用 3、 python与java联调 4、 java与vue联调',
      projectSkill:'Python、Django、Ansible、Java、Springboot、Jira、Jenkins'

    },
    {
      projectName:'五粮液战区补商计划平台',
      projectTime:'2019.01 至 2019.04',
      projectDes:'收录信息及审批信息平台，短时间内解决客户无法及时收集到各个战区补商信息情况的痛点，促使客户能顺利进行战区的补商计划',
      projectRole:'全栈开发',
      projectResp:'1、 一个人完成一个小系统 2、 从前端vue到后端springboot、再到数据库mysql，独立开发独立联调测试 3、 总共5个前端页面、12后端接口、2张表;一共经历10天左右前后完成sit和生产上线',
      projectSkill:'Vue、Element-UI、Java、Springboot、Mysql、Navicat for MySQL'
    },
    {
      projectName:'伊利大数据平台',
      projectTime:'2018.08 至 2018.12',
      projectDes:'实现伊利的数据可视化平台，包括不限于成本、费用、会员相关的数据进行建模统计输出到前端可视化展示报表',
      projectRole:'Web前端开发',
      projectResp:'1、 使用vue/v-charts开发各种数据报表 2、 把SQL语句放入到NodeJS后端框架程序中，然后联调接口调试报表',
      projectSkill:'vue、v-charts'

    },
    {
      projectName:'上海通用汽车一站式服务平台',
      projectTime:'2017.12 至 2018.08',
      projectDes:'打通主机⼚、经销商、终端⽤户的活动发布、选⻋购⻋流程，并对接在线⽀付、保险购买等功能',
      projectRole:'Web前端开发/Java后端开发',
      projectResp:'1、 前期从事Angular前端开发任务 2、 中期由于后端任务重及人员调整，从事Java后端开发任务3、 中后期任务完成进度正常及人员充沛，兼职协助Leader管理团队',
      projectSkill:'Angular、Java、Springboot、项目管理、Leader助理'

    },
    {
      projectName:'平安口袋银行APP',
      projectTime:'2015.07 至 2017.12',
      projectDes:'平安口袋银行APP是平安银行专为手机端使用用户全新推出的移动金融服务平台,通过它,你可以随时随地掌控自己的金融资产。新颖时尚的设计风格，简洁易用的操作界面，让移动银行体验更具创意，新鲜有趣。全程通讯加密，保障信息安全。',
      projectRole:'Android 前端开发',
      projectResp:'1、 参与平安口袋银行2.0到3.0的升级改造项目 2、负责平安口袋银行APP的每月需求迭代开发及bug处理，发版上线 3、负责平安口袋银行APP的消息推送模块、OCR模块、人脸识别模块接入及相应APP自身页面调整开发和联调 4、负责Jenkins平台，处理日常自动化构建发版报错问题，维护相关脚本 5、负责从TOP前几位的应用市场收集APP评论，提取问题中关键字，并对相关版本自测确认问题，并跟进处理；后期自学python研发出自动化爬虫各大应用市场的评论信息及自动提取关键字统计结果。 6、负责平安口袋银行APP离线缓存核心模块的设计开发与维护工作。 7、负责平安口袋银行APP的性能优化工作。 8、参与平安口袋银行APP的埋点设计与开发联调。',
      projectSkill:'Android、Python爬虫'

    },
    {
      projectName:'TCL智能平板电视APP系列',
      projectTime:'2011.10 至 2015.06',
      projectDes:'TCL智能平板电视(Android定制系统）中可安装使用的APP系列，包括主界面APP、浏览器APP、应用商城APP、多屏互动APP等的开发及维护工作',
      projectRole:'Android 前端开发',
      projectResp:'1、 参与项目的前期需求讨论 2、参与UI评审 3、需求概要设计文档编写、需求详细设计文档编写及文档评审 4、参与开发 5、主界面APP、多屏互动APP中属于项目管理角色',
      projectSkill:'Android'

    }]

  },
  pageLifetimes: {
    show() {
      console.log('aaaaa')
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        var width = wx.getSystemInfoSync().windowWidth
        var height = wx.getSystemInfoSync().windowHeight
        this.setData({
          width: width,
          height: height
        })
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  }

})