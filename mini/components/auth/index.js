const user = require('../../utils/user.js')
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hasWechatInfo: false
  },
  
  /**
   * 组件生命周期
   */
  attached() {
    this.setData({
      hasWechatInfo: Object.keys(app.globalData.wechatInfo).length > 0 ? true : false
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     *  获取用户信息授权并登录
     */
    onGotUserInfo: function(e) {
      console.log(e.detail)
      if (e.detail.errMsg === 'getUserInfo:ok') {
        // 登录
        user.login(e, () => {
          wx.showTabBar()
          this.setData({
            show: false
          })
          this.triggerEvent('loginSuccess')
        })
      } else {
        this.onCancelledGetUserInfo()
      }
    },
    /**
     *  取消授权
     */
    onCancelledGetUserInfo: function() {
      const that = this
      wx.showModal({
        title: '提示',
        content: '取消授权，部分功能暂时无法使用',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            wx.showTabBar()
            that.setData({
              show: false
            })
          }
        }
      })
    },
    /**
     *  重新登陆，刷新信息
     */
    onRefreshToken: function() {
      user.refreshToken(() => {
        wx.showTabBar()
        this.setData({
          show: false
        })
        this.triggerEvent('loginSuccess')
      })
    },
    /**
     *  取消登录
     */
    onCancelledRefreshToken: function() {
      const that = this
      wx.showModal({
        title: '提示',
        content: '取消登录，部分功能暂时无法使用',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            wx.showTabBar()
            that.setData({
              show: false
            })
          }
        }
      })
    }
  }
})