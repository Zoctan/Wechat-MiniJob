const app = getApp()
const util = require('../../../utils/util.js')
const share = require('../../../utils/share.js')
const positionApi = require('../../../api/position.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 搜索框值
    searchValue: null,
    // 职位列表
    positionList: [],
    // 加载
    loading: false,
    // 没有数据
    noData: false,
    // 下一页页码
    nextPage: 0,
    listQuery: {
      page: 1, // 页码
      size: 4 // 每页数量
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getPositionList(options.positionId)
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
    const that = this
    that.setData({
      loading: true
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(e) {
    return share.getDefault()
  },
  /**
   * 搜索框
   */
  onSearchChange(e) {
    console.log('onSearchChange', e)
    this.setData({
      searchValue: e.detail.value
    })
  },
  onSearchFocus(e) {
    console.log('onSearchFocus', e)
  },
  onSearchBlur(e) {
    console.log('onSearchBlur', e)
  },
  onSearchConfirm(e) {
    console.log('onSearchConfirm', e)
  },
  onSearchClear(e) {
    console.log('onSearchClear', e)
    this.setData({
      searchValue: null
    })
  },
  onSearchCancel(e) {
    console.log('onSearchCancel', e)
    this.setData({
      searchValue: null
    })
  },
  /**
   * 筛选
   */
  onFilterConfirm: function(e) {
    console.info(e)
  },
  /**
   * 职位列表
   */
  getPositionList() {
    const that = this
    that.setData({
      loading: true
    })
    setTimeout(function() {
      that.setData({
        loading: false
      })
      that.setData({
        positionList: [{
            name: '前端开发工程师',
            isUrgent: false,
            salaryNegotiated: true,
            workCity: '广州市',
            workYearLabel: '1-3年',
            workYearValue: '7:3',
            educationLabel: '本科',
            educationValue: '4:3',
            typeLabel: '全职',
            typeValue: '2:1',
            createTime: 1517149966000,
            company: {
              logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/j08d.jpg',
              name: '美的集团广州分公司'
            },
          },
          {
            name: 'UI',
            isUrgent: true,
            salaryNegotiated: false,
            salaryLowest: 15,
            salaryHighest: 20,
            workCity: '广州市',
            workYearLabel: '3-5年',
            workYearValue: '7:4',
            educationLabel: '本科',
            educationValue: '4:3',
            typeLabel: '全职',
            typeValue: '2:1',
            createTime: 1568015756000,
            company: {
              logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/3fey.png',
              name: '宝洁(中国)有限公司总部'
            },
          }
        ]
      })
      if (that.data.nextPage === 0 && that.data.positionList.length === 0) {
        that.setData({
          noData: true
        })
      }
    }, 1000)
  }
})