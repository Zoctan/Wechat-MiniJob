const request = require('../utils/request.js')

const list = args => {
  return request(args, {
    url: '/collect/list',
    method: 'post'
  })
}

module.exports = {
  list: list
}