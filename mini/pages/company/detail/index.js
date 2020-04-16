const share = require('../../../utils/share.js')
const companyApi = require('../../../api/company.js')
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: null,
    company: null,
    positionList: [],
    lastPositionId: 0,
    loading: false,
    noPositionList: false,
    positionListLoading: false,
    noData: true,
    search: {
      page: 1, // 页码
      size: 4, // 每页数量
      positionName: null, // 职位名称
    },
    tabIndex: '1',
    isIntroductionOpen: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCompanyDetail()
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
    that.getCompanyDetail(() => {
      wx.stopPullDownRefresh()
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
   * 打电话
   */
  onCalled: function(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
    })
  },

  /**
   * 公司介绍 / 在招职位
   */
  switchTab: function(e) {
    const that = this
    console.info(e)
    const index = e.currentTarget.dataset.tab;
    if (index === '2') {
      that.setData({
        positionList: []
      })
      that.getPositionList()
    }
    that.setData({
      tabIndex: index
    })
  },
  downOrUp: function(e) {
    const that = this
    that.setData({
      isIntroductionOpen: !that.data.isIntroductionOpen
    })
  },
  /**
   * 获取公司信息
   */
  getCompanyDetail: function(callback) {
    const that = this
    that.setData({
      loading: true,
      noData: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        noData: false,
        company: {
          name: '美的集团',
          word: '美的生活，你我创造',
          industryLabel: '家电',
          scaleLabel: '1000人以上',
          processLabel: '上市公司',
          logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/j08d.jpg',
          introduction: '<p>美的是一家消费电器、暖通空调、机器人与自动化系统、智能供应链（物流）的科技集团，提供多元化的产品种类与服务。以“科技尽善，生活尽美”为企业愿景，将“联动人与万物，启迪美的世界”作为自身使命，恪守“敢知未来”的价值观，致力创造美好生活。</p><p>222美的是一家消费电器、暖通空调、机器人与自动化系统、智能供应链（物流）的科技集团，提供多元化的产品种类与服务。以“科技尽善，生活尽美”为企业愿景，将“联动人与万物，启迪美的世界”作为自身使命，恪守“敢知未来”的价值观，致力创造美好生活。</p>',
          liaison: '张小姐',
          telephone: '400-889-9315',
          address: '广东省 佛山市 顺德区',
          addressDetail: '广东省佛山市顺德区北滘镇美的大道126号',
          addressLatitude: 32.099994,
          addressLongitude: 121.324520
        }
      })
      callback && callback()
    }, 1000)
  },
  /**
   * 获取职位列表
   */
  getPositionList: function() {
    const that = this
    that.setData({
      positionListLoading: true,
      noPositionList: true
    })
    setTimeout(function() {
      that.setData({
        positionListLoading: false,
        noPositionList: false,
        positionList: [{
            name: '前端开发工程师',
            salaryNegotiated: true,
            workCity: '广州市',
            workYearLabel: '1-3年',
            workYearValue: '7:3',
            educationLabel: '本科',
            educationValue: '4:3',
            typeLabel: '全职',
            typeValue: '2:1',
            createTime: 1517149966000,
            visit: 5123
          },
          {
            name: '后端开发工程师',
            salaryNegotiated: false,
            salaryLowest: 15,
            salaryHighest: 30,
            workCity: '广州市',
            workYearLabel: '3-5年',
            workYearValue: '7:4',
            educationLabel: '本科',
            educationValue: '4:3',
            typeLabel: '全职',
            typeValue: '2:1',
            createTime: 1568015756000,
            visit: 6343
          },
          {
            name: '测试工程师',
            salaryNegotiated: false,
            salaryLowest: 15,
            salaryHighest: 30,
            workCity: '广州市',
            workYearLabel: '3-5年',
            workYearValue: '7:4',
            educationLabel: '本科',
            educationValue: '4:3',
            typeLabel: '全职',
            typeValue: '2:1',
            createTime: 1568215856000,
            visit: 16343
          },
          {
            name: '高级安全攻防工程师',
            salaryNegotiated: false,
            salaryLowest: 30,
            salaryHighest: 60,
            workCity: '广州市',
            workYearLabel: '3-5年',
            workYearValue: '7:4',
            educationLabel: '本科',
            educationValue: '4:3',
            typeLabel: '全职',
            typeValue: '2:1',
            createTime: 1567015756000,
            visit: 1233435
          }
        ],
        page: 1
      })
    }, 1000)
  },
})