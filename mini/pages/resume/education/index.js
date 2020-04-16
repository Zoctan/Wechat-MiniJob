const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    school: null,
    schoolError: false,
    major: null,
    majorError: false,
    qualification: null,
    qualificationError: false,
    startTime: 0,
    displayStartTime: '请选择',
    endTime: 0,
    displayEndTime: '请选择',
    isReading: null,
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
  // 学校名称
  onSchoolChange: function(e) {
    this.setData({
      schoolError: util.isEmpty(e.detail.value),
      school: e.detail.value
    })
  },
  onSchoolFocus: function(e) {
    this.setData({
      schoolError: util.isEmpty(e.detail.value)
    })
  },
  onSchoolBlur: function(e) {
    this.setData({
      schoolError: util.isEmpty(e.detail.value)
    })
  },
  onSchoolClear: function(e) {
    this.setData({
      schoolError: true,
      school: null
    })
  },
  onSchoolError: function() {
    wx.showModal({
      title: '请输入学校名称',
      showCancel: false
    })
  },
  // 专业名称
  onMajorChange: function(e) {
    this.setData({
      majorError: util.isEmpty(e.detail.value),
      major: e.detail.value
    })
  },
  onMajorFocus: function(e) {
    this.setData({
      majorError: util.isEmpty(e.detail.value)
    })
  },
  onMajorBlur: function(e) {
    this.setData({
      majorError: util.isEmpty(e.detail.value)
    })
  },
  onMajorClear: function(e) {
    this.setData({
      majorError: true,
      major: null
    })
  },
  onMajorError: function() {
    wx.showModal({
      title: '请输入专业名称',
      showCancel: false
    })
  },
  // 学历名称
  onQualificationChange: function(e) {
    this.setData({
      qualificationError: util.isEmpty(e.detail.value),
      qualification: e.detail.value
    })
  },
  onQualificationFocus: function(e) {
    this.setData({
      qualificationError: util.isEmpty(e.detail.value)
    })
  },
  onQualificationBlur: function(e) {
    this.setData({
      qualificationError: util.isEmpty(e.detail.value)
    })
  },
  onQualificationClear: function(e) {
    this.setData({
      qualificationError: true,
      qualification: null
    })
  },
  onQualificationError: function() {
    wx.showModal({
      title: '请输入学历名称',
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
  // 是否在读
  onIsReadingChange: function(e) {
    this.setData({
      isReading: e.detail.value
    })
  },
  // 教育描述
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
      title: '请输入教育描述',
      showCancel: false
    })
  }
})