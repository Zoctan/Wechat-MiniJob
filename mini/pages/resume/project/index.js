const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    project: null,
    projectError: false,
    startTime: 0,
    displayStartTime: '请选择',
    endTime: 0,
    displayEndTime: '请选择',
    isProcessing: null,
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
  // 项目名称
  onProjectChange: function(e) {
    this.setData({
      projectError: util.isEmpty(e.detail.value),
      project: e.detail.value
    })
  },
  onProjectFocus: function(e) {
    this.setData({
      projectError: util.isEmpty(e.detail.value)
    })
  },
  onProjectBlur: function(e) {
    this.setData({
      projectError: util.isEmpty(e.detail.value)
    })
  },
  onProjectClear: function(e) {
    this.setData({
      projectError: true,
      project: null
    })
  },
  onProjectError: function() {
    wx.showModal({
      title: '请输入项目名称',
      showCancel: false
    })
  },
  // 开始时间
  onStartTimeConfirm: function(e) {
    console.info(e)
    this.setData({
      displayStartTime: e.detail.label,
      startTime: e.detail.label
    })
  },
  // 结束时间
  onEndTimeConfirm: function(e) {
    console.info(e)
    this.setData({
      displayEndTime: e.detail.label,
      endTime: e.detail.label
    })
  },
  // 进行中
  onIsProcessingChange: function(e) {
    this.setData({
      isProcessing: e.detail.value
    })
  },
  // 项目描述
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
      title: '请输入项目描述',
      showCancel: false
    })
  }
})