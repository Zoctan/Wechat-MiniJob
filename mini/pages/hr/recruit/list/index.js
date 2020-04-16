const app = getApp()
const util = require('../../../../utils/util.js')
const hrApi = require('../../../../api/hr.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    noData: false,
    recruitList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getResumeList()
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
   * 简历列表
   */
  getResumeList() {
    const that = this
    that.setData({
      loading: true,
      noData: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        noData: false,
        recruitList: [{
            id: 1,
            position: {
              name: '大数据工程师'
            },
            resume: {
              id: 1,
              name: '曹操'
            },
            deliveryTime: '1570869490893'
          },
          {
            id: 2,
            position: {
              name: '机器学习工程师'
            },
            resume: {
              id: 2,
              name: '刘备'
            },
            deliveryTime: '1570549490893'
          }
        ]
      })
    }, 1000)
  }
})