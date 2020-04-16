const app = getApp()
const util = require('../../../utils/util.js')
const collectApi = require('../../../api/collect.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    noData: false,
    loading: false,
    collectList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCollectList()
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
  getCollectList: function() {
    const that = this
    that.setData({
      loading: true,
      noData: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        noData: false,
        collectList: [{
            id: 1,
            company: {
              id: 1,
              name: '美的集团',
              logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/j08d.jpg'
            },
            positionList: [{
              id: 1,
              name: '大数据研究员',
              location: '深圳',
              typeLabel: '全职',
              isUrgent: false,
              salaryNegotiated: false,
              salaryLowest: '12',
              salaryHighest: '20',
              createTime: '2019-01-12',
              visit: 12312
            }, {
              id: 2,
              name: '人工智能研究员',
              location: '深圳',
              typeLabel: '全职',
              isUrgent: false,
              salaryNegotiated: true,
              createTime: '2019-03-12',
              visit: 56347
            }]
          },
          {
            id: 2,
            company: {
              id: 2,
              name: '宝洁(中国)有限公司总部',
              logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/3fey.png'
            },
            positionList: [{
              id: 3,
              name: '工控智能工程师',
              location: '广州',
              typeLabel: '全职',
              isUrgent: false,
              salaryNegotiated: false,
              salaryLowest: '8',
              salaryHighest: '12',
              createTime: '2019-11-16',
              visit: 85654
            }, {
              id: 4,
              name: '工控芯片工程师',
              location: '广州',
              typeLabel: '全职',
              isUrgent: true,
              salaryNegotiated: false,
              salaryLowest: '16',
              salaryHighest: '30',
              createTime: '2019-08-23',
              visit: 75643
            }]
          }
        ]
      })
    }, 1000)
  },
  /**
   * 取消收藏
   */
  onCancelCollect: function() {
    wx.showModal({
      title: '警告',
      content: '确定取消收藏该职位？',
      success: (res) => {
        if (res.confirm) {

        }
      }
    })
  }
})