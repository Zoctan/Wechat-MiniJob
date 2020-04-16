const request = require('../utils/request.js')

const removeImage = args => {
  return request(args, {
    url: '/upload/image/' + args['name'],
    method: 'delete'
  })
}

module.exports = {
  removeImage: removeImage
}