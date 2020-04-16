App({
  globalData: {
    qqMapKey: '',
    api: 'http://127.0.0.1:8080',
    tokenKey: 'Authorization',
    tokenExpireKey: 'Expire',
    // 有效期与后端一致
    validPeriod: 30 * 24 * 60 * 60 * 1000,
    token: null,
    wechatInfoKey: 'WechatInfo',
    wechatInfo: {},
    accountInfoKey: 'AccountInfo',
    accountInfo: {}
  },
  onLaunch: function () {
    this.getToken()
    this.getInfo()
    console.info('app onload', this.globalData)
  },
  getImageUploadUrl: function () {
    return this.globalData.api + '/upload/image'
  },
  getToken: function (callback) {
    console.info('getToken', this.globalData)
    const currentTimestamp = Date.parse(new Date())
    const expiration = wx.getStorageSync(this.globalData.tokenExpireKey)
    // 不存在过期时间
    if (!expiration) {
      wx.removeStorageSync(this.globalData.tokenKey)
    } else {
      // 已过期
      if (currentTimestamp > expiration) {
        wx.removeStorageSync(this.globalData.tokenKey)
        wx.removeStorageSync(this.globalData.tokenExpireKey)
      } else {
        this.globalData.token = JSON.parse(wx.getStorageSync(this.globalData.tokenKey))
      }
    }
    callback && callback(this.globalData.token)
  },
  setToken: function (token) {
    // 过期时间
    const currentTimestamp = Date.parse(new Date())
    const expiration = currentTimestamp + this.globalData.validPeriod
    wx.setStorageSync(this.globalData.tokenExpireKey, expiration)
    wx.setStorageSync(this.globalData.tokenKey, JSON.stringify(token))
    this.globalData.token = token
    console.info('setToken', this.globalData)
  },
  getInfo: function () {
    this.globalData.wechatInfo = JSON.parse(wx.getStorageSync(this.globalData.wechatInfoKey) || '{}')
    this.globalData.accountInfo = JSON.parse(wx.getStorageSync(this.globalData.accountInfoKey) || '{}')
  },
  setInfo: function (wechatInfo, accountInfo) {
    this.globalData.wechatInfo = wechatInfo
    this.globalData.accountInfo = accountInfo
    wx.setStorageSync(this.globalData.wechatInfoKey, JSON.stringify(wechatInfo))
    wx.setStorageSync(this.globalData.accountInfoKey, JSON.stringify(accountInfo))
    console.info('setInfo', this.globalData)
  }
})