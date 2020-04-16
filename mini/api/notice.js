const request = require('../utils/request.js')

const list = args => {
  return request(args, {
    url: '/notice/list',
    method: 'post'
  })
}

const detail = args => {
  return request(args, {
    url: '/notice/' + args.noticeId,
    method: 'get'
  })
}

module.exports = {
  list: list,
  detail: detail
}