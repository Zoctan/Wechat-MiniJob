const request = require('../utils/request.js')

const detail = args => {
  return request(args, {
    url: '/wechat/detail',
    method: 'get'
  })
}

const login = args => {
  return request(args, {
    url: '/wechat/token',
    method: 'post'
  })
}

const refreshToken = args => {
  return request(args, {
    url: '/wechat/token',
    method: 'put',
    data: {
      unionId: app.globalData.wechatInfo.unionId
    }
  })
}

module.exports = {
  detail: detail,
  login: login,
  refreshToken: refreshToken
}