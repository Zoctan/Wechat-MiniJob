const request = require('../utils/request.js')

const update = args => {
  return request(args, {
    url: '/account/detail',
    method: 'put'
  })
}

module.exports = {
  update: update
}