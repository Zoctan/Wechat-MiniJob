const request = require('../utils/request.js')

const list = args => {
  return request(args, {
    url: '/company/list',
    method: 'post'
  })
}

const detail = args => {
  return request(args, {
    url: '/company/' + args.companyId,
    method: 'get'
  })
}

module.exports = {
  list: list,
  detail: detail
}