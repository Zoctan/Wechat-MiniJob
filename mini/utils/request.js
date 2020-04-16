const app = getApp()

const request = (realArgs, apiArgs) => {
  let args = realArgs
  args['header'] = realArgs.header || {}
  // 固定认证参数
  app.getToken(token => {
    args['header'][app.globalData.tokenKey] = token
  })
  args['success'] = realArgs.success || (response => console.info(response))
  args['fail'] = realArgs.fail || (error => console.error(error))
  // 合并api的固定参数和真实调用时的调用参数
  Object.assign(args, apiArgs)
  console.info('request', args)
  wx.request({
    url: app.globalData.api + args['url'],
    method: args['method'],
    header: args['header'],
    data: args['data'],
    success: response => {
      console.info('request success', response)
      args['success'] && args['success'](response.data)
    },
    fail: error => {
      console.info('request fail', error)
      args['fail'] && args['fail'](error)
    },
    complete: response => {
      console.info('request complete', response)
      args['complete'] && args['complete'](response)
    }
  })
}

module.exports = request