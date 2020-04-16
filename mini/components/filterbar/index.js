const positionData = require('position.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: {
      type: String,
      value: ''
    },
    top: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 显示控制
    twoStage: false,
    radio: false,
    sort: false,
    multi: false,
    // 筛选栏数据
    twoStageDataLeft: {},
    radioData: {},
    sortData: {},
    multiData: {},
    twoStageDataRight: [],
    twoStageSelectedLeft: {},
    twoStageSelectedRight: '',
    radioSelected: '0',
    sortSelected: '0',
    multiSelected: [],
    // 返回筛选下来的参数对象数组
    selectedArray: []
  },

  /**
   * 组件生命周期
   */
  attached() {
    if (this.properties.mode === 'position') {
      this.setData({
        twoStageDataLeft: positionData.twoStageDataLeft,
        radioData: positionData.radioData,
        sortData: positionData.sortData,
        multiData: positionData.multiData
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 二级激活
    onTwoStageActive: function(e) {
      this.setData({
        twoStage: !this.data.twoStage,
        radio: false,
        sort: false,
        multi: false
      })
    },
    // 单选激活
    onRadioActive: function(e) {
      this.setData({
        twoStage: false,
        radio: !this.data.radio,
        sort: false,
        multi: false
      })
    },
    // 排序激活
    onSortActive: function(e) {
      this.setData({
        twoStage: false,
        radio: false,
        sort: !this.data.sort,
        multi: false
      })
    },
    // 筛选激活
    onMultiActive: function(e) {
      this.setData({
        twoStage: false,
        radio: false,
        sort: false,
        multi: !this.data.multi
      })
    },
    // 向数组添加唯一参数（小程序没有集合set对象）
    addUnique2Array: function(array, args) {
      const _args = args.target ? args.target.dataset : args
      const value = _args.group.value + ':' + _args.item.value
      const label = _args.group.label + ':' + _args.item.label
      let flag = false
      for (let i = 0; i < array.length; i++) {
        const group = value.split(':')[0]
        const arrayGroup = array[i].value.split(':')[0]
        // 找到该组
        if (arrayGroup === group) {
          array[i].value = value
          array[i].label = label
          flag = true
        }
      }
      if (!flag) {
        array.push({
          value: value,
          label: label
        })
      }
    },
    // 二级左栏
    onTwoStageLeft: function(e) {
      const selectedItemValue = e.target.dataset.item.value
      const selectedItemLabel = e.target.dataset.item.label
      const rightData = e.target.dataset.item.children
      this.setData({
        twoStageDataRight: rightData ? rightData : '',
        twoStageSelectedLeft: {
          value: selectedItemValue,
          label: selectedItemLabel
        },
        twoStageSelectedRight: '',
      })
      if (rightData == null || rightData.length == 0) {
        this.closeFilter()
        this.addUnique2Array(this.data.selectedArray, e)
        this.triggerEvent('confirm', {
          selectedArray: this.data.selectedArray
        })
      }
    },
    // 二级右栏
    onTwoStageRight: function(e) {
      const selectedGroupValue = e.target.dataset.group.value
      const selectedGroupLabel = e.target.dataset.group.label
      const selectedItemValue = e.target.dataset.item.value
      const selectedItemLabel = e.target.dataset.item.label
      this.closeFilter()
      this.setData({
        twoStageSelectedRight: selectedItemValue
      })
      this.addUnique2Array(this.data.selectedArray, {
        group: {
          value: selectedGroupValue,
          label: selectedGroupLabel
        },
        item: {
          value: this.data.twoStageSelectedLeft.value + ':' + selectedItemValue,
          label: this.data.twoStageSelectedLeft.label + ':' + selectedItemLabel
        }
      })
      this.triggerEvent('confirm', {
        selectedArray: this.data.selectedArray
      })
    },
    // 单选
    onRadio: function(e) {
      this.closeFilter()
      this.setData({
        radioSelected: e.target.dataset.item.value
      })
      this.addUnique2Array(this.data.selectedArray, e)
      this.triggerEvent('confirm', {
        selectedArray: this.data.selectedArray
      })
    },
    // 排序
    onSort: function(e) {
      this.closeFilter()
      this.setData({
        sortSelected: e.target.dataset.item.value
      })
      this.addUnique2Array(this.data.selectedArray, e)
      this.triggerEvent('confirm', {
        selectedArray: this.data.selectedArray
      })
    },
    // 多项筛选
    onMultiChange: function(e) {
      this.addUnique2Array(this.data.multiSelected, {
        group: {
          value: e.target.dataset.group.value,
          label: e.target.dataset.group.label
        },
        item: {
          value: e.target.dataset.item.value,
          label: e.target.dataset.item.label
        }
      })
      this.setData({
        multiSelected: this.data.multiSelected
      })
      this.addUnique2Array(this.data.selectedArray, e)
      this.triggerEvent('multiChange', {
        selectedArray: this.data.selectedArray
      })
    },
    onMultiReset: function() {},
    onMultiConfirm: function() {
      this.closeFilter()
      this.triggerEvent('confirm', {
        selectedArray: this.data.selectedArray
      })
    },
    // 关闭筛选
    closeFilter: function() {
      this.setData({
        twoStage: false,
        radio: false,
        sort: false,
        multi: false,
      })
    },
  }
})