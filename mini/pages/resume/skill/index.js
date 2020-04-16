const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    skill: null,
    skillError: false,
    level: 0
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
  onSkillChange: function(e) {
    this.setData({
      skillError: util.isEmpty(e.detail.value),
      skill: e.detail.value
    })
  },
  onSkillFocus: function(e) {
    this.setData({
      skillError: util.isEmpty(e.detail.value)
    })
  },
  onSkillBlur: function(e) {
    this.setData({
      skillError: util.isEmpty(e.detail.value)
    })
  },
  onSkillClear: function(e) {
    this.setData({
      skillError: true,
      skill: null
    })
  },
  onSkillError: function() {
    wx.showModal({
      title: '请输入技能',
      showCancel: false
    })
  },
  // 掌握程度
  onLevelChange: function(e) {
    console.info(e)
    this.setData({
      level: e.detail.value
    })
  }
})