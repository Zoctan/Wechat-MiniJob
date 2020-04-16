const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    nameError: false,
    site: null,
    siteError: false,
    description: null,
    descriptionError: false
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
  // 作品名称
  onNameChange: function(e) {
    this.setData({
      nameError: util.isEmpty(e.detail.value),
      name: e.detail.value
    })
  },
  onNameFocus: function(e) {
    this.setData({
      nameError: util.isEmpty(e.detail.value)
    })
  },
  onNameBlur: function(e) {
    this.setData({
      nameError: util.isEmpty(e.detail.value)
    })
  },
  onNameClear: function(e) {
    this.setData({
      nameError: true,
      name: null
    })
  },
  onNameError: function() {
    wx.showModal({
      title: '请输入作品名称',
      showCancel: false
    })
  },
  // 作品名称
  onSiteChange: function(e) {
    this.setData({
      siteError: util.isEmpty(e.detail.value),
      site: e.detail.value
    })
  },
  onSiteFocus: function(e) {
    this.setData({
      siteError: util.isEmpty(e.detail.value)
    })
  },
  onSiteBlur: function(e) {
    this.setData({
      siteError: util.isEmpty(e.detail.value)
    })
  },
  onSiteClear: function(e) {
    this.setData({
      siteError: true,
      site: null
    })
  },
  onSiteError: function() {
    wx.showModal({
      title: '请输入作品链接',
      showCancel: false
    })
  },
  // 作品描述
  onDescriptionChange: function(e) {
    this.setData({
      descriptionError: util.isEmpty(e.detail.value),
      description: e.detail.value
    })
  },
  onDescriptionFocus: function(e) {
    this.setData({
      descriptionError: util.isEmpty(e.detail.value)
    })
  },
  onDescriptionBlur: function(e) {
    this.setData({
      descriptionError: util.isEmpty(e.detail.value)
    })
  },
  onDescriptionClear: function(e) {
    this.setData({
      descriptionError: true,
      description: null
    })
  },
  onDescriptionError: function() {
    wx.showModal({
      title: '请输入作品描述',
      showCancel: false
    })
  }
})