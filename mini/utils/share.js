const getDefault = title => {
  return {
    title: title ? title : '人才招聘',
    imageUrl: '/images/icon/warn.png'
  }
}

module.exports = {
  getDefault: getDefault
}