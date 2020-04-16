Page({
  data: {
    latitude: null,
    longitude: null,
    markers: null
  },
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('map')
  },
  onLoad: function(options) {
    console.info(options)
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData({
      latitude: options.latitude,
      longitude: options.longitude,
      markers: [{
        id: 1,
        latitude: options.latitude,
        longitude: options.longitude,
        title: options.title
      }]
    })
  }
})