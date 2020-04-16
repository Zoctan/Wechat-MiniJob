const app = getApp()
const util = require('../../../utils/util.js')
const accountApi = require('../../../api/account.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    resume: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.info(options)
    if (options.from === 'hr') {

    }
    this.getResume(options.resumeId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 获取简历
   */
  getResume(resumeId) {
    // todo resumeId
    const that = this
    that.setData({
      loading: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        resume: {
          workList: [{
              id: 1,
              company: '美的集团',
              position: '机器视觉工程师',
              startTime: '2019-01-01',
              endTime: '2019-10-10'
            },
            {
              id: 2,
              company: '格力电器',
              position: '人工智能研究员',
              startTime: '2029-01-01',
              endTime: '2029-10-10'
            }
          ],
          educationList: [{
              id: 1,
              school: '清华大学',
              major: '人工智能',
              startTime: '2001-09-01',
              endTime: '2005-07-01'
            },
            {
              id: 2,
              school: '北京大学',
              major: '机器学习',
              startTime: '2005-09-01',
              endTime: '2008-07-01'
            }
          ],
          projectList: [{
              id: 1,
              name: '基于神经网络的可视化数据展示',
              startTime: '2002-09-01',
              endTime: '2003-01-01'
            },
            {
              id: 2,
              name: '基于机器学习的数据爬虫',
              startTime: '2005-09-01',
              endTime: '2005-10-01'
            }
          ],
          languageList: [{
              id: 1,
              name: '英语',
              level: '中高级（商务对话）'
            },
            {
              id: 2,
              name: '法语',
              level: '中级（日常会话）'
            }
          ],
          skillList: [{
              id: 1,
              name: '大数据',
              level: 4
            },
            {
              id: 2,
              name: '机器学习',
              level: 5
            },
            {
              id: 3,
              name: '人工智能',
              level: 5
            },
            {
              id: 4,
              name: 'Python',
              level: 4
            },
            {
              id: 5,
              name: 'Java',
              level: 3
            }
          ],
          certificateList: [{
              id: 1,
              name: '国家奖学金',
              time: '2002-11-12'
            },
            {
              id: 2,
              name: '国家优秀立项',
              time: '2003-07-24'
            },
            {
              id: 3,
              name: '中外交流优秀青年',
              time: '2004-12-12'
            }
          ],
          siteList: [{
              id: 1,
              name: '淘宝网',
              link: 'taobao.com'
            },
            {
              id: 2,
              name: '百度网',
              link: 'baidu.com'
            },
            {
              id: 3,
              name: '京东网',
              link: 'jd.com'
            }
          ],
          wishList: [{
              id: 1,
              position: '大数据工程师',
              type: '全职',
              region: '广东省 广州市 天河区',
              salaryLowest: '70',
              salaryHighest: '100'
            },
            {
              id: 2,
              position: '机器学习工程师',
              type: '全职',
              region: '广东省 广州市 天河区',
              salaryLowest: '90',
              salaryHighest: '120',
            },
          ]
        }
      })
    }, 1000)
  }
})