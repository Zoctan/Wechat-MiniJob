const request = require('../utils/request.js')

const list = args => {
  return request(args, {
    url: '/position/list',
    method: 'post'
  })
}

const detail = args => {
  return request(args, {
    url: '/position/' + args.positionId,
    method: 'get'
  })
}

module.exports = {
  list: list,
  detail: detail
}