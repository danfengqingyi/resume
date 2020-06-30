// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    weixin:'nxn0525',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /** 
   * 跳转到简历详情页面
  */
  dispath:function(){
    wx.switchTab({
      url: '../resumeDetails/resumeOne',
    })
    wx.setNavigationBarTitle({
      title: '基本信息'
    })

  },
  /**
   * 打电话
   */
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: '13545357660'
    })
  },
  /**
   * 加微信
   */
  copyWe(e){
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success (res) {
        wx.getClipboardData({
          success (res) {
            wx.showToast({
              title: '复制成功',
            })
          }
        })
      }
    })
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
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })


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