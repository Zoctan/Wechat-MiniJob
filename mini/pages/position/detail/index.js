const app = getApp()
const util = require('../../../utils/util.js')
const share = require('../../../utils/share.js')
const positionApi = require('../../../api/position.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    position: null,
    noData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getPositionDetail(options.positionId)
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
    const that = this
    that.setData({
      loading: true
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(e) {},

  /**
   * 获取职位详情
   */
  getPositionDetail() {
    const that = this
    that.setData({
      loading: true,
      noData: true
    })
    setTimeout(function() {
      that.setData({
        loading: false,
        noData: false,
        position: {
          name: '前端开发工程师',
          salaryNegotiated: 1,
          workCity: '广东省 广州市 天河区',
          workCityLatitude: 32.099994,
          workCityLongitude: 121.324520,
          workCityDetail: '广东省广州市天河区珠江新城122号',
          workYearLabel: '1-3年',
          workYearValue: '7:3',
          educationLabel: '本科',
          educationValue: '4:3',
          typeLabel: '全职',
          typeValue: '2:1',
          visit: 1021,
          description: '<p>岗位职责：</p><p>1、面向海外用户提供精美、易用、高分享性的Web网站（包括PC、Mobile端）；</p><p>2、负责或参与公司商业运营平台的Web产品开发；</p><p>3、前端效率工具或者Web组件开发；</p><p>4、前端新方向探索和实践，如中间层架构、SSR、Web Components、PWA等。</p><p><br></p><p>任职要求：</p><p>1、全日制本科以上学历，985/211优先；</p><p>2、2年或以上前端工作经验，精通HTML5/CSS3/Javascript，具有良好的代码风格，对可阅读性、规范性有深刻理解；</p><p>3、具备跨浏览器、跨终端的开发能力和实践经验，熟悉Web性能优化；</p><p>4、掌握面向对象编程思想，使用过vue、React等相关MVVM框架，具备前端工程化开发思维与经验；</p><p>5、熟悉一门服务器端语言者优先，如NodeJS、Java、PHP、Python等，熟悉HTTP等常见网络协议；</p><p>6、对前端技术有持续的热情，良好的沟通能力、协作能力、抗压能力，能通过创新交互优化产品体验。</p>',
          createTime: 1517149966000,
          tagList: [{
            id: 1,
            name: '带薪年假'
          }, {
            id: 2,
            name: '六险一金'
          }, {
            id: 3,
            name: '下午茶'
          }, {
            id: 4,
            name: '弹性工作'
          }, {
            id: 5,
            name: '提供宿舍'
          }, {
            id: 6,
            name: '绩效奖金'
          }, {
            id: 7,
            name: '海外游学'
          }, {
            id: 8,
            name: '股票期权'
          }, {
            id: 9,
            name: '弹性假期'
          }, {
            id: 10,
            name: '定期体检'
          }],
          collectStatus: false
        },
        company: {
          id: 1,
          logoUrl: 'http://pmo49dac356.pic19.websiteonline.cn/upload/j08d.jpg',
          name: '美的集团广州分公司',
          industryLabel: '家电',
          industryValue: '',
          scaleLabel: '1000人以上',
          scaleValue: '',
        },
        visitorList: [{
            headImgUrl: 'https://picsum.photos/750/750/?random&s=1',
            nickName: '12345'
          },
          {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=2',
            nickName: '6790567'
          }, {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=3',
            nickName: '1213'
          },
          {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=4',
            nickName: 'Oct'
          }, {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=5',
            nickName: 'Zoc'
          },
          {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=6',
            nickName: 'asdasd'
          }, {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=7',
            nickName: 'vcxvcx'
          },
          {
            headImgUrl: 'https://picsum.photos/750/750/?random&s=8',
            nickName: 'bdfdfb'
          }
        ]
      })
    }, 1000)
  }
})