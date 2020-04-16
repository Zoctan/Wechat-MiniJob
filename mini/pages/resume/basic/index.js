const app = getApp()
const toast = require('../../../utils/toast.js')
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')
const uploadApi = require('../../../api/upload.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageUploadUrl: app.getImageUploadUrl(),
    imageList: [],
    name: null,
    nameError: false,
    birthday: 0,
    displayBirthday: '请选择',
    sex: null,
    displaySex: '请选择',
    email: null,
    emailError: false,
    phone: null,
    phoneError: false,
    introduction: null,
    introductionError: false,
    sexs: [{
        value: 'male',
        label: '男'
      },
      {
        value: 'female',
        label: '女'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
   * 提交
   */
  onSubmit: function() {

  },
  /**
   * 上传头像
   */
  onUploadImageChange: function(e) {
    const that = this
    console.debug('onUploadImageChange', e)
    const {
      file
    } = e.detail
    if (file.status === 'uploading') {
      toast.loading('上传中...')
    } else if (file.status === 'done') {
      toast.loaded()
    }
  },
  onUploadImageComplete: function(e) {
    const that = this
    console.debug('onUploadImageComplete', e)
    const response = JSON.parse(e.detail.data)
    if (response.code === 200) {
      this.data.imageList.push({
        uid: response.data,
        url: app.setImageUploadUrlAndGet(response.data, false)
      })
      this.setData({
        imageList: that.data.imageList
      })
      toast.success('上传成功')
    } else {
      toast.fail('上传失败')
    }
    console.debug(this.data.imageList)
  },
  onUploadImagePreview: function(e) {
    const that = this
    console.debug('onUploadImagePreview', e)
    const {
      file
    } = e.detail
    wx.previewImage({
      current: file.url,
      urls: that.data.imageList.map(image => image.url),
    })
  },
  onUploadImageRemove: function(e) {
    const that = this
    const {
      file,
      fileList
    } = e.detail
    wx.showModal({
      content: '确定删除该图片？',
      success: res => {
        if (res.confirm) {
          toast.loading('删除中...')
          // 服务端删除
          uploadApi.removeImage({
            name: file.uid,
            success: response => {
              if (response.data === true) {
                toast.success('服务端删除成功')
              } else {
                toast.fail('服务端删除失败')
              }
            },
            fail: response => {
              toast.fail('服务端删除失败')
              console.error(response)
            },
            complete: response => {
              toast.loaded()
              // 本地删除
              that.setData({
                imageList: fileList.filter(image => image.uid !== file.uid),
              })
            }
          })
        }
      },
    })
  },
  /**
   * 姓名
   */
  onNameChange: function(e) {
    this.setData({
      nameError: util.isEmpty(e.detail.value),
      name: e.detail.value
    })
  },
  onNameFocus: function(e) {
    this.setData({
      nameError: util.isEmpty(e.detail.value)
    })
  },
  onNameBlur: function(e) {
    this.setData({
      nameError: util.isEmpty(e.detail.value)
    })
  },
  onNameClear: function(e) {
    this.setData({
      nameError: true,
      name: null
    })
  },
  onNameError: function() {
    wx.showModal({
      title: '请输入姓名',
      showCancel: false
    })
  },
  /**
   * 生日
   */
  onBirthdayConfirm: function(e) {
    console.info(e)
    this.setData({
      displayBirthday: e.detail.label,
      birthday: e.detail.label
    })
  },
  /**
   * 性别
   */
  onSexConfirm: function(e) {
    this.setData({
      displaySex: e.detail.label,
      sex: e.detail.label
    })
  },
  /**
   * 邮箱
   */
  onEmailChange: function(e) {
    this.setData({
      emailError: !util.isEmail(e.detail.value),
      email: e.detail.value
    })
  },
  onEmailFocus: function(e) {
    this.setData({
      emailError: !util.isEmail(e.detail.value)
    })
  },
  onEmailBlur: function(e) {
    this.setData({
      emailError: !util.isEmail(e.detail.value)
    })
  },
  onEmailClear: function(e) {
    this.setData({
      emailError: true,
      email: null
    })
  },
  onEmailError: function() {
    wx.showModal({
      title: '请输入邮箱',
      showCancel: false
    })
  },
  /**
   * 手机号
   */
  onPhoneChange: function(e) {
    this.setData({
      phoneError: !util.isPhone(e.detail.value),
      phone: e.detail.value
    })
  },
  onPhoneFocus: function(e) {
    this.setData({
      phoneError: !util.isPhone(e.detail.value)
    })
  },
  onPhoneBlur: function(e) {
    this.setData({
      phoneError: !util.isPhone(e.detail.value)
    })
  },
  onPhoneClear: function(e) {
    this.setData({
      phoneError: true,
      phone: null
    })
  },
  onPhoneError: function() {
    wx.showModal({
      title: '请输入11位手机号',
      showCancel: false
    })
  },
  /**
   * 自我介绍
   */
  onIntroductionChange: function(e) {
    this.setData({
      introductionError: util.isEmpty(e.detail.value),
      introduction: e.detail.value
    })
  },
  onIntroductionFocus: function(e) {
    this.setData({
      introductionError: util.isEmpty(e.detail.value)
    })
  },
  onIntroductionBlur: function(e) {
    this.setData({
      introductionError: util.isEmpty(e.detail.value)
    })
  },
  onIntroductionClear: function(e) {
    this.setData({
      introductionError: true,
      introduction: null
    })
  },
  onIntroductionError: function() {
    wx.showModal({
      title: '请输入自我介绍，让我们更了解你噢~',
      showCancel: false
    })
  }
})