const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    position: null,
    positionError: false,
    type: null,
    displayType: '请选择',
    types: [{
        value: '1',
        label: '全职'
      },
      {
        value: '2',
        label: '兼职'
      },
      {
        value: '3',
        label: '实习'
      }
    ],
    region: [],
    customRegion: '全部',
    salaryLowest: null,
    salaryHighest: null
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
  /**
   * 职位
   */
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
      title: '请输入职位',
      showCancel: false
    })
  },
  /**
   * 工作类型
   */
  onTypeConfirm: function(e) {
    this.setData({
      displayType: e.detail.label,
      type: e.detail.label
    })
  },
  /**
   * 期望城市
   */
  onRegionChange: function(e) {
    console.info(e)
    this.setData({
      region: e.detail.region
    })
  },
  /**
   * 工资
   */
  onSalaryLowestChange: function(e) {
    this.setData({
      salaryLowest: e.detail.value
    })
  },
  onSalaryHighestChange: function(e) {
    this.setData({
      salaryHighest: e.detail.value
    })
  }
})