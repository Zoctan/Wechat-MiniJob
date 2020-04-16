const share = require('../../../utils/share.js')
const companyApi = require('../../../api/company.js')
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 搜索框值
    searchValue: null,
    swiperList: [{
        type: 'notice',
        id: 1,
        url: 'https://picsum.photos/750/750/?random&s=1'
      },
      {
        type: 'position',
        id: 2,
        companyId: 3,
        url: 'https://picsum.photos/750/750/?random&s=2'
      },
      {
        type: 'company',
        id: 3,
        url: 'https://picsum.photos/750/750/?random&s=3'
      }
    ],
    // 公司列表
    companyList: [],
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
    const that = this
    that.getCompanyList()
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
   * 点击轮播图
   */
  onSwiper(e) {
    console.info(e)
    const item = e.currentTarget.dataset.item
    if (item.type === 'notice') {
      wx.navigateTo({
        url: '/pages/notice/index?id=' + item.noticeId,
      })
    } else if (item.type === 'position') {
      wx.navigateTo({
        url: '/pages/position/detail/index?positionId=' + item.positionId + '&companyId=' + item.companyId + '&from=positionList',
      })
    } else if (item.type === 'company') {
      wx.navigateTo({
        url: '/pages/company/detail/index?companyId=' + item.companyId,
      })
    }
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
   *  查询公司列表 
   */
  getCompanyList() {
    const that = this
    that.setData({
      loading: true
    })
    setTimeout(function() {
      that.setData({
        loading: false
      })
      that.setData({
        companyList: [{
            logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/j08d.jpg',
            name: '美的集团',
            scaleLabel: '1000人以上',
            industryLabel: '家电',
            processLabel: '上市公司',
            location: '佛山',
            positionCount: 812,
            word: '美的生活，你我创造'
          },
          {
            logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/3fey.png',
            name: '宝洁(中国)有限公司总部',
            scaleLabel: '1000人以上',
            industryLabel: '日用品',
            processLabel: '上市公司',
            location: '广州',
            positionCount: 375,
            word: '亲近生活，美化生活'
          }
        ]
      })
      if (that.data.nextPage === 0 && that.data.companyList.length === 0) {
        that.setData({
          noData: true
        })
      }
    }, 1000)
  }
})