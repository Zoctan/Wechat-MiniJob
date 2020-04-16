const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    certificate: null,
    certificateError: false,
    time: 0,
    displayTime: '请选择'
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
  // 证书/奖项名称
  onCertificateChange: function(e) {
    this.setData({
      certificateError: util.isEmpty(e.detail.value),
      certificate: e.detail.value
    })
  },
  onCertificateFocus: function(e) {
    this.setData({
      certificateError: util.isEmpty(e.detail.value)
    })
  },
  onCertificateBlur: function(e) {
    this.setData({
      certificateError: util.isEmpty(e.detail.value)
    })
  },
  onCertificateClear: function(e) {
    this.setData({
      certificateError: true,
      certificate: null
    })
  },
  onCertificateError: function() {
    wx.showModal({
      title: '请输入证书/奖项名称',
      showCancel: false
    })
  },
  // 获得时间
  onTimeConfirm: function() {
    this.setData({
      displayTime: e.detail.label,
      time: e.detail.label
    })
  }
})