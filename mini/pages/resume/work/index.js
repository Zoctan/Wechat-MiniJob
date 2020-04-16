const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    company: null,
    companyError: false,
    position: null,
    positionError: false,
    department: null,
    departmentError: false,
    startTime: 0,
    displayStartTime: '请选择',
    endTime: 0,
    displayEndTime: '请选择',
    isWorking: false,
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
  // 公司名称
  onCompanyChange: function(e) {
    this.setData({
      companyError: util.isEmpty(e.detail.value),
      company: e.detail.value
    })
  },
  onCompanyFocus: function(e) {
    this.setData({
      companyError: util.isEmpty(e.detail.value)
    })
  },
  onCompanyBlur: function(e) {
    this.setData({
      companyError: util.isEmpty(e.detail.value)
    })
  },
  onCompanyClear: function(e) {
    this.setData({
      companyError: true,
      company: null
    })
  },
  onCompanyError: function() {
    wx.showModal({
      title: '请输入公司名称',
      showCancel: false
    })
  },
  // 职位名称
  onPositionChange: function(e) {
    this.setData({
      positionError: util.isEmpty(e.detail.value),
      position: e.detail.value
    })
  },
  onPositionFocus: function(e) {
    this.setData({
      positionError: util.isEmpty(e.detail.value)
    })
  },
  onPositionBlur: function(e) {
    this.setData({
      positionError: util.isEmpty(e.detail.value)
    })
  },
  onPositionClear: function(e) {
    this.setData({
      positionError: true,
      position: null
    })
  },
  onPositionError: function() {
    wx.showModal({
      title: '请输入职位名称',
      showCancel: false
    })
  },
  // 部门名称
  onDepartmentChange: function(e) {
    this.setData({
      departmentError: util.isEmpty(e.detail.value),
      department: e.detail.value
    })
  },
  onDepartmentFocus: function(e) {
    this.setData({
      departmentError: util.isEmpty(e.detail.value)
    })
  },
  onDepartmentBlur: function(e) {
    this.setData({
      departmentError: util.isEmpty(e.detail.value)
    })
  },
  onDepartmentClear: function(e) {
    this.setData({
      departmentError: true,
      department: null
    })
  },
  onDepartmentError: function() {
    wx.showModal({
      title: '请输入部门名称',
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
  // 是否在职
  onIsWorkingChange: function(e) {
    this.setData({
      isWorking: e.detail.value
    })
  },
  // 工作描述
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
      title: '请输入工作描述',
      showCancel: false
    })
  }
})