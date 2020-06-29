// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/resumeDetails/resumeOne",
      iconPath: "/img/icon_component.png",
      selectedIconPath: "/img/icon_component_HL.png",
      text: "基本信息"
    }, {
      pagePath: "/pages/resumeDetails/resumeTwo",
      iconPath: "/img/icon_API.png",
      selectedIconPath: "/img/icon_API_HL.png",
      text: "专业技能"
    },{
      pagePath: "/pages/resumeDetails/resumeThree",
      iconPath: "/img/icon_API.png",
      selectedIconPath: "/img/icon_API_HL.png",
      text: "项目经验"
    }]
  

  },
  switchTab:function(e) {
    const data = e.currentTarget.dataset
    const url = data.path
    wx.switchTab({url})
    console.log(e)
    switch (data.index){
      case 0:
        wx.setNavigationBarTitle({
          title: '基本信息'
        })
        break;
      case 1:
        wx.setNavigationBarTitle({
          title: '专业技能'
        })
        break;
      case 2:
        wx.setNavigationBarTitle({
          title: '项目经历'
        })
        break;
      
    }
    

    this.setData({
      selected: data.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})