const showToast = args => {
  wx.showToast({
    // 提示内容
    title: args.title,
    /** 系统默认的icon样式
     * 
     * "success" -> 成功        此时 title 文本最多显示 7 个汉字长度
     * "loading" -> 加载中      此时 title 文本最多显示 7 个汉字长度
     * "none"    -> 纯文字展示   此时 title 文本最多可显示两行
     */
    icon: args.icon || 'none',
    /** 自定义图标的本地路径
     * image 的优先级高于 icon
     * */
    image: args.image,
    /** 提示的延迟时间
     * 单位毫秒，默认：1500
     */
    duration: 2000,
    /** 是否显示透明蒙层
     * 防止触摸穿透，默认：false
     */
    mask: false,
  })
}

const loading = title => {
  showToast({
    title: title ? title : '努力加载中...',
    icon: 'loading'
  })
}

const loaded = () =>{
  wx.hideLoading()
}

const success = title => {
  showToast({
    title: title ? title : '成功',
    image: '/images/icon/success.png'
  })
}

const fail = title => {
  showToast({
    title: title ? title : '失败',
    image: '/images/icon/fail.png'
  })
}

const warn = title => {
  showToast({
    title: title ? title : '警告',
    image: '/images/icon/warn.png'
  })
}

module.exports = {
  showToast: showToast,
  loading: loading,
  loaded: loaded,
  success: success,
  fail: fail,
  warn: warn
}