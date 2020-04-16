const toast = require('toast.js')
const wechatApi = require('../api/wechat.js')
const app = getApp()

const user = {
  /**
   *  登录/刷新 token（本地已有用户信息）
   */
  refreshToken: function (callback) {
    const that = this
    toast.loading('登录中...')
    wechatApi.refreshToken({
      success: response => {
        if (response.code === 200) {
          app.setToken(response.data)
          callback && callback()
        }
      },
      fail: error => {
        console.error('refreshToken', error)
        toast.fail('登录失败')
      },
      complete: response => {
        toast.loaded()
      }
    })
  },
  /**
   *  授权登录
   */
  login: function (e, callback) {
    const that = this
    toast.loading('授权登录中...')
    // 登录code凭证
    wx.login({
      success: res => {
        if (!res.code) {
          toast.fail('获取登录凭证失败')
          return
        }
        // 请求自己的服务器，解密用户信息，关联业务账户，获取unionId等加密信息
        wechatApi.login({
          data: {
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
            code: res.code
          },
          success: response => {
            // 待服务器解密成功后，再生成返回token
            if (response.code !== 200) {
              toast.fail('授权登录失败')
            } else {
              app.setToken(response.data)
              // 获取用户信息
              that.getInfo()
              callback && callback()
            }
          },
          fail: error => {
            console.error('login', error)
            toast.fail('授权登录失败')
          },
          complete: response => {
            toast.loaded()
          }
        })
      }
    })
  },
  /**
   *  获取用户信息
   */
  getInfo: function (callback) {
    const that = this
    toast.loading('获取用户信息中...')
    wechatApi.detail({
      success: response => {
        if (response.code === 200) {
          app.setInfo(response.data.wechatInfo, response.data.accountInfo)
          callback && callback()
        }
      },
      fail: error => {
        console.error('getInfo', error)
      },
      complete: response => {
        toast.loaded()
      }
    })
  },
  /**
   *  是否授权
   */
  isAuth: function () {
    return app.globalData.token ? true : false
  }
}

module.exports = user