Page({
  /**
   * 页面的初始数据
   */
  data: {
    noData: false,
    loading: false,
    title: null,
    description: null,
    time: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.info(options.id)
    this.getNotice()
  },
  /**
   * 获取公告
   */
  getNotice() {
    const that = this
    that.setData({
      loading: true,
      noData: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        noData: false,
        title: '系统维护公告',
        description: '<p>尊敬的用户：</p><p style="text-indent:2em;">您好，为了给您提供更好的服务，我们将会于2099-12-5（周三）23:00~23:30（北京时间）对在线客服系统进行升级维护。维护期间在线客服将无法使用，您可以拨打客户服务热线400-8888，给您带来不便，敬请谅解。</p><br/><p style="text-align:right;"><p>人才招聘</p><p>2099年12月5日</p></p>',
        time: '2099-12-05 12:30'
      })
    }, 1000)
  }
})