const areaList = [{
  name: '广东省',
  id: 1,
  parentId: 0
}, {
  name: '广州市',
  id: 2,
  parentId: 1
}, {
  name: '花都区',
  id: 3,
  parentId: 2
}, {
  name: '白云区',
  id: 4,
  parentId: 2
}, {
  name: '天河区',
  id: 5,
  parentId: 2
}, {
  name: '从化区',
  id: 6,
  parentId: 2
}, {
  name: '黄浦区',
  id: 7,
  parentId: 2
}]

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    multiArray: [],
    multiIndex: [0, 0, 0],
    province: []
  },

  /**
   * 组件生命周期
   */
  attached() {
    const province = areaList.filter(item => item.parentId == 0)
    const city = areaList.filter(item => item.parentId == province[0].id)
    const area = areaList.filter(item => item.parentId == city[0].id)
    const provinceList = province.map(item => item.name)
    const cityList = city.map(item => item.name)
    const regionList = area.map(item => item.name)
    this.setData({
      province: province,
      multiArray: [provinceList, cityList, regionList]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMultiPickerChange: function (e) {
      const that = this
      this.setData({
        multiIndex: that.data.multiIndex
      })
      this.triggerEvent('pickerChange', {
        region: this.data.multiArray[0][this.data.multiIndex[0]] + ' ' + this.data.multiArray[1][this.data.multiIndex[1]] + ' ' + this.data.multiArray[2][this.data.multiIndex[2]]
      })
    },
    bindMultiPickerColumnChange: function (e) {
      const that = this
      this.data.multiIndex[e.detail.column] = e.detail.value
      const provinceName = this.data.multiArray[0][this.data.multiIndex[0]]
      let provinceId = ''
      let regionList = [],
        cityList = [],
        provinceList = [],
        city = [],
        area = []
      try {
        this.data.province.forEach(item => {
          if (item.name === provinceName) {
            provinceId = item.id
            throw (new Error('find item'))
          }
        })
      } catch (err) {}
      city = areaList.filter(item => {
        return item.parentId == provinceId
      })
      if (e.detail.column == 0) {
        this.data.multiIndex = [e.detail.value, 0, 0]
        try {
          area = areaList.filter(item => {
            return item.parentId == city[this.data.multiIndex[1]].id
          })
        } catch (err) {}
      } else if (e.detail.column == 1) {
        this.data.multiIndex[2] = 0
        area = areaList.filter(item => {
          return item.parentId == city[e.detail.value].id
        })
      } else {
        const cityName = this.data.multiArray[1][this.data.multiIndex[1]]
        let cityId = ''
        try {
          areaList.forEach(item => {
            if (item.name === cityName) {
              cityId = item.id
              throw (new Error('find item'))
            }
          })
        } catch (err) {}
        area = areaList.filter(item => {
          return item.parentId == cityId
        })
      }
      provinceList = this.data.province.map(item => item.name)
      cityList = city.map(item => item.name)
      regionList = area.map(item => item.name)
      this.setData({
        multiArray: [provinceList, cityList, regionList],
        multiIndex: that.data.multiIndex
      })
    }
  }
})