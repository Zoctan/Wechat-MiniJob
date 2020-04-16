const app = getApp()
const util = require('../../../utils/util.js')
const recordApi = require('../../../api/record.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    noData: false,
    loading: false,
    recordList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getRecordList()
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
   * 获取列表
   */
  getRecordList: function() {
    const that = this
    that.setData({
      loading: true,
      noData: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        noData: false,
        recordList: [{
          id: 1,
          position: {
            name: '大数据研究员'
          },
          company: {
            name: '美的集团'
          },
          list: [{
              id: 1,
              status: 'finish',
              title: '投递简历',
              content: '简历成功投递到公司邮箱',
              time: '2019-06-18'
            },
            {
              id: 2,
              status: 'finish',
              title: '面试',
              content: '通过面试',
              time: '2019-07-30'
            },
            {
              id: 3,
              status: 'finish',
              title: '试用期',
              content: '开始试用期',
              time: '2019-08-16'
            },
            {
              id: 4,
              status: 'error',
              title: '正式入职',
              content: '求职者主动放弃入职',
              time: '2019-10-12'
            }
          ]
        }, {
          id: 2,
          position: {
            name: '机器学习工程师'
          },
          company: {
            name: '格力电器'
          },
          list: [{
              id: 5,
              status: 'finish',
              title: '投递简历',
              content: '简历成功投递到公司邮箱',
              time: '2039-06-18'
            },
            {
              id: 6,
              status: 'process',
              title: '面试',
              content: '通过面试',
              time: '2039-07-30'
            }
          ]
        }]
      })
    }, 1000)
  }
})