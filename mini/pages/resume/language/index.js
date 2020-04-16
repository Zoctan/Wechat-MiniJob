const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    language: null,
    languageError: false,
    level: null,
    displayLevel: '请选择',
    levels: [{
        value: '1',
        label: '初级（入门）'
      },
      {
        value: '2',
        label: '中级（日常会话）'
      },
      {
        value: '3',
        label: '中高级（商务会话）'
      },
      {
        value: '4',
        label: '高级（无障碍商务沟通）'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 语种
  onLanguageChange: function(e) {
    this.setData({
      languageError: util.isEmpty(e.detail.value),
      language: e.detail.value
    })
  },
  onLanguageFocus: function(e) {
    this.setData({
      languageError: util.isEmpty(e.detail.value)
    })
  },
  onLanguageBlur: function(e) {
    this.setData({
      languageError: util.isEmpty(e.detail.value)
    })
  },
  onLanguageClear: function(e) {
    this.setData({
      languageError: true,
      language: null
    })
  },
  onLanguageError: function() {
    wx.showModal({
      title: '请输入语种',
      showCancel: false
    })
  },
  // 掌握程度
  onLevelConfirm: function(e) {
    this.setData({
      displayLevel: e.detail.label,
      level: e.detail.label
    })
  },
})