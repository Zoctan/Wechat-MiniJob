const app = getApp()
const share = require('../../../utils/share.js')
const user = require('../../../utils/user.js')
const wechatApi = require('../../../api/wechat.js')
const noticeApi = require('../../../api/notice.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isHr: false,
    isAuth: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      isAuth: user.isAuth()
    })
    if (user.isAuth()) {
      user.getInfo(() =>
        this.setData({
          wechatInfo: app.globalData.wechatInfo
        })
      )
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (user.isAuth()) {
      wx.showNavigationBarLoading()
      user.getInfo(() => {
        this.setData({
          wechatInfo: app.globalData.wechatInfo
        })
        // 消息加载
        // todo
        noticeApi.list(() => {

        })
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
      })
    } else {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(e) {
    return share.getDefault()
  },

  /**
   * 未登录按钮
   */
  onLogin: function() {}
})